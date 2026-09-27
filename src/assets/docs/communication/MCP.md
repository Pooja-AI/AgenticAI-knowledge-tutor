# Model Context Protocol (MCP)

## Overview

Model Context Protocol (MCP) is an open standard that enables AI models and AI agents to securely communicate with external tools, applications, databases, and services through a standardized protocol. Instead of building custom integrations for every application, MCP provides a common interface that allows AI systems to discover, access, and invoke external capabilities.

MCP was introduced by Anthropic and has rapidly become a widely adopted protocol for Agentic AI applications.

---

## Why MCP?

Without MCP, every AI application requires custom integrations.

Example:

```text
AI Agent

↓

GitHub Integration

↓

Database Integration

↓

Slack Integration

↓

Google Drive Integration

↓

Salesforce Integration
```

Each integration must be developed and maintained separately.

With MCP:

```text
AI Agent

↓

MCP Client

↓

MCP Server

↓

Tools & Resources
```

A single protocol supports many different systems.

---

## Key Characteristics

- Standardized communication
- Tool discovery
- Resource sharing
- Secure execution
- Vendor independent
- Extensible architecture
- JSON-based communication
- Supports multiple transports

---

## MCP Architecture

```text
               User
                 │
                 ▼
          AI Application
          (Host/Client)
                 │
                 ▼
            MCP Client
                 │
        JSON-RPC Messages
                 │
                 ▼
            MCP Server
      ┌──────────┼──────────┐
      ▼          ▼          ▼
 File System  Database   GitHub
      ▼          ▼          ▼
  Tools      Resources    Prompts
```

---

## MCP Components

### Host

The application where the AI agent runs.

Examples

- Claude Desktop
- VS Code
- Cursor
- Enterprise AI Assistant

---

### MCP Client

Responsible for communicating with MCP servers.

Responsibilities

- Connect to servers
- Discover tools
- Invoke tools
- Receive responses

---

### MCP Server

Provides tools and resources to AI applications.

Examples

- GitHub MCP Server
- PostgreSQL MCP Server
- Filesystem MCP Server
- Slack MCP Server

---

### Resources

Read-only information.

Examples

- Documents
- PDFs
- Source code
- Images
- Database records

---

### Tools

Executable operations.

Examples

- Read file
- Execute SQL
- Send email
- Create GitHub issue
- Search documents

---

### Prompts

Reusable prompt templates exposed by MCP servers.

Example

```text
Generate Release Notes

Summarize Meeting

Review Code
```

---

## MCP Communication Workflow

```text
User Request
      │
      ▼
AI Agent
      │
      ▼
Discover Available Tools
      │
      ▼
Select Appropriate Tool
      │
      ▼
Execute Tool
      │
      ▼
Receive Result
      │
      ▼
Generate Response
```

---

# Step-by-Step Process

## Step 1

User asks

```
Find all Python files in my project.
```

---

## Step 2

AI discovers available tools.

```text
Filesystem Tool

GitHub Tool

Database Tool
```

---

## Step 3

Select Filesystem Tool.

---

## Step 4

Execute tool.

```text
list_files(".")
```

---

## Step 5

MCP Server returns

```text
main.py

agent.py

utils.py

config.py
```

---

## Step 6

Generate response.

```
I found four Python files in your project.
```

---

# Python Example

```python
class MCPServer:

    def list_files(self):

        return [

            "main.py",

            "agent.py",

            "utils.py"

        ]


server = MCPServer()

files = server.list_files()

print("Available Files:")

for file in files:

    print(file)
```

### Output

```text
Available Files:

main.py

agent.py

utils.py
```

---

# Real-World Examples

## Development Assistant

```text
Developer

↓

MCP GitHub Server

↓

Repository

↓

AI Response
```

---

## Enterprise Assistant

```text
Employee

↓

MCP SharePoint

↓

Company Policies

↓

Answer
```

---

## Database Assistant

```text
User

↓

MCP Database Server

↓

SQL Query

↓

Results
```

---

## IT Support Assistant

```text
Employee

↓

Filesystem MCP

↓

System Logs

↓

Troubleshooting
```

