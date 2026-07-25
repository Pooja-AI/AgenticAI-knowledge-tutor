# Retry Pattern

## Overview

The Retry Pattern is an execution pattern in which an AI agent automatically retries a failed operation before reporting an error. Temporary failures such as network issues, API timeouts, database locks, or service unavailability often resolve themselves after a short delay. Instead of failing immediately, the agent attempts the operation again based on predefined retry rules.

Retry Pattern is widely used in enterprise AI systems to improve reliability, resilience, and fault tolerance.

---

## Why Retry Pattern?

External services do not always succeed on the first attempt.

Without Retry Pattern:

```text
API Call

↓

Failure

↓

Workflow Stops
```

Temporary failures immediately terminate the workflow.

With Retry Pattern:

```text
API Call

↓

Failure?

↓

Retry

↓

Success?

↓

Continue Workflow

↓

Final Response
```

The system automatically recovers from transient failures.

---

## Key Characteristics

- Automatic retries
- Fault tolerance
- Improved reliability
- Configurable retry limits
- Delay between retries
- Better user experience

---

## Retry Pattern Architecture

```text
             User Request
                   │
                   ▼
            Execute Operation
                   │
            ┌──────┴──────┐
            ▼             ▼
         Success       Failure
            │             │
            │       Retry Counter
            │             │
            │       Retry Operation
            │             │
            └──────┬──────┘
                   ▼
            Final Response
```

---

## Workflow

```text
Receive Request
      │
      ▼
Execute Task
      │
      ▼
Did it Fail?
      │
 ┌────┴─────┐
 │          │
No         Yes
 │          │
 ▼          ▼
Return    Retry
             │
             ▼
      Success or Max Retries
             │
             ▼
       Return Response
```

---

# Step-by-Step Process

## Step 1: Receive Request

Example

```text
Call Payment API
```

---

## Step 2: Execute Operation

```text
Send Payment Request
```

---

## Step 3: Detect Failure

```text
Timeout

↓

Retry Required
```

---

## Step 4: Retry

```text
Attempt 2

↓

Attempt 3
```

---

## Step 5: Return Result

```text
Payment Successful

OR

Maximum Retries Reached
```

---

# Python Example

```python
import time

MAX_RETRIES = 3

for attempt in range(1, MAX_RETRIES + 1):
    try:
        print(f"Attempt {attempt}")

        if attempt < 3:
            raise Exception("Temporary Failure")

        print("Operation Successful")
        break

    except Exception as e:
        print(e)

        if attempt == MAX_RETRIES:
            print("Maximum retries reached.")
        else:
            time.sleep(1)
```

### Output

```text
Attempt 1
Temporary Failure

Attempt 2
Temporary Failure

Attempt 3
Operation Successful
```

---

# Real-World Examples

## API Integration

```text
Call API

↓

Timeout

↓

Retry

↓

Receive Response
```

---

## Database Access

```text
Query Database

↓

Connection Lost

↓

Reconnect

↓

Retrieve Data
```

---

## Cloud Storage

```text
Upload File

↓

Network Error

↓

Retry Upload

↓

Upload Complete
```

---

## AI Tool Calling

```text
Invoke Search Tool

↓

Temporary Failure

↓

Retry

↓

Return Search Results
```

---

# Enterprise Use Cases

- API Integrations
- Database Operations
- Cloud Storage
- Payment Systems
- AI Tool Calling
- Microservices
- Enterprise Search
- File Upload Services
- Messaging Systems
- Distributed Applications

---

# Advantages

- Increases reliability
- Handles temporary failures
- Improves user experience
- Reduces manual intervention
- Simple implementation
- Supports resilient workflows

---

# Limitations

- Does not fix permanent failures.
- Excessive retries increase latency.
- Can overload external services.
- Requires proper retry intervals.
- Needs retry limits to avoid infinite loops.

---

# Best Practices

- Retry only transient failures.
- Set a maximum retry count.
- Use exponential backoff between retries.
- Log every retry attempt.
- Combine Retry with Fallback Pattern.
- Stop retrying on permanent errors.

---

# Retry Pattern in Agentic AI Frameworks

### OpenAI Agents SDK

- Retries tool calls when temporary failures such as rate limits or network issues occur.

### LangChain

- Provides retry mechanisms for LLM calls and external tool invocations.

### LangGraph

- Supports retry policies at the node level with configurable retry conditions.

### CrewAI

- Worker agents can automatically retry failed tasks before reporting failure to the coordinator.

---

# Comparison

| Retry Pattern | Fallback Pattern |
|---------------|------------------|
| Repeats the same operation | Switches to an alternative operation |
| Handles temporary failures | Handles permanent failures |
| Same service is retried | Different service or workflow is used |
| Simple recovery | Alternative execution strategy |
| Best for transient errors | Best for unavailable services |

---

# Summary

The Retry Pattern is an execution pattern that automatically repeats failed operations to recover from temporary errors such as network issues, API timeouts, or service interruptions. By improving fault tolerance and system reliability, Retry is a fundamental building block for robust Agentic AI applications and enterprise workflows.