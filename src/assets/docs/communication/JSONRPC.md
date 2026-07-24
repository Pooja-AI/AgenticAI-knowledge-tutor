# JSON-RPC

## Overview

JSON-RPC (JavaScript Object Notation - Remote Procedure Call) is a lightweight communication protocol that enables applications, services, and AI agents to invoke remote functions using JSON-formatted messages. Instead of interacting with REST endpoints, clients call specific methods on a remote server and receive structured responses.

JSON-RPC is widely used in distributed systems, blockchain platforms, AI services, and microservice architectures due to its simplicity and efficiency.

---

## Why JSON-RPC?

Without JSON-RPC:

```text
Client

↓

Custom Request Format

↓

Server

↓

Custom Response
```

Every application defines its own communication format.

With JSON-RPC:

```text
Client

↓

JSON-RPC Request

↓

Remote Server

↓

Method Execution

↓

JSON-RPC Response
```

Communication follows a standardized format.

---

## Key Characteristics

- Lightweight protocol
- JSON-based messages
- Remote method invocation
- Platform independent
- Stateless communication
- Language independent
- Supports notifications
- Easy to implement

---

## JSON-RPC Architecture

```text
               Client
                  │
                  ▼
         JSON-RPC Request
                  │
                  ▼
          Remote Server
                  │
          Execute Method
                  │
                  ▼
        JSON-RPC Response
                  │
                  ▼
               Client
```

---

## JSON-RPC Components

### Client

Initiates remote method calls.

Examples

- AI Agent
- Web Application
- Mobile App

---

### Server

Receives requests and executes methods.

Examples

- Database Service
- AI Service
- Enterprise Application

---

### Method

The remote function executed by the server.

Example

```text
getEmployee()

calculateSalary()

generateReport()
```

---

### Parameters

Input values required by the method.

Example

```json
{
  "employeeId": 101
}
```

---

### Response

Returned after successful execution.

Example

```json
{
  "name": "Alice",
  "department": "Engineering"
}
```

---

## JSON-RPC Workflow

```text
User Request

↓

AI Agent

↓

Create JSON-RPC Request

↓

Remote Server

↓

Execute Method

↓

Return JSON Response

↓

Generate Final Answer
```

---

# Step-by-Step Process

## Step 1

User asks

```
Retrieve employee information.
```

---

## Step 2

AI Agent creates request.

```json
{
  "jsonrpc":"2.0",
  "method":"getEmployee",
  "params":{"id":101},
  "id":1
}
```

---

## Step 3

Server executes

```
getEmployee(101)
```

---

## Step 4

Server returns response.

```json
{
  "jsonrpc":"2.0",
  "result":{
      "name":"Alice"
  },
  "id":1
}
```

---

## Step 5

AI Agent generates response.

```
Employee Alice was found.
```

---

# JSON-RPC Request Example

```json
{
  "jsonrpc": "2.0",
  "method": "addNumbers",
  "params": [10,20],
  "id": 1
}
```

---

# JSON-RPC Response Example

```json
{
  "jsonrpc": "2.0",
  "result": 30,
  "id": 1
}
```

---

# Python Example

```python
import json

request = {
    "jsonrpc": "2.0",
    "method": "getWeather",
    "params": {
        "city": "Hyderabad"
    },
    "id": 1
}

print(json.dumps(request, indent=4))
```

### Output

```json
{
    "jsonrpc": "2.0",
    "method": "getWeather",
    "params": {
        "city": "Hyderabad"
    },
    "id": 1
}
```

---

# Real-World Examples

## AI Assistant

```text
User

↓

JSON-RPC

↓

Weather Service

↓

Current Weather
```

---

## Banking System

```text
Customer

↓

JSON-RPC

↓

Account Service

↓

Balance
```

---

## Blockchain

```text
Wallet

↓

JSON-RPC

↓

Ethereum Node

↓

Transaction Details
```

---

## Enterprise Application

```text
Employee

↓

JSON-RPC

↓

HR Service

↓

Employee Details
```

---

# Enterprise Use Cases

- Blockchain Networks
- AI Services
- Enterprise Applications
- Database Access
- Microservices
- Internal APIs
- Financial Systems
- ERP Platforms
- Cloud Services
- Remote Administration

---

# Advantages

- Lightweight communication
- Easy to implement
- Language independent
- Small message size
- Supports batch requests
- Efficient remote procedure calls

---

# Limitations

- No built-in resource model
- Limited HTTP semantics
- Error handling depends on implementation
- Less common than REST APIs
- Requires predefined methods

---

# Best Practices

- Use unique request IDs.
- Validate request parameters.
- Return meaningful error messages.
- Secure endpoints with authentication.
- Use HTTPS for encrypted communication.
- Log all RPC requests for monitoring.

---

# JSON-RPC in Agentic AI Frameworks

### OpenAI Agents SDK

- Can interact with services exposing JSON-RPC endpoints through custom tools.

### LangChain

- JSON-RPC services can be wrapped as callable tools.

### LangGraph

- Remote procedure calls can be integrated into workflow nodes.

### CrewAI

- Agents invoke remote JSON-RPC services as part of enterprise workflows.

---

# JSON-RPC vs REST

| JSON-RPC | REST |
|----------|------|
| Method-based communication | Resource-based communication |
| Remote function calls | CRUD operations on resources |
| Lightweight request format | HTTP endpoint architecture |
| Uses JSON payloads | Uses HTTP verbs |
| Better for RPC services | Better for web APIs |

---

# Summary

JSON-RPC is a lightweight remote procedure call protocol that uses JSON to exchange requests and responses between clients and servers. It enables AI agents and distributed applications to invoke remote methods efficiently, making it well suited for microservices, blockchain systems, enterprise applications, and Agentic AI architectures that require fast, structured communication.