---

# Enterprise Use Cases

- Software Development
- Database Querying
- Enterprise Search
- File Management
- CRM Integration
- ERP Systems
- Customer Support
- DevOps Automation
- Knowledge Management
- Business Process Automation

---

# Advantages

- Standardized integration
- Simplifies development
- Reusable tool ecosystem
- Secure communication
- Vendor neutral
- Easy scalability
- Reduces custom integrations

---

# Limitations

- Requires MCP-compatible servers
- Initial setup effort
- Network dependency
- Authentication management
- Tool availability depends on connected servers

---

# Best Practices

- Authenticate every MCP connection.
- Expose only required tools.
- Validate tool inputs.
- Log tool invocations.
- Apply role-based permissions.
- Keep MCP servers updated.

---

# MCP in Agentic AI Frameworks

### OpenAI Agents SDK

- MCP servers can be integrated through tool adapters.

### LangChain

- MCP tools can be wrapped as LangChain Tools.

### LangGraph

- MCP interactions become workflow nodes.

### CrewAI

- Agents collaborate using shared MCP servers.

---

# Popular MCP Servers

- Filesystem
- GitHub
- PostgreSQL
- SQLite
- Slack
- Notion
- Google Drive
- Jira
- Microsoft 365
- Custom Enterprise Servers

---

# MCP vs Traditional API

| Traditional API | MCP |
|-----------------|-----|
| Custom integration | Standard protocol |
| One API per application | One protocol for many tools |
| Manual tool discovery | Automatic tool discovery |
| Application-specific | Vendor independent |
| Limited interoperability | High interoperability |

---

# Summary

Model Context Protocol (MCP) is an open standard that enables AI agents to securely communicate with external tools, resources, and enterprise systems through a unified interface. By standardizing tool discovery, resource access, and execution, MCP simplifies AI integration, improves interoperability, and provides a scalable foundation for building enterprise-grade Agentic AI applications.


# Understanding the Model Context Protocol (MCP)

*A study guide summarizing key concepts, architecture, and implementation patterns for integrating AI agents with the MCP ecosystem. Written as an original explanatory reference — not a reproduction of any source text — with illustrative example code.*

---

## 1. What Problem Does MCP Solve?

Before a shared protocol existed, every team building an AI agent had to write its own bespoke "glue code" to connect a model to external systems (databases, APIs, file systems, SaaS tools). This caused three recurring pains:

- **Duplicated integration work** — the same GitHub or filesystem integration had to be rewritten for every agent framework (LangGraph, custom framework, etc.).
- **No shared capability format** — there was no common way for a tool to describe what it does, what inputs it needs, or what it's allowed to touch.
- **Tight coupling** — tools were often written directly against one framework's internal tool-calling conventions, so they couldn't be reused elsewhere.

**MCP (Model Context Protocol)** standardizes the interface between an AI system and the tools/data it uses. A developer builds one MCP-compliant server, and *any* MCP-aware AI framework can use it — no per-framework adapter needed. This is the "write once, run everywhere" idea applied to agent tooling.

---

## 2. Core Architecture

MCP follows a **client–server model**, with one additional role sitting around the client:

| Role | What it is |
|---|---|
| **MCP Server** | A standalone process that exposes a set of callable tools (and optionally other capabilities) over the protocol. |
| **MCP Client** | The component that connects to *one* MCP server, discovers its tools, and invokes them. |
| **MCP Host** | The actual AI application (the agent) that embeds one or more MCP clients — one client per server it wants to use. |

A single agent can talk to many MCP servers simultaneously (some local, some remote), each through its own dedicated client connection.

### 2.1 Two protocol layers

MCP communication is split into two layers:

1. **Data layer** — defines the *messages*: a JSON-RPC 2.0-based exchange covering connection setup, capability negotiation, tool listing, tool invocation, and notifications.
2. **Transport layer** — defines *how those messages physically travel*:
   - **STDIO** — used for local servers; the client launches the server as a subprocess and talks to it over standard input/output. Fast, but only as safe as the code you're running.
   - **Streamable HTTP** — used for remote servers; same message semantics, carried over a network connection instead of a pipe.

