# LangGraph.js AI Agent with Model Context Protocol

> **A production-ready Next.js template for building intelligent AI agents with LangGraph.js, featuring dynamic tool loading via Model Context Protocol (MCP), human-in-the-loop approvals, and persistent conversation memory.**

![Demo](docs/images/hero-demo.gif)

*Complete workflow demonstration: user input → tool call approval → execution → real-time streaming response*

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)](https://nextjs.org/)
[![LangGraph](https://img.shields.io/badge/LangGraph.js-1.0-green?logo=langchain)](https://langchain-ai.github.io/langgraphjs/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-blue?logo=postgresql)](https.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.16-2D3748?logo=prisma)](https://www.prisma.io/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)

---

## Table of Contents

- [Features](#features)
- [Why This Template?](#why-this-template)
- [Quick Start](#quick-start)
- [Detailed Setup Guide](#detailed-setup-guide)
- [Screenshots](#screenshots)
- [Usage Guide](#usage-guide)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [Resources](#learning-resources)
- [License](#license)

---

## Features

### 🔧 Dynamic Tool Loading with Model Context Protocol (MCP)

The **Model Context Protocol** is a revolutionary standard that allows AI agents to dynamically discover and use tools at runtime without hardcoding them into your application.

- **Zero-Code Tool Integration** - Add new capabilities through a web UI, no code deployment required
- **Universal Tool Standard** - Use any MCP-compatible tool server from the growing ecosystem
- **Multiple Transport Types** - Support for both stdio (local processes) and HTTP (remote services) MCP servers
- **Automatic Tool Discovery** - Tools are loaded dynamically when the agent starts
- **Namespaced Tool Names** - Prevent conflicts with automatic server name prefixing (e.g., `filesystem_read_file`)
- **Database-Backed Configuration** - All MCP server configs stored in PostgreSQL for persistence

**Supported MCP Server Types:**
- **Filesystem** - Read/write files, list directories
- **Web Search** - Brave Search, Google Search integration
- **Database** - PostgreSQL, SQLite, MongoDB connectors
- **API Integration** - REST APIs, GraphQL endpoints
- **Custom Servers** - Build your own with the MCP SDK

### 🤝 Human-in-the-Loop Tool Approval

Give users granular control over AI actions with interactive tool call approvals.

- **Pre-Execution Approval** - AI pauses before running sensitive operations
- **Detailed Parameter Inspection** - View exact arguments the AI plans to use
- **Three-Way Approval Flow**:
  - ✅ **Allow** - Execute the tool as requested
  - ❌ **Deny** - Reject the tool call and continue without it
  - ✏️ **Modify** - Edit parameters before execution (future enhancement)
- **Auto-Approval Mode** - Optional bypass for trusted environments
- **Per-Tool Granularity** - Choose which tools require approval
- **Real-Time Interrupts** - Uses LangGraph's interrupt system for seamless pausing/resuming

<div align="center">
  <img src="docs/images/tool-approval.png" alt="Tool Approval Dialog" width="600" />
  <p><em>Interactive tool approval dialog showing detailed parameter inspection</em></p>
</div>

### 💾 Persistent Conversation Memory

Never lose context with PostgreSQL-backed conversation persistence.

- **LangGraph Checkpointer** - Automatic state snapshots at every step
- **Full Message History** - Complete conversation logs with metadata
- **Thread-Based Organization** - Multiple independent conversations
- **Cross-Session Resume** - Pick up exactly where you left off
- **Tool Call Tracking** - Records all tool invocations and results
- **Interrupt Recovery** - Seamlessly resume after tool approvals

**Technical Implementation:**
- Uses `@langchain/langgraph-checkpoint-postgres` for state storage
- Stores graph state, messages, and tool results
- Enables time-travel debugging and conversation replay
- Thread IDs map to unique checkpoint namespaces

### ⚡ Real-Time Streaming Interface

Smooth, responsive user experience powered by Server-Sent Events.

- **Token-by-Token Streaming** - See AI responses as they're generated
- **Server-Sent Events (SSE)** - Efficient unidirectional streaming protocol
- **Optimistic UI Updates** - Instant message rendering with React Query
- **Type-Safe Messages** - Full TypeScript coverage for all message types
- **Graceful Error Handling** - Network failures, timeouts, and retries
- **Progressive Enhancement** - Works without JavaScript for basic functionality

**Message Types Supported:**
- `human` - User messages
- `ai` - Assistant responses (text + tool calls)
- `tool` - Tool execution results
- `error` - Error states with user-friendly messages

### 🎨 Modern Tech Stack

Built with cutting-edge technologies for maximum developer experience.

**Frontend:**
- **Next.js 15.5** - React framework with App Router and Turbopack
- **React 19.1** - Latest React with improved hooks and concurrent features
- **TypeScript 5.9** - Full type safety across the stack
- **Tailwind CSS 4** - Utility-first styling with custom configuration
- **shadcn/ui** - High-quality, accessible React components
- **Lucide Icons** - Beautiful, consistent icon system
- **Framer Motion** - Smooth animations and transitions

**Backend:**
- **Node.js** - JavaScript runtime (v18+ required)
- **Prisma 6.16** - Type-safe ORM with automatic migrations
- **PostgreSQL 17** - Robust relational database
- **LangGraph.js 1.0** - AI agent state machine framework
- **LangChain.js** - AI model abstractions and utilities

**AI/ML:**
- **OpenAI GPT Models** - GPT-4, GPT-4 Turbo, GPT-3.5 Turbo support
- **Google Gemini Models** - Gemini 1.5 Flash, Pro, Ultra support
- **Anthropic Claude** - Easy to add via LangChain adapters
- **Custom Models** - Bring your own model provider

**Developer Tools:**
- **pnpm** - Fast, disk-efficient package manager
- **ESLint** - Code linting with Next.js config
- **Prettier** - Opinionated code formatter
- **Docker Compose** - One-command database setup

---

## Why This Template?

### The Problem

Building production-ready AI agents is complex:
- 🔴 Tool integration requires custom code for each capability
- 🔴 No standardized way to manage agent permissions
- 🔴 Conversation history gets lost between sessions
- 🔴 Streaming responses are hard to implement correctly
- 🔴 Coordinating UI state with async AI operations is tricky

### The Solution

This template provides:
- ✅ **MCP Standard** - Universal tool protocol supported by Anthropic, OpenAI, and others
- ✅ **Built-In Approvals** - Human oversight without custom workflow code
- ✅ **Automatic Persistence** - Zero-config conversation memory
- ✅ **Production SSE** - Battle-tested streaming implementation
- ✅ **React Query Integration** - Optimistic UI that "just works"

### Who Is This For?

- **AI Engineers** - Quickly prototype LangGraph agents with real tools
- **Product Teams** - Ship AI features faster with proven architecture
- **Researchers** - Experiment with agent workflows and tool use
- **Learners** - Understand production AI agent patterns through working code

---

## Quick Start

### Prerequisites

Before starting, ensure you have:

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **pnpm** - Install with `npm install -g pnpm`
- **Docker Desktop** - [Download here](https://www.docker.com/products/docker-desktop/) (for PostgreSQL)
- **AI API Key** - Get one from:
  - [OpenAI Platform](https://platform.openai.com/api-keys) (GPT models)
  - [Google AI Studio](https://aistudio.google.com/app/apikey) (Gemini models)

### Installation (5 minutes)

```bash
# 1. Clone the repository
git clone 
cd fullstack-langgraph-nextjs-agent

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
cp .env.example .env.local

# 4. Edit .env.local with your API key (see next section)

# 5. Start PostgreSQL with Docker
docker compose up -d

# 6. Set up the database
pnpm prisma:generate
pnpm prisma:migrate

# 7. Start the development server
pnpm dev
```

**🎉 That's it!** Open [http://localhost:3000](http://localhost:3000) and start chatting with your AI agent.

---

## Detailed Setup Guide

### Step 1: Environment Configuration

After copying `.env.example` to `.env.local`, configure the following variables:

```env
# =============================================================================
# API Base URL (for frontend API calls)
# =============================================================================
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api/agent

# =============================================================================
# PostgreSQL Database Configuration
# =============================================================================
# These match the Docker Compose settings - only change if you modify compose.yaml
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=mydb

# Full database connection string
# Format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public
DATABASE_URL=postgresql://user:password@localhost:5434/mydb?schema=public

# =============================================================================
# AI Model API Keys (at least one required)
# =============================================================================

# Google AI (Gemini models) - Free tier: 15 requests/minute
# Get your key: https://aistudio.google.com/app/apikey
GOOGLE_API_KEY=your_google_api_key_here

# OpenAI (GPT models) - Paid tier required
# Get your key: https://platform.openai.com/api-keys
OPENAI_API_KEY=your_openai_api_key_here

# =============================================================================
# Optional: Default Model Selection
# =============================================================================
# Uncomment and set your preferred default model
# DEFAULT_MODEL=gpt-4o-mini          # OpenAI GPT-4 Omni Mini
# DEFAULT_MODEL=gpt-4-turbo          # OpenAI GPT-4 Turbo
# DEFAULT_MODEL=gemini-2.5-flash     # Google Gemini 2.5 Flash (fastest)
# DEFAULT_MODEL=gemini-1.5-pro       # Google Gemini 1.5 Pro (best reasoning)
```

### Step 2: Database Setup

**Start PostgreSQL:**

```bash
# Start Docker Desktop first (if not running)

# Start PostgreSQL in the background
docker compose up -d

# Verify it's running
docker ps
# Should show: postgres:17-alpine container on port 5434
```

**Run Migrations:**

```bash
# Generate Prisma client (needed after any schema changes)
pnpm prisma:generate

# Create database tables
pnpm prisma:migrate

# Optional: Open Prisma Studio to inspect the database
pnpm prisma:studio
# Opens at http://localhost:5555
```

**Database Schema:**

The migration creates two tables:

```prisma
model Thread {
  id        String   @id @default(uuid())  // Unique thread ID
  title     String                         // Thread name/title
  createdAt DateTime @default(now())       // Creation timestamp
  updatedAt DateTime @updatedAt            // Last update timestamp
}

model MCPServer {
  id        String        @id @default(uuid())  // Unique server ID
  name      String        @unique                // Server name (e.g., "filesystem")
  type      MCPServerType                       // "stdio" or "http"
  enabled   Boolean       @default(true)        // Enable/disable server
  // For stdio servers:
  command   String?                             // Command to run (e.g., "npx")
  args      Json?                               // Command arguments array
  env       Json?                               // Environment variables
  // For http servers:
  url       String?                             // HTTP endpoint URL
  headers   Json?                               // HTTP headers (auth, etc.)
  createdAt DateTime      @default(now())
  updatedAt DateTime      @updatedAt
}

enum MCPServerType {
  stdio  // Local process communication
  http   // Remote HTTP communication
}
```

### Step 3: Start Development Server

```bash
pnpm dev
```

**Expected Output:**

```
  ▲ Next.js 15.5.4
  - Local:        http://localhost:3000
  - Turbopack:    enabled
  - Experiments:  turbopack

 ✓ Starting...
 ✓ Ready in 1.2s
```

**Troubleshooting Server Start:**

| Issue | Solution |
|-------|----------|
| Port 3000 already in use | Kill the process: `lsof -ti:3000 \| xargs kill -9` |
| Database connection failed | Ensure Docker is running: `docker ps` |
| Prisma client not found | Run: `pnpm prisma:generate` |
| Module not found | Delete `node_modules` and `pnpm-lock.yaml`, then `pnpm install` |

### Step 4: Verify Installation

1. **Open the app**: Navigate to [http://localhost:3000](http://localhost:3000)
2. **Create a thread**: Click "New Thread" in the sidebar
3. **Send a message**: Type "Hello!" and press Enter
4. **Check AI response**: You should see a streaming response from the AI

**If the AI doesn't respond:**
- Check browser console for errors (F12 → Console tab)
- Verify your API key is correct in `.env.local`
- Ensure you have API quota remaining
- Check server logs in the terminal running `pnpm dev`

---

## Screenshots

<table>
  <tr>
    <td align="center">
      <img src="docs/images/chat-interface.png" alt="Chat Interface" width="400" />
      <br /><strong>Main Chat Interface</strong>
      <br />Clean, responsive design with real-time streaming responses
    </td>
    <td align="center">
      <img src="docs/images/mcp-configuration.png" alt="MCP Configuration" width="400" />
      <br /><strong>MCP Server Management</strong>
      <br />Easy setup and configuration of tool servers via web UI
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="docs/images/thread-sidebar.png" alt="Thread Management" width="400" />
      <br /><strong>Thread Management</strong>
      <br />Organize multiple conversations with persistent history
    </td>
    <td align="center">
      <img src="docs/images/agent-configuration.png" alt="Agent Configuration" width="400" />
      <br /><strong>Agent Configuration</strong>
      <br />Support for multiple AI model providers (OpenAI, Google)
    </td>
  </tr>
</table>

---

## Usage Guide

### Creating and Managing Threads

**Threads** are independent conversation sessions with their own history and context.

1. **Create a New Thread**:
   - Click the "New Thread" button in the sidebar
   - Give it a descriptive title (optional)
   - Start chatting immediately

2. **Switch Between Threads**:
   - Click any thread in the sidebar to switch
   - All message history is preserved
   - Each thread maintains its own conversation state

3. **Delete a Thread**:
   - Hover over a thread in the sidebar
   - Click the trash icon
   - Confirm deletion (this cannot be undone)

### Adding MCP Servers

MCP servers provide tools that your AI agent can use. Here's how to add them:

1. **Navigate to Settings**:
   - Click the gear icon (⚙️) in the sidebar
   - Go to the "MCP Servers" tab

2. **Add a New Server**:
   - Click "Add MCP Server"
   - Fill out the configuration form

3. **Server Configuration Fields**:

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| **Name** | Yes | Unique identifier for this server | `filesystem` |
| **Type** | Yes | Communication protocol | `stdio` or `http` |
| **Command** | For stdio | Executable command | `npx` |
| **Args** | For stdio | Command arguments (JSON array) | `["@modelcontextprotocol/server-filesystem", "/path/to/folder"]` |
| **Environment** | No | Environment variables (JSON object) | `{"API_KEY": "secret"}` |
| **URL** | For http | HTTP endpoint | `http://localhost:8080/mcp` |
| **Headers** | For http | HTTP headers (JSON object) | `{"Authorization": "Bearer token"}` |
| **Enabled** | Yes | Whether to load this server | Checkbox (default: true) |

![Add MCP Server](docs/images/add-mcp-server.png)
*MCP server configuration form showing filesystem server setup*

### Example MCP Server Configurations

#### 1. Filesystem Server (Local File Access)

Allows the AI to read/write files in a specific directory.

```json
{
  "name": "filesystem",
  "type": "stdio",
  "command": "npx",
  "args": [
    "@modelcontextprotocol/server-filesystem",
    "/Users/yourname/Documents"
  ],
  "enabled": true
}
```

**⚠️ Important**: The path must exist and be accessible. Use absolute paths.

**Tools provided:**
- `filesystem_read_file` - Read file contents
- `filesystem_write_file` - Write to a file
- `filesystem_list_directory` - List directory contents
- `filesystem_create_directory` - Create new directory
- `filesystem_move_file` - Move/rename files
- `filesystem_get_file_info` - Get file metadata

#### 2. Brave Search Server (Web Search)

Enables AI to search the web using Brave Search API.

```json
{
  "name": "brave-search",
  "type": "stdio",
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-brave-search"],
  "env": {
    "BRAVE_API_KEY": "your_brave_api_key"
  },
  "enabled": true
}
```

**Get API Key**: [Brave Search API](https://brave.com/search/api/)

**Tools provided:**
- `brave-search_web_search` - Search the web
- `brave-search_local_search` - Search for local businesses

#### 3. PostgreSQL Database Server

Allows AI to query your PostgreSQL database.

```json
{
  "name": "postgres",
  "type": "stdio",
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-postgres"],
  "env": {
    "POSTGRES_CONNECTION_STRING": "postgresql://user:pass@localhost:5432/dbname"
  },
  "enabled": true
}
```

**⚠️ Security Warning**: Only use with read-only database users in production.

#### 4. HTTP API Server (Custom Remote Tools)

Connect to a custom MCP server running over HTTP.

```json
{
  "name": "custom-api",
  "type": "http",
  "url": "https://api.example.com/mcp",
  "headers": {
    "Authorization": "Bearer your_api_token",
    "X-API-Version": "1.0"
  },
  "enabled": true
}
```

**Building Custom HTTP Servers**: See [MCP SDK Documentation](https://modelcontextprotocol.io/docs/building-servers)

### Tool Approval Workflow

When tool approval is enabled, here's what happens:

1. **AI Analyzes Request**:
   - User sends a message like "What files are in my Documents folder?"
   - AI decides to use the `filesystem_list_directory` tool

2. **Approval Prompt Appears**:
   - Execution pauses automatically
   - UI shows tool name, description, and parameters
   - User sees exact arguments: `{"path": "/Users/yourname/Documents"}`

3. **User Makes Decision**:
   - **✅ Allow**: Tool executes with the shown parameters
   - **❌ Deny**: AI continues without using the tool
   - *(Future)* **✏️ Modify**: Edit parameters before execution

4. **Execution Continues**:
   - If allowed, tool runs and returns results
   - AI incorporates results into its response
   - Conversation flows naturally

**Configuring Approval Settings:**

```typescript
// In your chat interface, set approval mode:
const { sendMessage } = useChatThread({ threadId });

// Require approval for all tools
await sendMessage("Search the web for AI news", {
  approveAllTools: false  // Default behavior
});

// Auto-approve all tools (trusted mode)
await sendMessage("Search the web for AI news", {
  approveAllTools: true
});
```

**Per-Tool Approval** (Future Enhancement):
```typescript
// Approve specific tools only
await sendMessage("Search the web and read my files", {
  tools: ["brave-search_web_search"],  // Only web search allowed
  approveAllTools: false
});
```

### Choosing AI Models

Switch between different AI models based on your needs:

**Via UI** (Recommended):
1. Open settings (⚙️ icon in sidebar)
2. Go to "Agent Configuration"
3. Select your preferred model from the dropdown

**Via API**:
```typescript
await sendMessage("Explain quantum computing", {
  model: "gpt-4o-mini"  // or "gemini-2.5-flash"
});
```

**Model Comparison:**

| Model | Provider | Speed | Cost | Best For |
|-------|----------|-------|------|----------|
| `gemini-2.5-flash` | Google | ⚡⚡⚡ Fast | $ Free Tier | Quick responses, high volume |
| `gemini-1.5-pro` | Google | ⚡⚡ Medium | $$ Low | Complex reasoning, code |
| `gpt-4o-mini` | OpenAI | ⚡⚡ Medium | $ Low | General tasks |
| `gpt-4-turbo` | OpenAI | ⚡ Slow | $$$ High | Advanced reasoning |

**Rate Limits (Free Tiers):**
- Google Gemini Flash: 15 requests/minute, 1,500/day
- OpenAI: Requires paid account

---

## Architecture

### High-Level System Design

```
┌─────────────────────────────────────────────────────────────────┐
│                         Next.js Frontend                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   Thread.tsx │  │ useChatThread│  │  React Query Cache  │  │
│  │  (UI Layer)  │─▶│  (Hook)      │─▶│  (State Management) │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼ HTTP/SSE
┌─────────────────────────────────────────────────────────────────┐
│                      Next.js API Routes                         │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  /api/agent/stream                                       │   │
│  │  • Receives user messages                                │   │
│  │  • Opens SSE connection                                  │   │
│  │  • Streams AI responses chunk-by-chunk                   │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       Agent Service Layer                       │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  agentService.ts (streamResponse)                        │   │
│  │  • Loads MCP tools from database                         │   │
│  │  • Creates LangGraph agent instance                      │   │
│  │  • Handles streaming iteration                           │   │
│  │  • Processes message chunks                              │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      LangGraph.js Agent                         │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────────────┐ │
│  │   START     │─▶│ callModel    │─▶│ tool_approval (wait)   │ │
│  └─────────────┘  └──────────────┘  └────────────────────────┘ │
│                           │                      │               │
│                           ▼                      ▼               │
│                    ┌─────────────┐      ┌──────────────────┐    │
│                    │  AI Model   │      │  User Approves   │    │
│                    │  (OpenAI/   │      │  or Denies Tool  │    │
│                    │   Google)   │      └──────────────────┘    │
│                    └─────────────┘               │               │
│                           │                      ▼               │
│                           ▼              ┌──────────────────┐    │
│                    ┌─────────────┐      │  callTools       │    │
│                    │  Response   │◀─────│  (execute)       │    │
│                    └─────────────┘      └──────────────────┘    │
│                           │                      │               │
│                           └──────────┬───────────┘               │
│                                      ▼                            │
│                              ┌──────────────┐                    │
│                              │   END        │                    │
│                              └──────────────┘                    │
└─────────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┴─────────────┐
                ▼                           ▼
┌────────────────────────────┐  ┌─────────────────────────┐
│   MCP Tool Servers         │  │  PostgreSQL Database    │
│  ┌──────────────────────┐  │  │  ┌──────────────────┐   │
│  │ Filesystem Server    │  │  │  │ Thread Table     │   │
│  │ (stdio)              │  │  │  ├──────────────────┤   │
│  ├──────────────────────┤  │  │  │ MCPServer Table  │   │
│  │ Web Search Server    │  │  │  ├──────────────────┤   │
│  │ (stdio)              │  │  │  │ Checkpoints      │   │
│  ├──────────────────────┤  │  │  │ (LangGraph)      │   │
│  │ Custom HTTP Server   │  │  │  └──────────────────┘   │
│  │ (http)               │  │  │                          │
│  └──────────────────────┘  │  └─────────────────────────┘
└────────────────────────────┘
```

### Core Components

#### 1. Agent Builder (`src/lib/agent/builder.ts`)

The heart of the LangGraph agent. Constructs a state machine with nodes and edges.

```typescript
class AgentBuilder {
  // Creates a StateGraph with:
  // 1. callModel - Invokes AI model
  // 2. tool_approval - Interrupts for user approval
  // 3. callTools - Executes approved tools

  build() {
    const graph = new StateGraph(MessagesAnnotation)
      .addNode("callModel", this.callModel.bind(this))
      .addNode("callTools", toolNode)
      .addEdge("__start__", "callModel")
      .addConditionalEdges("callModel", this.routeAfterModel.bind(this));

    return graph.compile({
      checkpointer: this.checkpointer,
      interruptBefore: ["tool_approval"]  // Pause for approval
    });
  }
}
```

**Key Features:**
- **State Management**: Uses `MessagesAnnotation` for type-safe state
- **Interrupts**: Pauses execution before `tool_approval` node
- **Checkpointing**: Saves state to PostgreSQL at each step
- **Conditional Routing**: Smart edges based on AI output (tool calls vs final answer)

#### 2. MCP Integration (`src/lib/agent/mcp.ts`)

Dynamically loads tools from MCP servers configured in the database.

```typescript
async function loadMCPTools(): Promise<Tool[]> {
  // 1. Fetch enabled MCP servers from PostgreSQL
  const servers = await prisma.mCPServer.findMany({
    where: { enabled: true }
  });

  // 2. Connect to each server (stdio or HTTP)
  for (const server of servers) {
    const client = server.type === 'stdio'
      ? new StdioClientTransport(server.command, server.args)
      : new HttpClientTransport(server.url, server.headers);

    // 3. Fetch tools from the server
    const tools = await client.listTools();

    // 4. Prefix tool names to prevent conflicts
    // e.g., "read_file" becomes "filesystem_read_file"
    const prefixedTools = tools.map(tool => ({
      ...tool,
      name: `${server.name}_${tool.name}`
    }));

    allTools.push(...prefixedTools);
  }

  return allTools;
}
```

**Why This Matters:**
- **Dynamic Loading**: Add/remove tools without redeploying
- **Namespace Safety**: Multiple servers can have tools with same names
- **Protocol Agnostic**: Works with local (stdio) and remote (HTTP) servers
- **Database-Driven**: Configuration persists across restarts

#### 3. Streaming Service (`src/services/agentService.ts`)

Handles Server-Sent Events streaming from the agent to the frontend.

```typescript
export async function streamResponse(params: {
  threadId: string;
  userText: string;
  opts?: MessageOptions;
}) {
  // 1. Get or create agent with MCP tools
  const agent = await getOrCreateAgent();

  // 2. Stream graph execution
  const iterable = await agent.stream(
    { messages: [new HumanMessage(params.userText)] },
    {
      configurable: { thread_id: params.threadId },
      streamMode: "updates"  // Get incremental updates
    }
  );

  // 3. Transform graph chunks into message chunks
  async function* generator() {
    for await (const chunk of iterable) {
      // Extract messages from graph state
      const messages = chunk?.callModel?.messages || [];

      for (const msg of messages) {
        // Handle different message types
        if (isAIMessage(msg)) {
          yield {
            type: "ai",
            data: {
              content: msg.content,  // Text response
              tool_calls: msg.tool_calls  // Tool requests
            }
          };
        } else if (isToolMessage(msg)) {
          yield {
            type: "tool",
            data: {
              content: msg.content,  // Tool results
              tool_call_id: msg.tool_call_id
            }
          };
        }
      }
    }
  }

  return generator();
}
```

**Streaming Flow:**
1. User sends message → Frontend calls `/api/agent/stream`
2. API route opens SSE connection
3. `streamResponse` creates async generator
4. Each graph update → new SSE event
5. Frontend receives chunks → updates UI incrementally

#### 4. Chat Hook (`src/hooks/useChatThread.ts`)

React hook that manages client-side chat state with React Query.

```typescript
export function useChatThread({ threadId }: Options) {
  const queryClient = useQueryClient();

  // Fetch message history (with React Query caching)
  const { data: messages } = useQuery({
    queryKey: ["messages", threadId],
    queryFn: () => fetchMessageHistory(threadId),
    enabled: !!threadId
  });

  // Send message with optimistic updates
  const sendMessage = async (text: string, opts?: MessageOptions) => {
    // 1. Optimistic UI: add user message immediately
    const userMessage = { type: "human", data: { content: text } };
    queryClient.setQueryData(["messages", threadId], (old) => [
      ...old,
      userMessage
    ]);

    // 2. Open SSE stream
    const stream = createMessageStream(threadId, text, opts);

    // 3. Handle incoming chunks
    stream.onmessage = (event) => {
      const chunk = JSON.parse(event.data);

      // Append AI response incrementally
      queryClient.setQueryData(["messages", threadId], (old) => {
        // Find existing AI message or create new one
        // Update with new content chunk
        // Return updated array
      });
    };
  };

  return { messages, sendMessage };
}
```

**Why React Query?**
- **Optimistic Updates**: Instant UI feedback
- **Automatic Caching**: No redundant API calls
- **Stale-While-Revalidate**: Fast perceived performance
- **Devtools Integration**: Debug state changes easily

### Data Flow Example

Let's trace a complete user interaction:

**User**: "What files are in my Documents folder?"

**1. Frontend (Thread.tsx)**:
```typescript
// User presses Enter
onSubmit(message) {
  sendMessage(message, { approveAllTools: false });
}
```

**2. Chat Hook (useChatThread.ts)**:
```typescript
// Optimistically add user message to UI
queryClient.setQueryData(["messages", threadId], (old) => [
  ...old,
  { type: "human", data: { content: message } }
]);

// Open SSE connection
const stream = createMessageStream(threadId, message);
```

**3. API Route (/api/agent/stream/route.ts)**:
```typescript
export async function GET(req: NextRequest) {
  const userContent = searchParams.get("content");
  const threadId = searchParams.get("threadId");

  // Create SSE stream
  const stream = new ReadableStream({
    async start(controller) {
      const iterable = await streamResponse({ threadId, userText: userContent });

      for await (const chunk of iterable) {
        // Send SSE event
        controller.enqueue(`data: ${JSON.stringify(chunk)}\n\n`);
      }
    }
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/event-stream" }
  });
}
```

**4. Agent Service (agentService.ts)**:
```typescript
// Load MCP tools (including filesystem)
const tools = await loadMCPTools();

// Create agent
const agent = await new AgentBuilder()
  .setTools(tools)
  .build();

// Stream execution
const iterable = await agent.stream(
  { messages: [new HumanMessage(userContent)] },
  { configurable: { thread_id: threadId } }
);

// Yield chunks
for await (const chunk of iterable) {
  yield { type: "ai", data: chunk.callModel.messages[0] };
}
```

**5. LangGraph Agent (builder.ts)**:
```typescript
// Node: callModel
async callModel(state) {
  const response = await this.model.invoke(state.messages);

  // Response contains tool call:
  // {
  //   tool_calls: [{
  //     name: "filesystem_list_directory",
  //     args: { path: "/Users/yourname/Documents" }
  //   }]
  // }

  return { messages: [response] };
}

// Conditional edge: has tool calls → interrupt for approval
routeAfterModel(state) {
  const lastMessage = state.messages[state.messages.length - 1];
  if (lastMessage.tool_calls?.length > 0) {
    return "tool_approval";  // INTERRUPT HERE
  }
  return "__end__";
}
```

**6. Frontend Shows Approval UI**:
```typescript
// UI renders tool approval dialog
<ToolApprovalDialog
  toolName="filesystem_list_directory"
  args={{ path: "/Users/yourname/Documents" }}
  onApprove={() => approveToolExecution(toolCallId, "allow")}
  onDeny={() => approveToolExecution(toolCallId, "deny")}
/>
```

**7. User Clicks "Allow"**:
```typescript
approveToolExecution(toolCallId, "allow") {
  // Resume graph execution with approval
  await handleStreamResponse({
    threadId,
    opts: { allowTool: "allow" }
  });
}
```

**8. Agent Resumes**:
```typescript
// Node: callTools (auto-executed after approval)
async callTools(state) {
  const results = await executeMCPTool(
    "filesystem_list_directory",
    { path: "/Users/yourname/Documents" }
  );

  return { messages: [new ToolMessage(results)] };
}

// Back to callModel with tool results
async callModel(state) {
  // State now includes tool results
  // AI generates final response
  const response = await this.model.invoke(state.messages);

  // Response: "I found 15 files in your Documents folder: ..."
  return { messages: [response] };
}
```

**9. Frontend Displays Final Response**:
```typescript
// SSE chunk received
stream.onmessage = (event) => {
  const chunk = JSON.parse(event.data);

  // Incrementally update AI message in UI
  setMessages((old) => [
    ...old,
    { type: "ai", data: { content: chunk.data.content } }
  ]);
};
```

**Result**: User sees their file list!

---

## Project Structure

```
fullstack-langgraph-nextjs-agent/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── api/                      # API routes
│   │   │   └── agent/
│   │   │       ├── stream/
│   │   │       │   └── route.ts      # SSE streaming endpoint
│   │   │       ├── threads/
│   │   │       │   └── route.ts      # Thread CRUD operations
│   │   │       └── mcp/
│   │   │           └── route.ts      # MCP server management
│   │   ├── thread/
│   │   │   └── [id]/
│   │   │       └── page.tsx          # Individual thread page
│   │   ├── layout.tsx                # Root layout with providers
│   │   ├── page.tsx                  # Home page (redirects to thread)
│   │   └── globals.css               # Global styles
│   │
│   ├── components/                   # React components
│   │   ├── Thread.tsx                # Main chat interface
│   │   ├── ThreadSidebar.tsx         # Thread list sidebar
│   │   ├── MessageBubble.tsx         # Individual message component
│   │   ├── ToolApprovalDialog.tsx    # Tool approval UI
│   │   ├── MCPServerForm.tsx         # MCP server configuration
│   │   └── ui/                       # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── dialog.tsx
│   │       └── ...
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useChatThread.ts          # Main chat hook
│   │   ├── useThreads.ts             # Thread management
│   │   └── useMCPServers.ts          # MCP server CRUD
│   │
│   ├── lib/                          # Core utilities
│   │   ├── agent/
│   │   │   ├── builder.ts            # LangGraph agent builder
│   │   │   ├── mcp.ts                # MCP tool loader
│   │   │   └── checkpointer.ts       # PostgreSQL checkpointer
│   │   ├── prisma.ts                 # Prisma client singleton
│   │   └── utils.ts                  # Helper functions
│   │
│   ├── services/                     # Business logic layer
│   │   ├── agentService.ts           # Agent streaming service
│   │   ├── chatService.ts            # Chat message service
│   │   ├── threadService.ts          # Thread CRUD service
│   │   └── mcpService.ts             # MCP server service
│   │
│   └── types/                        # TypeScript type definitions
│       ├── message.ts                # Message types
│       ├── thread.ts                 # Thread types
│       └── mcp.ts                    # MCP server types
│
├── prisma/
│   ├── schema.prisma                 # Database schema
│   └── migrations/                   # Database migrations
│       └── 20240101000000_init/
│           └── migration.sql
│
├── docs/
│   └── images/                       # Documentation images
│       ├── hero-demo.gif
│       ├── chat-interface.png
│       ├── tool-approval.png
│       └── ...
│
├── public/                           # Static assets
│   ├── favicon.ico
│   └── ...
│
├── .env.example                      # Environment template
├── .env.local                        # Your local environment (gitignored)
├── compose.yaml                      # Docker Compose config
├── package.json                      # Dependencies and scripts
├── tsconfig.json                     # TypeScript configuration
├── tailwind.config.ts                # Tailwind CSS config
├── next.config.ts                    # Next.js configuration
├── .eslintrc.json                    # ESLint rules
├── .prettierrc                       # Prettier formatting
└── README.md                         # This file!
```

### Key Files Explained

#### Frontend

- **[src/app/thread/[id]/page.tsx](src/app/thread/[id]/page.tsx)** - Main thread page, renders `<Thread>` component
- **[src/components/Thread.tsx](src/components/Thread.tsx)** - Chat interface with message list and input
- **[src/hooks/useChatThread.ts](src/hooks/useChatThread.ts)** - React hook for chat state management

#### Backend

- **[src/app/api/agent/stream/route.ts](src/app/api/agent/stream/route.ts)** - SSE streaming API endpoint
- **[src/services/agentService.ts](src/services/agentService.ts)** - Agent execution and streaming logic
- **[src/lib/agent/builder.ts](src/lib/agent/builder.ts)** - LangGraph agent construction
- **[src/lib/agent/mcp.ts](src/lib/agent/mcp.ts)** - MCP tool loading and initialization

#### Database

- **[prisma/schema.prisma](prisma/schema.prisma)** - Database schema (Thread, MCPServer models)
- **[src/lib/prisma.ts](src/lib/prisma.ts)** - Prisma client singleton (prevents hot reload issues)

#### Configuration

- **[.env.local](.env.local)** - Environment variables (API keys, database URL)
- **[compose.yaml](compose.yaml)** - Docker Compose for PostgreSQL
- **[tsconfig.json](tsconfig.json)** - TypeScript compiler options
- **[next.config.ts](next.config.ts)** - Next.js framework configuration

---

## Development

### Available Scripts

```bash
# Development
pnpm dev                 # Start dev server with hot reload (Turbopack)
pnpm build              # Build for production
pnpm start              # Start production server
pnpm lint               # Run ESLint on all files
pnpm format             # Format all files with Prettier
pnpm format:check       # Check if files are formatted

# Database
pnpm prisma:generate    # Generate Prisma client (run after schema changes)
pnpm prisma:migrate     # Create and apply new migration
pnpm prisma:studio      # Open Prisma Studio (visual database editor)

# Custom commands
pnpm prisma db push     # Push schema changes without creating migration
pnpm prisma db seed     # Run database seed script (if configured)
```

### Development Workflow

#### 1. Making Changes to the Database Schema

```bash
# Edit prisma/schema.prisma
# For example, add a new field to Thread model:

model Thread {
  id          String   @id @default(uuid())
  title       String
  description String?  // NEW FIELD
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

# Generate migration
pnpm prisma:migrate

# Enter migration name when prompted
# Example: "add_thread_description"

# This creates:
# - New migration file in prisma/migrations/
# - Updates database schema
# - Regenerates Prisma client
```

#### 2. Adding a New MCP Server Type

**Step 1**: Update database if needed
```prisma
// prisma/schema.prisma
model MCPServer {
  // Add new fields if required
  timeout Int? @default(30000)  // Example: tool timeout
}
```

**Step 2**: Update TypeScript types
```typescript
// src/types/mcp.ts
export interface MCPServerConfig {
  // ... existing fields
  timeout?: number;  // Match Prisma model
}
```

**Step 3**: Update MCP loader
```typescript
// src/lib/agent/mcp.ts
async function loadMCPTools() {
  // ... existing code

  // Handle new config option
  const client = new StdioClientTransport(
    server.command,
    server.args,
    { timeout: server.timeout }  // Use new field
  );
}
```

**Step 4**: Update UI form
```typescript
// src/components/MCPServerForm.tsx
<input
  type="number"
  name="timeout"
  label="Timeout (ms)"
  defaultValue={30000}
/>
```

#### 3. Adding a New Message Type

```typescript
// src/types/message.ts
export type MessageType = "human" | "ai" | "tool" | "error" | "system";  // Add "system"

export interface SystemMessageData {
  id: string;
  content: string;
  level: "info" | "warning" | "error";
}

export type MessageResponse =
  | { type: "human"; data: HumanMessageData }
  | { type: "ai"; data: AIMessageData }
  | { type: "tool"; data: ToolMessageData }
  | { type: "error"; data: ErrorMessageData }
  | { type: "system"; data: SystemMessageData };  // Add new type
```

Then update message rendering:
```typescript
// src/components/MessageBubble.tsx
function MessageBubble({ message }: Props) {
  if (message.type === "system") {
    return (
      <div className={`alert alert-${message.data.level}`}>
        {message.data.content}
      </div>
    );
  }
  // ... existing message types
}
```

### Testing Your Changes

#### Manual Testing

1. **Test New Features**:
```bash
# Start dev server
pnpm dev

# In browser:
# 1. Create a new thread
# 2. Test your changes
# 3. Check browser console for errors
# 4. Check terminal logs
```

2. **Test Database Changes**:
```bash
# Open Prisma Studio
pnpm prisma:studio

# Verify:
# - New fields appear
# - Migrations applied correctly
# - Data is saved properly
```

3. **Test API Endpoints**:
```bash
# Use curl or Postman
curl http://localhost:3000/api/agent/threads

# Or use browser DevTools Network tab
```

#### Debugging

**Frontend Debugging**:
```typescript
// Add debug logs in components
console.log("[DEBUG] Messages:", messages);
console.log("[DEBUG] Is sending:", isSending);

// Use React DevTools
// - Install React DevTools browser extension
// - Inspect component state and props
```

**Backend Debugging**:
```typescript
// Add debug logs in services
console.log("[DEBUG] Agent stream started:", { threadId, userText });
console.log("[DEBUG] MCP tools loaded:", tools.map(t => t.name));

// Check terminal output while dev server runs
```

**Database Debugging**:
```bash
# View raw SQL queries
export DEBUG="prisma:query"
pnpm dev

# Or use Prisma Studio
pnpm prisma:studio
```

### Code Style Guidelines

#### TypeScript

```typescript
// ✅ Good: Explicit types
interface Props {
  threadId: string;
  onSend: (message: string) => Promise<void>;
}

// ❌ Bad: Implicit any
function Component({ threadId, onSend }) {
  // ...
}

// ✅ Good: Async/await with error handling
async function sendMessage(text: string) {
  try {
    await api.send(text);
  } catch (error) {
    console.error("Send failed:", error);
  }
}

// ❌ Bad: Unhandled promise
function sendMessage(text: string) {
  api.send(text);  // Promise not awaited
}
```

#### React Components

```typescript
// ✅ Good: Functional component with types
interface ThreadProps {
  threadId: string;
}

export function Thread({ threadId }: ThreadProps) {
  const { messages, sendMessage } = useChatThread({ threadId });
  // ...
}

// ❌ Bad: Missing types
export function Thread({ threadId }) {
  // ...
}

// ✅ Good: Hooks at top level
function Component() {
  const [state, setState] = useState();
  const data = useQuery(/* ... */);

  useEffect(() => {
    // Side effects
  }, []);
}

// ❌ Bad: Conditional hooks
function Component({ condition }) {
  if (condition) {
    const data = useQuery(/* ... */);  // ERROR: Conditional hook
  }
}
```

#### Naming Conventions

```typescript
// Components: PascalCase
export function ThreadSidebar() {}

// Hooks: camelCase starting with "use"
export function useChatThread() {}

// Services: camelCase with descriptive names
export async function streamResponse() {}

// Types: PascalCase
export interface MessageResponse {}
export type MessageType = "human" | "ai";

// Constants: UPPER_SNAKE_CASE
const DEFAULT_MODEL = "gpt-4o-mini";
const MAX_RETRIES = 3;
```

---

## Troubleshooting

### Common Issues and Solutions

#### Issue: Database connection failed

**Error Message**:
```
PrismaClientInitializationError: Can't reach database server at `localhost:5434`
```

**Solution**:
```bash
# Check if Docker is running
docker ps

# If not running, start Docker Desktop

# Start PostgreSQL
docker compose up -d

# Verify container is running
docker ps | grep postgres

# Check logs if still failing
docker compose logs db
```

**Alternative Solution** (if port 5434 is in use):
```bash
# Find process using port 5434
lsof -i :5434

# Kill the process (replace PID with actual number)
kill -9 <PID>

# Restart database
docker compose down
docker compose up -d
```

#### Issue: Prisma Client not found

**Error Message**:
```
Error: @prisma/client did not initialize yet. Please run "prisma generate"
```

**Solution**:
```bash
# Generate Prisma client
pnpm prisma:generate

# If still failing, clean and reinstall
rm -rf node_modules
pnpm install
pnpm prisma:generate
```

#### Issue: API key quota exceeded

**Error Message**:
```
[429 Too Many Requests] You exceeded your current quota, please check your plan and billing details.
```

**Solution**:

For **Google Gemini** (free tier: 15 requests/min, 1,500/day):
```bash
# Wait for rate limit to reset (1 minute for per-minute limit)
# OR
# Get a new API key from https://aistudio.google.com/app/apikey

# Update .env.local
GOOGLE_API_KEY=your_new_key_here

# Restart dev server
# Ctrl+C to stop
pnpm dev
```

For **OpenAI** (requires paid account):
```bash
# Check usage: https://platform.openai.com/usage
# Add credits: https://platform.openai.com/account/billing

# Update .env.local
OPENAI_API_KEY=sk-...

# Restart dev server
```

#### Issue: AI not responding in chat

**Symptoms**: Messages sent but no AI response appears

**Debugging Steps**:

1. **Check browser console** (F12 → Console):
```javascript
// Look for errors like:
// - Failed to fetch
// - 429 Too Many Requests
// - Network error
```

2. **Check server logs** (terminal running `pnpm dev`):
```bash
# Look for:
[ERROR] callModel failed: ...
[DEBUG] Agent stream started: ...
```

3. **Verify environment variables**:
```bash
# Check .env.local has valid API key
cat .env.local | grep API_KEY

# Make sure no quotes around the key
# ✅ Good: GOOGLE_API_KEY=AIzaSy...
# ❌ Bad:  GOOGLE_API_KEY="AIzaSy..."
```

4. **Create a new thread**:
```
Sometimes old threads have corrupted message history.
Click "New Thread" and try again.
```

5. **Check database connection**:
```bash
pnpm prisma:studio
# If it opens, database is working
# If error, restart PostgreSQL (see above)
```

#### Issue: MCP server not loading

**Symptoms**: Tools don't appear in agent, or get "Tool not found" errors

**Debugging Steps**:

1. **Verify server configuration**:
```bash
# Open Prisma Studio
pnpm prisma:studio

# Check MCPServer table:
# - Is "enabled" = true?
# - Are args correct JSON array?
# - Is command path correct?
```

2. **Test server manually**:
```bash
# For filesystem server:
npx @modelcontextprotocol/server-filesystem /path/to/test

# You should see MCP initialization output
# If error, check:
# - Node.js version (need 18+)
# - Path exists and is accessible
# - No permission issues
```

3. **Check server logs** (terminal running `pnpm dev`):
```bash
# Look for:
[MCP] Loading tools from server: filesystem
[MCP] Loaded 6 tools from filesystem

# Or errors:
[ERROR] Failed to connect to MCP server: ...
```

4. **Common MCP configuration errors**:

❌ **Wrong args format**:
```json
{
  "args": "/Users/name/Documents"  // WRONG: String instead of array
}
```

✅ **Correct args format**:
```json
{
  "args": ["@modelcontextprotocol/server-filesystem", "/Users/name/Documents"]
}
```

❌ **Path doesn't exist**:
```json
{
  "args": ["@modelcontextprotocol/server-filesystem", "/Users/name/Documennts"]
  // Typo: "Documennts" vs "Documents"
}
```

✅ **Valid absolute path**:
```json
{
  "args": ["@modelcontextprotocol/server-filesystem", "/Users/kartikvadhawana/Desktop/Resume _amazon"]
  // Note: Spaces in path are OK, just be exact
}
```

#### Issue: React hydration errors

**Error Message** (in browser console):
```
Warning: Prop `className` did not match. Server: "..." Client: "..."
Warning: validateDOMNesting: <button> cannot appear as a descendant of <button>
```

**Explanation**: These are usually cosmetic warnings that don't affect functionality.

**Solution** (if they bother you):
1. Check for nested buttons in components
2. Ensure className logic is deterministic (not based on `Math.random()`, etc.)
3. Use `suppressHydrationWarning` on known mismatches:
```typescript
<div suppressHydrationWarning>
  {/* Content that differs between server/client */}
</div>
```

#### Issue: Port 3000 already in use

**Error Message**:
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution**:
```bash
# Find process using port 3000
lsof -ti :3000

# Kill the process
lsof -ti :3000 | xargs kill -9

# Or use a different port
PORT=3001 pnpm dev
```

#### Issue: Hot reload not working

**Symptoms**: Code changes don't reflect in browser

**Solution**:
```bash
# 1. Hard refresh browser
Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

# 2. Clear Next.js cache
rm -rf .next
pnpm dev

# 3. If using Turbopack, try without it
pnpm next dev  # (instead of next dev --turbopack)
```

---

## API Reference

### REST Endpoints

#### `GET /api/agent/threads`

Fetch all conversation threads.

**Response**:
```typescript
{
  threads: Array<{
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
  }>
}
```

**Example**:
```bash
curl http://localhost:3000/api/agent/threads
```

#### `POST /api/agent/threads`

Create a new conversation thread.

**Request Body**:
```typescript
{
  title: string;
}
```

**Response**:
```typescript
{
  thread: {
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
  }
}
```

**Example**:
```bash
curl -X POST http://localhost:3000/api/agent/threads \
  -H "Content-Type: application/json" \
  -d '{"title": "New Conversation"}'
```

#### `DELETE /api/agent/threads/:id`

Delete a thread by ID.

**Response**:
```typescript
{
  success: boolean;
}
```

**Example**:
```bash
curl -X DELETE http://localhost:3000/api/agent/threads/abc123
```

#### `GET /api/agent/stream`

Stream AI responses via Server-Sent Events.

**Query Parameters**:
- `content` (required): User message text
- `threadId` (required): Thread ID for conversation context
- `model` (optional): AI model to use (e.g., `gpt-4o-mini`, `gemini-2.5-flash`)
- `tools` (optional): Comma-separated list of allowed tool names
- `approveAllTools` (optional): `"true"` to skip tool approval prompts
- `allowTool` (optional): `"allow"` or `"deny"` for resuming after approval

**Response**: SSE stream with events:

**Event: `message` (default)**
```typescript
data: {
  "type": "ai" | "tool" | "error",
  "data": {
    "id": string,
    "content": string,
    "tool_calls"?: Array<{
      "id": string,
      "name": string,
      "args": Record<string, unknown>
    }>
  }
}
```

**Event: `done`**
```typescript
data: {}
```

**Event: `error`**
```typescript
data: {
  "message": string,
  "threadId": string
}
```

**Example** (using EventSource):
```javascript
const eventSource = new EventSource(
  `/api/agent/stream?content=Hello&threadId=abc123&model=gemini-2.5-flash`
);

eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log("Received:", data);
};

eventSource.addEventListener("done", () => {
  console.log("Stream complete");
  eventSource.close();
});

eventSource.addEventListener("error", (event) => {
  console.error("Stream error:", JSON.parse(event.data));
});
```

#### `GET /api/agent/mcp`

List all MCP servers.

**Response**:
```typescript
{
  servers: Array<{
    id: string;
    name: string;
    type: "stdio" | "http";
    enabled: boolean;
    command?: string;
    args?: unknown[];
    env?: Record<string, string>;
    url?: string;
    headers?: Record<string, string>;
    createdAt: string;
    updatedAt: string;
  }>
}
```

#### `POST /api/agent/mcp`

Create a new MCP server configuration.

**Request Body**:
```typescript
{
  name: string;
  type: "stdio" | "http";
  enabled?: boolean;
  // For stdio:
  command?: string;
  args?: unknown[];
  env?: Record<string, string>;
  // For http:
  url?: string;
  headers?: Record<string, string>;
}
```

**Response**:
```typescript
{
  server: MCPServer;
}
```

#### `PUT /api/agent/mcp/:id`

Update an existing MCP server.

**Request Body**: Same as POST

**Response**:
```typescript
{
  server: MCPServer;
}
```

#### `DELETE /api/agent/mcp/:id`

Delete an MCP server by ID.

**Response**:
```typescript
{
  success: boolean;
}
```

---

## Contributing

We welcome contributions from the community! Whether it's bug fixes, new features, documentation improvements, or examples, your help makes this project better.

### How to Contribute

1. **Fork the Repository**
   ```bash
   # Click "Fork" on GitHub
   # Then clone your fork:
   git clone https://github.com/YOUR_USERNAME/fullstack-langgraph-nextjs-agent.git
   cd fullstack-langgraph-nextjs-agent
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   # Or for bug fixes:
   git checkout -b fix/bug-description
   ```

3. **Make Your Changes**
   - Write clean, documented code
   - Follow the existing code style
   - Add comments for complex logic
   - Update types when modifying data structures

4. **Test Your Changes**
   ```bash
   # Run linting
   pnpm lint

   # Check formatting
   pnpm format:check

   # Test manually
   pnpm dev
   # (Automated tests coming soon!)
   ```

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"

   # Use conventional commit format:
   # - feat: New feature
   # - fix: Bug fix
   # - docs: Documentation changes
   # - refactor: Code refactoring
   # - style: Formatting changes
   # - test: Adding tests
   # - chore: Maintenance tasks
   ```

6. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill out the PR template with:
     - Description of changes
     - Related issues (if any)
     - Screenshots (for UI changes)
     - Testing steps

### Contribution Guidelines

**Code Quality**:
- ✅ Use TypeScript strict mode - no `any` types
- ✅ Add JSDoc comments for public APIs
- ✅ Follow existing naming conventions
- ✅ Keep functions small and focused (< 50 lines when possible)
- ✅ Extract reusable logic into separate functions

**Documentation**:
- ✅ Update README if adding features
- ✅ Add inline comments for complex logic
- ✅ Include usage examples for new APIs
- ✅ Update TypeScript types and interfaces

**Testing** (when automated tests are added):
- ✅ Write unit tests for utility functions
- ✅ Add integration tests for API routes
- ✅ Test edge cases and error handling
- ✅ Ensure tests pass before submitting PR

**MCP Integration**:
- ✅ Test new MCP servers thoroughly
- ✅ Document required environment variables
- ✅ Include example configurations
- ✅ Verify both stdio and HTTP transports (if applicable)

### Areas We Need Help With

**High Priority**:
- 🔴 **Automated Testing** - Unit tests, integration tests, E2E tests
- 🔴 **Error Handling** - More robust error recovery and user feedback
- 🔴 **MCP Server Examples** - More pre-configured server templates
- 🔴 **Performance Optimization** - Database query optimization, caching

**Medium Priority**:
- 🟡 **UI/UX Improvements** - Better mobile support, accessibility
- 🟡 **Documentation** - Video tutorials, architecture deep-dives
- 🟡 **Tool Approval Enhancements** - Parameter editing, approval history
- 🟡 **Model Support** - Add Claude, Llama, custom model adapters

**Nice to Have**:
- 🟢 **Docker Deployment** - Dockerfile and docker-compose for production
- 🟢 **CI/CD Pipeline** - GitHub Actions for automated testing
- 🟢 **Admin Dashboard** - Analytics, usage tracking, user management
- 🟢 **Multi-User Support** - Authentication, user-specific threads

### Code Review Process

1. **Automated Checks**: GitHub Actions will run linting and formatting checks
2. **Maintainer Review**: A project maintainer will review your code
3. **Feedback Loop**: Address any requested changes
4. **Merge**: Once approved, we'll merge your PR!

**Typical Review Timeline**: 2-5 days (we'll try to be faster!)

---

## Learning Resources

### LangGraph.js

**Official Documentation**:
- [LangGraph.js Docs](https://langchain-ai.github.io/langgraphjs/) - Complete API reference
- [StateGraph Tutorial](https://langchain-ai.github.io/langgraphjs/tutorials/quickstart/) - Build your first graph
- [Checkpointer Guide](https://langchain-ai.github.io/langgraphjs/how-tos/persistence-postgres) - PostgreSQL persistence
- [Human-in-the-Loop](https://langchain-ai.github.io/langgraphjs/how-tos/human-in-the-loop/) - Approval workflows

**Video Tutorials**:
- [LangGraph Crash Course](https://www.youtube.com/watch?v=9BPCV5TYPmg) - 30min intro
- [Building AI Agents](https://www.youtube.com/watch?v=wd7TZ4w1mSw) - Advanced patterns

**Example Projects**:
- [LangGraph Examples](https://github.com/langchain-ai/langgraphjs/tree/main/examples) - Official examples
- [Agent Examples](https://github.com/langchain-ai/langchain/tree/master/cookbook) - LangChain cookbook

### Model Context Protocol (MCP)

**Official Resources**:
- [MCP Specification](https://spec.modelcontextprotocol.io/) - Protocol specification
- [MCP Documentation](https://modelcontextprotocol.io/docs) - Getting started guide
- [Building MCP Servers](https://modelcontextprotocol.io/docs/building-servers) - Server development
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) - SDK reference

**MCP Server Catalog**:
- [Official MCP Servers](https://github.com/modelcontextprotocol/servers) - Pre-built servers
- [Docker MCP Catalog](https://blog.agentailor.com/posts/docker-mcp-catalog-and-toolkit) - Containerized tools
- [Community Servers](https://github.com/topics/mcp-server) - Community-built integrations

**Articles & Guides**:
- [Introducing MCP](https://www.anthropic.com/news/model-context-protocol) - Anthropic announcement
- [MCP for Developers](https://modelcontextprotocol.io/blog/mcp-for-developers) - Developer deep-dive

### Next.js & React

**Next.js 15**:
- [Next.js Documentation](https://nextjs.org/docs) - Official docs
- [App Router Guide](https://nextjs.org/docs/app) - App Router patterns
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) - Data mutations
- [Streaming and Suspense](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming) - Progressive rendering

**React 19**:
- [React 19 Release Notes](https://react.dev/blog/2024/12/05/react-19) - What's new
- [React Docs](https://react.dev/) - Official documentation
- [Hooks Reference](https://react.dev/reference/react) - All React hooks

**React Query (TanStack Query)**:
- [React Query Docs](https://tanstack.com/query/latest) - Full documentation
- [Optimistic Updates](https://tanstack.com/query/latest/docs/react/guides/optimistic-updates) - UI patterns
- [SSE Integration](https://tanstack.com/query/latest/docs/react/guides/sse) - Server-Sent Events

### TypeScript

**Official Resources**:
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - Language guide
- [TypeScript Cheatsheet](https://www.typescriptlang.org/cheatsheets) - Quick reference
- [Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html) - Best practices

**Advanced Topics**:
- [Advanced Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html) - Utility types, generics
- [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) - Type guards
- [Async/Await](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html#asyncawait) - Promises

### AI/ML Concepts

**Prompt Engineering**:
- [OpenAI Prompt Guide](https://platform.openai.com/docs/guides/prompt-engineering) - Best practices
- [Anthropic Prompt Library](https://docs.anthropic.com/claude/prompt-library) - Example prompts
- [Prompting Guide](https://www.promptingguide.ai/) - Comprehensive guide

**Tool Use / Function Calling**:
- [OpenAI Function Calling](https://platform.openai.com/docs/guides/function-calling) - How it works
- [Google Gemini Tools](https://ai.google.dev/gemini-api/docs/function-calling) - Tool integration
- [LangChain Tools](https://js.langchain.com/docs/modules/agents/tools/) - Tool abstractions

**Agent Patterns**:
- [ReAct Pattern](https://arxiv.org/abs/2210.03629) - Reasoning + Acting
- [Chain-of-Thought](https://arxiv.org/abs/2201.11903) - Multi-step reasoning
- [Autonomous Agents](https://lilianweng.github.io/posts/2023-06-23-agent/) - Overview article

### Database & ORM

**Prisma**:
- [Prisma Docs](https://www.prisma.io/docs) - Complete documentation
- [Prisma Schema](https://www.prisma.io/docs/concepts/components/prisma-schema) - Schema reference
- [Migrations Guide](https://www.prisma.io/docs/concepts/components/prisma-migrate) - Database migrations

**PostgreSQL**:
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/) - SQL tutorials
- [PostgreSQL Docs](https://www.postgresql.org/docs/) - Official documentation

---

## License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2024 IBJunior

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

**What this means**:
- ✅ You can use this code for personal projects
- ✅ You can use this code for commercial projects
- ✅ You can modify the code however you want
- ✅ You can distribute the code
- ⚠️ You must include the license notice in copies
- ❌ The authors are not liable for any damages

---

## Acknowledgments

This project wouldn't exist without these amazing technologies and communities:

**Frameworks & Libraries**:
- [LangChain](https://github.com/langchain-ai) - For the incredible AI framework and LangGraph.js
- [Next.js](https://nextjs.org/) - For the amazing React framework
- [Vercel](https://vercel.com/) - For Next.js and excellent developer tools
- [Prisma](https://www.prisma.io/) - For the best-in-class ORM

**Standards & Protocols**:
- [Model Context Protocol](https://modelcontextprotocol.io/) - For the universal tool integration standard
- [Anthropic](https://www.anthropic.com/) - For pioneering MCP and Claude

**AI Providers**:
- [OpenAI](https://openai.com/) - For GPT models and API
- [Google](https://ai.google.dev/) - For Gemini models

**UI & Design**:
- [shadcn/ui](https://ui.shadcn.com/) - For beautiful React components
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first styling
- [Lucide](https://lucide.dev/) - For clean, consistent icons
- [Framer Motion](https://www.framer.com/motion/) - For smooth animations

**Community**:
- All the contributors who report bugs, suggest features, and submit PRs
- The LangChain Discord community for support and inspiration
- The Next.js community for best practices and patterns

---



  Made with ❤️ by the open source community

  *If you found this helpful, please consider giving it a star! ⭐*

</div>
