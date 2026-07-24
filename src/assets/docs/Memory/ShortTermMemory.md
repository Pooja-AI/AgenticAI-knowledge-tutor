# Short-Term Memory

## Introduction

Short-Term Memory (STM) is the memory that enables an AI Agent to remember recent interactions within an active conversation or session. It allows the agent to maintain context, understand follow-up questions, and provide coherent, context-aware responses.

Unlike Working Memory, which focuses on reasoning during task execution, Short-Term Memory focuses on preserving conversational context over a limited period.

Think of it as the agent remembering "what we were just talking about."

---

# Why Short-Term Memory is Important

Most conversations are not isolated questions.

Users naturally ask follow-up questions such as:

```
User:
Book a hotel in Paris.

Assistant:
Here are some options.

User:
Choose the cheapest one.

Assistant:
...
```

Without Short-Term Memory, the agent would not know what "the cheapest one" refers to.

Short-Term Memory enables:

- Context-aware conversations
- Follow-up question handling
- Personalized interactions within a session
- Reduced repeated user input
- Natural dialogue

---

# Human Analogy

Imagine talking to a friend.

You discuss your vacation plans for ten minutes.

Later, your friend asks:

> "Did you finally book it?"

You immediately know they mean the vacation.

That recent conversational context is similar to Short-Term Memory.

---

# Characteristics of Short-Term Memory

- Session-based
- Temporary
- Context-aware
- Continuously updated
- Limited storage
- Automatically expires
- Conversation focused

---

# What Does Short-Term Memory Store?

## User Messages

```
I want to buy a laptop.
```

---

## Assistant Responses

```
Here are the top five laptops.
```

---

## Conversation Context

```
Budget

$1200

Preferred Brand

Dell

Purpose

Programming
```

---

## Recent Decisions

```
Selected Laptop

Dell XPS 15
```

---

## Follow-up Information

```
User later asks:

Show similar options.
```

The agent understands that "similar options" refers to Dell laptops.

---

# Short-Term Memory Architecture

```
              User Conversation
                     │
                     ▼
          ┌────────────────────┐
          │ Short-Term Memory  │
          ├────────────────────┤
          │ User Messages      │
          │ Assistant Replies  │
          │ Conversation State │
          │ Recent Decisions   │
          └────────────────────┘
                     │
                     ▼
              AI Reasoning
                     │
                     ▼
             Contextual Response
```

---

# Short-Term Memory Workflow

## Step 1

Receive user message.

```
Recommend a smartphone.
```

---

## Step 2

Store the conversation.

```
Topic

Smartphones
```

---

## Step 3

Generate a response.

---

## Step 4

User asks:

```
Only Samsung models.
```

The agent retrieves the previous topic from Short-Term Memory.

---

## Step 5

Update memory.

```
Topic

Samsung Smartphones

Budget

$800
```

---

## Step 6

Continue the conversation until the session ends.

---

# Memory Lifecycle

```
Conversation Starts
        │
        ▼
Store Messages
        │
        ▼
Update Context
        │
        ▼
Retrieve Recent History
        │
        ▼
Generate Better Responses
        │
        ▼
Session Ends
        │
        ▼
Memory Cleared
```

---

# Example

User:

```
Plan a trip to Japan.
```

Agent stores:

```
Destination

Japan
```

User:

```
7 days.
```

Memory becomes:

```
Destination

Japan

Duration

7 Days
```

User:

```
Budget is $3000.
```

Memory updates:

```
Destination

Japan

Duration

7 Days

Budget

$3000
```

User:

```
Create the itinerary.
```

The agent already knows all previous details.

---

# Short-Term Memory vs Working Memory

| Short-Term Memory | Working Memory |
|-------------------|----------------|
| Stores conversation | Stores reasoning state |
| Session-based | Task-based |
| Maintains dialogue | Supports execution |
| Keeps recent history | Keeps intermediate calculations |
| Used across conversation | Used during processing |

---

# Short-Term Memory vs Long-Term Memory

| Short-Term Memory | Long-Term Memory |
|-------------------|------------------|
| Temporary | Persistent |
| Current session | Multiple sessions |
| Recent interactions | User preferences and knowledge |
| Automatically removed | Stored permanently |

---

# Benefits

- Enables natural conversations
- Supports follow-up questions
- Preserves conversation flow
- Improves user experience
- Reduces repetitive questions
- Makes AI feel more intelligent

---

# Limitations

- Exists only during the session
- Limited storage capacity
- Older context may be forgotten
- Cannot remember previous sessions
- Large conversations may require summarization

---

# Best Practices

- Store only relevant conversation history.
- Remove outdated or unrelated context.
- Summarize long conversations when necessary.
- Keep memory focused on the active discussion.
- Continuously update important session information.

---

# Enterprise Use Cases

## Customer Support

Remember:

- Customer issue
- Previous troubleshooting
- Product information
- Current ticket status

---

## Virtual Assistant

Remember:

- Calendar events
- Current reminders
- Recent commands
- Ongoing tasks

---

## AI Tutor

Remember:

- Current lesson
- Student questions
- Previous explanations
- Learning progress

---

## Healthcare Assistant

Remember:

- Current symptoms
- Recent medications
- Doctor recommendations
- Active consultation details

---

# Short-Term Memory in Agentic AI

Modern AI Agents rely on Short-Term Memory to maintain coherent conversations while interacting with users and other agents.

Popular frameworks such as LangGraph, CrewAI, AutoGen, OpenAI Agents SDK, and Semantic Kernel implement conversation history or session memory as a form of Short-Term Memory.

It enables:

- Multi-turn conversations
- Better planning
- Context-aware reasoning
- Improved tool execution
- Personalized responses within a session

---

# Summary

Short-Term Memory allows an AI Agent to remember recent interactions during an active conversation. It stores user messages, assistant responses, and conversation context, enabling the agent to understand follow-up questions and maintain coherent dialogue. Unlike Long-Term Memory, it is temporary and exists only for the duration of the current session, making it essential for natural, context-aware conversational AI.