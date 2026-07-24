# WebSockets

## Overview

WebSockets is a full-duplex communication protocol that enables continuous, real-time communication between a client and a server over a single TCP connection. Unlike traditional HTTP, where each request requires a new connection, WebSockets keep the connection open, allowing both the client and server to send messages at any time.

WebSockets are widely used in AI applications, collaborative systems, financial trading, gaming, IoT, and Multi-Agent Systems that require low-latency communication.

---

## Why WebSockets?

Traditional HTTP communication:

```text
Client

↓

HTTP Request

↓

Server

↓

HTTP Response

(Connection Closed)
```

Every interaction requires a new request.

With WebSockets:

```text
Client

⇅

Persistent Connection

⇅

Server
```

The connection remains open, enabling instant communication.

---

## Key Characteristics

- Full-duplex communication
- Persistent connection
- Low latency
- Real-time messaging
- Event-driven
- Efficient bandwidth usage
- Bidirectional communication
- Scalable architecture

---

## WebSocket Architecture

```text
              Client
                 │
         WebSocket Handshake
                 │
                 ▼
         Persistent Connection
                 │
        ⇅        ⇅        ⇅
           Real-Time Messages
                 │
                 ▼
              Server
```

---

## WebSocket Components

### Client

Initiates the WebSocket connection.

Examples

- AI Agent
- Browser
- Mobile Application

---

### Server

Maintains active client connections.

Examples

- Chat Server
- AI Service
- Notification Service

---

### Connection

A persistent communication channel.

Example

```text
Client ⇄ Server
```

---

### Messages

Data exchanged continuously.

Examples

```text
Text

JSON

Binary

Events
```

---

## WebSocket Workflow

```text
Client

↓

WebSocket Handshake

↓

Connection Established

↓

Send Message

↓

Server Processes

↓

Return Response

↓

Connection Remains Open
```

---

# Step-by-Step Process

## Step 1

Client requests a WebSocket connection.

---

## Step 2

Server accepts the handshake.

---

## Step 3

Persistent connection established.

---

## Step 4

Client sends message.

```text
Hello Server
```

---

## Step 5

Server processes request.

---

## Step 6

Server immediately responds.

```text
Hello Client
```

---

## Step 7

Connection stays open for future communication.

---

# Python Example

```python
import asyncio
import websockets

async def hello():

    async with websockets.connect("ws://localhost:8765") as websocket:

        await websocket.send("Hello Server")

        response = await websocket.recv()

        print(response)

asyncio.run(hello())
```

### Output

```text
Hello Client
```

---

# Real-World Examples

## AI Chat Assistant

```text
User

⇅

WebSocket

⇅

LLM Server

⇅

Streaming Response
```

---

## Stock Market Dashboard

```text
Stock Exchange

↓

Live Prices

↓

WebSocket

↓

Dashboard
```

---

## Multiplayer Game

```text
Player A

⇅

Game Server

⇅

Player B
```

---

## Multi-Agent Communication

```text
Coordinator Agent

⇅

Worker Agents

⇅

Task Updates
```

---

# Enterprise Use Cases

- AI Chat Applications
- Live Notifications
- Real-Time Dashboards
- Collaborative Editing
- Financial Trading
- Online Gaming
- IoT Monitoring
- Video Conferencing
- Customer Support
- Multi-Agent Communication

---

# Advantages

- Real-time communication
- Low latency
- Persistent connection
- Efficient bandwidth usage
- Supports bidirectional messaging
- Reduces repeated HTTP requests

---

# Limitations

- More complex than HTTP
- Requires connection management
- Firewall restrictions may apply
- Long-lived connections consume server resources
- Scaling requires connection management

---

# Best Practices

- Use secure WebSockets (WSS).
- Handle reconnection automatically.
- Validate incoming messages.
- Implement heartbeat (ping/pong) mechanisms.
- Authenticate clients before connection.
- Monitor active connections.

---

# WebSockets in Agentic AI Frameworks

### OpenAI Agents SDK

- Supports streaming responses over persistent connections.

### LangChain

- Frequently used for streaming LLM outputs and real-time agent interactions.

### LangGraph

- Enables live workflow updates between graph nodes.

### CrewAI

- Supports real-time communication between coordinating and worker agents.

---

# WebSockets vs REST

| WebSockets | REST |
|------------|------|
| Persistent connection | Request-response |
| Bidirectional | Client initiates communication |
| Real-time updates | Polling required |
| Low latency | Higher latency |
| Streaming support | Limited streaming |
| Best for live applications | Best for CRUD operations |

---

# Summary

WebSockets is a full-duplex communication protocol that enables persistent, real-time communication between clients and servers over a single connection. Its low latency, bidirectional messaging, and efficient resource usage make it ideal for AI chat systems, live dashboards, collaborative applications, financial platforms, and Agentic AI systems that require continuous communication.