The message *content and sequence* are identical regardless of transport — only the delivery mechanism changes.

### 2.2 A simplified view

```
 AI Application (Host)
 ┌─────────────────────────────────────────────┐
 │   Agent / Orchestration Logic                │
 │        │              │              │       │
 │   MCP Client A    MCP Client B   MCP Client C │
 └────────┼──────────────┼──────────────┼───────┘
          │ STDIO        │ STDIO        │ HTTP
          ▼              ▼              ▼
   Local Server A   Local Server B   Remote Server C
   (e.g. filesystem) (e.g. git tool)  (e.g. hosted SaaS API)
```

---

## 3. Local vs. Remote Servers — Trade-offs

| | Local (STDIO) | Remote (HTTP) |
|---|---|---|
| Latency | Very low | Network-dependent |
| Setup | Spawn a subprocess | Requires auth, networking, TLS |
| Security concern | Runs with the *user's own permissions* — risky if the server code is untrusted | Same concerns as calling any external API (auth, data exposure) |
| Best for | Trusted, first-party tools (filesystem, local git, local scripts) | Shared/hosted tools, third-party integrations |

**Practical takeaway:** don't casually run someone else's local MCP server — since it executes with your OS user's privileges, a malicious or buggy one can do anything you can do.

---

## 4. Why MCP Matters for Different Stakeholders

- **Framework builders** (LangGraph, CrewAI, AutoGen, custom frameworks): supporting MCP is now close to a checkbox requirement — it instantly grants access to a large, growing tool ecosystem instead of requiring the framework to hand-roll every integration.
- **Tool/service providers**: build the integration once against the MCP spec, and it works with every MCP-compliant framework — no per-framework wrapper needed. The protocol is language-agnostic, so a tool provider can implement a server in whatever language suits the workload (a quick Python/TypeScript script vs. a performance-critical service in a compiled language).
- **Application developers**: choosing an MCP-compatible framework means you inherit the whole ecosystem "for free" rather than integrating tools one by one.

Because the protocol is open and vendor-neutral, switching frameworks doesn't strand your tool investment — any MCP-compliant tool keeps working regardless of which agent framework calls it.

---

## 5. Building an MCP Server

There are two realistic ways to build one:

### 5.1 The recommended way — use an official SDK

Official SDKs (Python, TypeScript, etc.) handle the JSON-RPC plumbing, capability negotiation, and transport details for you. You just declare functions as tools.

**Illustrative example** (original, not copied from any source):

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("Weather Tools")

@mcp.tool()
def get_forecast(city: str) -> str:
    """Return a short weather forecast for the given city."""
    # In a real implementation, call a weather API here.
    return f"Forecast for {city}: sunny, 24°C"

@mcp.tool()
def get_alerts(region: str) -> str:
    """Return any active weather alerts for a region."""
    return f"No active alerts for {region}"

if __name__ == "__main__":
    mcp.run()  # SDK handles transport, negotiation, and message routing
```

Each `@mcp.tool()`-decorated function becomes automatically discoverable: the SDK inspects its signature/docstring to build the tool's name, description, and input schema, and exposes it through `tools/list` and `tools/call` automatically.

### 5.2 The hard way — implement the protocol by hand

You *can* write a server in any language with no SDK, by directly reading and writing JSON-RPC messages over STDIN/STDOUT. This means manually handling, at minimum:

- `initialize` — negotiate protocol version, return server info/capabilities.
- `notifications/initialized` — acknowledge (no reply needed).
- `tools/list` — return the list of tools, each with a name, description, and JSON-schema-style input definition.
- `tools/call` — dispatch to the right tool implementation, run it, and return output (or a structured error).
- An error path for unrecognized methods (per JSON-RPC error conventions).

**Illustrative sketch of the pattern** (original, simplified pseudocode):

```
loop:
    read one JSON-RPC message from stdin
    switch on message.method:
        case "initialize":      reply with protocol version + server info
        case "tools/list":      reply with the tool catalog
        case "tools/call":      run the requested tool, reply with result or error
        default:                reply with "method not found" error
