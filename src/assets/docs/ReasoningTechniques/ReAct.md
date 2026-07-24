# ReAct (Reason + Act)

## Overview

ReAct (Reason + Act) is a reasoning framework that enables AI Agents to alternate between thinking and taking actions while solving a problem. Instead of relying solely on internal reasoning, the agent can interact with external tools such as search engines, databases, APIs, calculators, or file systems to gather additional information before generating the final answer.

ReAct combines **reasoning** and **tool usage**, making it one of the most widely used techniques in modern Agentic AI systems.

---

## Why ReAct?

Some problems require information that the AI model does not already know.

Without ReAct:

```text
User Question

↓

LLM

↓

Guess Answer
```

The model may hallucinate or provide outdated information.

With ReAct:

```text
User Question

↓

Reason

↓

Choose Tool

↓

Execute Tool

↓

Observe Result

↓

Reason Again

↓

Final Answer
```

The AI Agent can verify information before responding.

---

## Key Characteristics

- Combines reasoning with actions
- Uses external tools
- Supports iterative reasoning
- Reduces hallucinations
- Improves factual accuracy
- Enables dynamic decision-making

---

## ReAct Architecture

```text
             User Request
                   │
                   ▼
             Reason (Think)
                   │
                   ▼
            Select Tool
                   │
                   ▼
           Execute Action
                   │
                   ▼
         Observe Result
                   │
                   ▼
        Continue Reasoning
                   │
                   ▼
          Generate Answer
```

---

## Workflow

```text
Receive Request
      │
      ▼
Analyze Question
      │
      ▼
Reason About Next Action
      │
      ▼
Call Tool
      │
      ▼
Observe Output
      │
      ▼
Repeat if Needed
      │
      ▼
Return Final Response
```

---

# Step-by-Step Process

## Step 1: Receive User Request

Example

```text
What is the current weather in Hyderabad?
```

---

## Step 2: Reason

The AI determines:

```text
I need live weather information.

I should use a Weather API.
```

---

## Step 3: Execute Action

```text
Call Weather API
```

---

## Step 4: Observe Result

```text
Temperature: 31°C

Condition: Sunny
```

---

## Step 5: Continue Reasoning

```text
The requested information has been retrieved.

Generate the response.
```

---

## Step 6: Final Answer

```text
Today's weather in Hyderabad is 31°C with sunny skies.
```

---

# Python Example

```python
def react(question):

    print("Reasoning...")

    print("Action: Search Knowledge Base")

    observation = "Python was released in 1991."

    print("Observation:", observation)

    print("Final Answer Generated")

react("When was Python released?")
```

### Output

```text
Reasoning...
Action: Search Knowledge Base
Observation: Python was released in 1991.
Final Answer Generated
```

---

# Real-World Examples

## Customer Support Agent

```text
Customer Question

↓

Search Knowledge Base

↓

Retrieve Policy

↓

Generate Answer
```

---

## Coding Assistant

```text
Programming Question

↓

Search Documentation

↓

Execute Code

↓

Return Solution
```

---

## Enterprise Assistant

```text
Employee Query

↓

Search Company Documents

↓

Retrieve Information

↓

Answer
```

---

## Travel Assistant

```text
Travel Request

↓

Flight API

↓

Hotel API

↓

Weather API

↓

Travel Plan
```

---

# Enterprise Use Cases

- Customer Support
- Enterprise Search
- AI Coding Assistants
- Financial Advisors
- Healthcare Assistants
- HR Automation
- Travel Planning
- IT Helpdesk
- Research Assistants
- DevOps Automation

---

# Advantages

- Reduces hallucinations
- Retrieves real-time information
- Improves answer accuracy
- Supports tool integration
- Handles dynamic tasks
- Enables autonomous decision-making

---

# Limitations

- Depends on external tool availability.
- Increases response latency.
- Tool failures can affect results.
- Requires secure tool access.
- More complex than simple prompting.

---

# Best Practices

- Choose the appropriate tool for each task.
- Verify tool outputs before responding.
- Avoid unnecessary tool calls.
- Handle tool failures gracefully.
- Log reasoning and actions for debugging.
- Combine ReAct with memory and planning for complex workflows.

---

# ReAct in Agentic AI Frameworks

### OpenAI Agents SDK

- Uses reasoning to determine when to invoke registered tools and integrates tool outputs into responses.

### LangChain

- Implements ReAct Agents that alternate between reasoning and tool execution.

### LangGraph

- Models ReAct as graph nodes with reasoning and action loops.

### CrewAI

- Agents use ReAct to collaborate, invoke tools, and share observations during task execution.

---

# Comparison

| Traditional LLM | ReAct |
|-----------------|-------|
| Internal reasoning only | Reasoning + Tool Usage |
| May hallucinate | Verifies information |
| Static knowledge | Dynamic knowledge retrieval |
| Limited external interaction | Rich tool integration |
| Lower reliability for live data | High reliability for live data |

---

# Summary

ReAct (Reason + Act) is a reasoning framework that enables AI Agents to alternate between logical reasoning and external actions. By combining thinking with tool execution, agents can retrieve real-time information, verify facts, and iteratively refine their reasoning before generating accurate and reliable responses. ReAct is one of the core reasoning techniques used in modern Agentic AI systems.