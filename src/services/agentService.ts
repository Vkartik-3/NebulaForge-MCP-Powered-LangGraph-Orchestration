import { ensureAgent } from "@/lib/agent";
import { ensureThread } from "@/lib/thread";
import type { MessageOptions, MessageResponse, ToolCall } from "@/types/message";
import prisma from "@/lib/database/prisma";
import { getHistory } from "@/lib/agent/memory";
import { BaseMessage, HumanMessage } from "@langchain/core/messages";
import { Command } from "@langchain/langgraph";

/**
 * Returns an async iterable producing incremental AI text chunks for a user text input.
 * Thread is ensured before streaming. The consumer (route) can package into SSE or any protocol.
 */
export async function streamResponse(params: {
  threadId: string;
  userText: string;
  opts?: MessageOptions;
}) {
  const { threadId, userText, opts } = params;
  console.log("[DEBUG] streamResponse called with:", { threadId, userText, opts });
  await ensureThread(threadId, userText);

  // If allowTool is present, use Command with resume action instead of regular inputs
  const inputs = opts?.allowTool
    ? new Command({
        resume: {
          action: opts.allowTool === "allow" ? "continue" : "update",
          data: {},
        },
      })
    : {
        messages: [new HumanMessage(userText)],
      };

  const agent = await ensureAgent({
    model: opts?.model,
    tools: opts?.tools,
    approveAllTools: opts?.approveAllTools,
  });

  // Type assertion needed for Command union with state update in v1
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const iterable = await agent.stream(inputs as any, {
    streamMode: ["updates"],
    configurable: { thread_id: threadId },
  });
  console.log("[DEBUG] Got iterable from agent.stream, starting generator...");

  async function* generator(): AsyncGenerator<MessageResponse, void, unknown> {
    console.log("[DEBUG] Generator function started, entering loop...");
    for await (const chunk of iterable) {
      console.log("[DEBUG] Received chunk:", JSON.stringify(chunk, null, 2));
      if (!chunk) continue;

      // Handle tuple format: [type, data]
      if (Array.isArray(chunk) && chunk.length === 2) {
        const [chunkType, chunkData] = chunk;
        console.log("[DEBUG] Chunk type:", chunkType);

        if (
          chunkType === "updates" &&
          chunkData &&
          typeof chunkData === "object" &&
          !Array.isArray(chunkData)
        ) {
          // Handle updates: ['updates', { agent: { messages: [Array] } }]
          if (
            "agent" in chunkData &&
            chunkData.agent &&
            typeof chunkData.agent === "object" &&
            !Array.isArray(chunkData.agent) &&
            "messages" in chunkData.agent
          ) {
            const messages = Array.isArray(chunkData.agent.messages)
              ? chunkData.agent.messages
              : [chunkData.agent.messages];
            for (const message of messages) {
              if (!message) continue;

              const isAIMessage =
                message?.constructor?.name === "AIMessageChunk" ||
                message?.constructor?.name === "AIMessage";

              console.log("[DEBUG] Message constructor name:", message?.constructor?.name, "isAIMessage:", isAIMessage);

              if (!isAIMessage) continue;

              const messageWithTools = message as Record<string, unknown>;
              const processedMessage = processAIMessage(messageWithTools);
              console.log("[DEBUG] Processed message:", processedMessage);
              if (processedMessage) {
                yield processedMessage;
              }
            }
          }
        }
      }
    }
  }
  return generator();
}

// Helper function to process any AI message and return the appropriate MessageResponse
function processAIMessage(message: Record<string, unknown>): MessageResponse | null {
  // Check if this is a tool call (content is array with functionCall)
  const hasToolCall =
    Array.isArray(message.content) &&
    message.content.some(
      (item: unknown) => item && typeof item === "object" && "functionCall" in item,
    );

  if (hasToolCall) {
    // Return full AIMessageData for tool calls to preserve all information
    return {
      type: "ai",
      data: {
        id: (message.id as string) || Date.now().toString(),
        content: typeof message.content === "string" ? message.content : "",
        tool_calls: (message.tool_calls as ToolCall[]) || undefined,
        additional_kwargs: (message.additional_kwargs as Record<string, unknown>) || undefined,
        response_metadata: (message.response_metadata as Record<string, unknown>) || undefined,
      },
    };
  } else {
    // Handle regular text content - extract text from various content types
    let text = "";
    if (typeof message.content === "string") {
      text = message.content;
    } else if (Array.isArray(message.content)) {
      text = message.content
        .map((c: string | { text?: string }) => (typeof c === "string" ? c : c?.text || ""))
        .join("");
    } else {
      text = String(message.content ?? "");
    }

    // Only return message if we have actual text content
    if (text.trim()) {
      return {
        type: "ai",
        data: { id: (message.id as string) || Date.now().toString(), content: text },
      };
    }
  }
  return null;
}

/** Fetch prior messages for a thread from the LangGraph checkpoint/memory system. */
export async function fetchThreadHistory(threadId: string): Promise<MessageResponse[]> {
  const thread = await prisma.thread.findUnique({ where: { id: threadId } });
  if (!thread) return [];
  try {
    const history = await getHistory(threadId);
    return history.map((msg: BaseMessage) => msg.toDict() as MessageResponse);
  } catch (e) {
    console.error("fetchThreadHistory error", e);
    return [];
  }
}