```

**Why you'd normally avoid this:** it works, but you now own protocol-version compatibility forever. Every time the spec adds a field or changes a negotiation step, you have to track it manually. It's a reasonable *learning* exercise, but not a good production choice when an SDK exists.

### 5.3 Practical server-building lessons

- Tool descriptions and parameter schemas matter a lot — the LLM decides how to call your tool based on them, so vague descriptions lead to malformed or repeated calls.
- Configuration (API keys, modes, etc.) isn't standardized by MCP itself — you'll typically use environment variables, CLI args, or a config file, same as any other service.
- Testing is slightly more involved than testing a normal function, because the tool now runs in a separate process reachable only through the protocol — so tests need to spin up the server and talk to it like a real client would, not just call the function directly.

---

## 6. Building an MCP Client

A client's job is: **connect → discover tools → invoke tools → clean up.**

### 6.1 Connecting

The client needs to know whether it's talking to a local or remote server (e.g., by checking if the target is a file path or a URL), then:
- For local servers: spawn the process and open a STDIO-based session.
- For remote servers: open an HTTP/SSE-based session.

Either way, after the transport is open, the client performs the `initialize` handshake and then calls the equivalent of "list tools" to learn what's available.

### 6.2 Invoking a tool

Once tools are known, invoking one is just: pick a tool name, supply an arguments dictionary matching its schema, and await the result — the client library translates that into the correct `tools/call` message and parses the response.

**Illustrative example** (original, simplified):

```python
import asyncio
from mcp import ClientSession
from mcp.client.stdio import stdio_client, StdioServerParameters

async def main():
    params = StdioServerParameters(command="python", args=["weather_server.py"])
    async with stdio_client(params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()

            tools = await session.list_tools()
            print("Available tools:", [t.name for t in tools.tools])

            result = await session.call_tool(
                "get_forecast", {"city": "Austin"}
            )
            print(result.content[0].text)

asyncio.run(main())
```

### 6.3 Operational details worth remembering

- **Timeouts matter.** Both connecting and invoking should have timeouts — a hung MCP server (local or remote) shouldn't be able to hang your entire agent.
- **One session per server.** A client typically keeps one long-lived session per connected server rather than reconnecting on every call, for efficiency.
- **Cleanup matters.** Sessions/processes should be explicitly closed on shutdown (or when a tool is no longer needed) to avoid leaking subprocesses or open connections.
- **Async by nature.** Because MCP communication is inherently asynchronous (waiting on I/O), most client implementations are built on `async`/`await`. If your surrounding application is synchronous, you'll need a small bridge (e.g., running an event loop in a background thread) to call into it cleanly.

---

## 7. Integrating MCP Into an Existing Agent Framework

Most agent frameworks already have their own internal notion of a "tool" (a name, description, parameters, and a `run()`-style method). The clean way to add MCP support is **not** to rewire the whole framework — it's to add an **adapter** that makes an MCP tool *look like* a native tool from the framework's point of view.

### 7.1 The adapter pattern

```
Framework's Agentic Loop
        │
        │ calls tool.run(**kwargs) — same interface for every tool
        ▼
┌───────────────────────────────┐
│  Native Tool  │  MCP Adapter   │   <- both implement the same
│  (your code)  │  (wraps a real │      base "Tool" interface
│               │   MCP client)  │
└───────────────────────────────┘
```

The adapter's `run()` method internally:
1. Ensures a connection/session to the right MCP server exists (connecting lazily on first use is a common approach).
2. Translates the framework's argument dictionary into the MCP call (usually a 1:1 mapping since both are just key/value pairs).
3. Awaits the MCP result and returns it as a plain string/value the framework already knows how to handle.

**Illustrative example** (original, simplified — not the real class from any book/repo):

```python
class MCPToolAdapter(FrameworkTool):
    """Wraps a single MCP tool so the framework can call it like any other tool."""

    def __init__(self, server_id, server_target, tool_info):
        super().__init__(
            name=tool_info["name"],
            description=tool_info.get("description", ""),
            parameters=convert_schema(tool_info.get("parameters", {})),
        )
        self.server_id = server_id
        self.server_target = server_target  # file path or URL

    def run(self, **kwargs):
        client = get_shared_mcp_client()
        client.ensure_connected(self.server_id, self.server_target)
        return client.call_tool_sync(self.server_id, self.name, kwargs)
```

### 7.2 Schema translation

MCP tool parameters arrive as JSON Schema. Most frameworks have their own simpler parameter representation (name, type, description, required). A small conversion function maps JSON Schema types (`string`, `integer`, `number`, `boolean`, `array`, …) onto the framework's own type system. This is a mechanical, low-risk piece of glue code, but it's necessary — you can't just pass raw JSON Schema into a framework that doesn't understand it.

### 7.3 Tool discovery at startup

A clean design centralizes *all* tool discovery — native tools, local MCP servers, and configured remote MCP servers — behind one function that the framework's engine calls once at startup, rather than scattering discovery logic through the core engine. Conceptually:

```python
def discover_all_tools(config):
    tools = []
    tools += discover_native_tools(config.native_tools_dir)
    tools += discover_local_mcp_tools(config.mcp_servers_dir)
    tools += discover_remote_mcp_tools(config.remote_servers)
    return {tool.name: tool for tool in tools}
```

This keeps the core agent engine simple: it just asks for "the tool dictionary" and doesn't need to know or care whether a given tool is native or MCP-backed.

### 7.4 Bridging sync and async worlds

Many agent engines are written synchronously (a simple `run()` call per turn), while MCP clients are inherently asynchronous. A common, pragmatic solution is to maintain one shared background event loop that all MCP calls run through, and expose a synchronous-looking `run()` method on the adapter that internally does `loop.run_until_complete(...)`. This avoids repeatedly creating and tearing down event loops (which is slow and can cause "event loop is closed" errors) while still letting the rest of the framework stay simple and synchronous.

---

## 8. The MCP Ecosystem

- The protocol has an official specification that is versioned and evolves; client and server negotiate a specific protocol version when they connect, so servers can support multiple versions over time.
- There's a growing set of directories/registries where people publish and discover MCP servers (official example-server listings plus independent community indexes).
- Because the protocol is open, no single framework or vendor "owns" the ecosystem — a tool built for one framework works with any MCP-compliant framework, and swapping frameworks doesn't require re-integrating your tools.

**Security reminder:** running a third-party local MCP server means running arbitrary code with your own user permissions. Prefer sourcing tools from reputable registries, and review code before running unfamiliar local servers.

---

## 9. Practical Lessons From Real Usage

- **Tool descriptions drive LLM behavior.** In real testing, an LLM given a loosely specified CLI-wrapping tool made repeated malformed calls (e.g., guessing at pagination flags) before landing on something that worked. Precise descriptions and constrained parameters reduce this trial-and-error.
- **Retry/looping behavior is a known weak spot** for LLM-driven tool use in general — not something MCP itself fixes. MCP standardizes *how* a tool is called; it doesn't guarantee the LLM calls it well. That's a separate agent-design problem (better prompting, tool result validation, guardrails).
- **MCP doesn't replace good tool design.** You still need clear parameter names, sane defaults, and outputs that are easy for an LLM to parse and reason about.

---

## 10. Quick-Reference Summary

| Concept | One-line definition |
|---|---|
| MCP | Open protocol standardizing how AI systems discover and call external tools/data |
| MCP Server | Process exposing tools over MCP |
| MCP Client | Component that connects to one server, discovers tools, invokes them |
| MCP Host | The AI application embedding one or more clients |
| Data layer | JSON-RPC 2.0 message format and lifecycle |
| Transport layer | STDIO (local) or Streamable HTTP (remote) |
| Adapter pattern | Wrap an MCP tool to look like a framework's native tool |
| Tool discovery | Centralized startup step that gathers native + local MCP + remote MCP tools into one registry |

---

*This guide was written as an original explanatory summary for personal study. Code snippets are illustrative examples I wrote to demonstrate the underlying patterns, not reproductions of any specific codebase.*