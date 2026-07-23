# Replanning

## Overview

Replanning is the process of modifying or creating a new execution plan when the current plan can no longer achieve the desired goal. Unlike Dynamic Planning, which continuously adapts small parts of a plan, Replanning typically occurs when a significant change or failure requires the agent to redesign the remaining workflow.

Replanning enables AI Agents to recover from failures and continue working toward their objectives without restarting the entire process.

---

## Why Replanning?

In real-world environments, unexpected situations can make the original plan invalid.

Examples include:

- API failures
- Missing data
- Task failures
- New user requirements
- Resource shortages
- Network outages

Instead of abandoning the task, the agent generates a new plan to reach the goal.

---

## Key Characteristics

- Triggered by unexpected events
- Creates a new execution plan
- Improves fault tolerance
- Supports autonomous recovery
- Increases task completion rate
- Handles changing requirements

---

## Replanning Architecture

```text
             User Goal
                 │
                 ▼
         Create Initial Plan
                 │
                 ▼
          Execute Tasks
                 │
                 ▼
        Failure or Change?
                 │
        ┌────────┴────────┐
        ▼                 ▼
       No                Yes
        │                 │
        ▼                 ▼
 Continue Plan      Generate New Plan
        │                 │
        └────────┬────────┘
                 ▼
         Continue Execution
                 │
                 ▼
            Final Result
```

---

## Workflow

```text
Receive Goal
      │
      ▼
Create Plan
      │
      ▼
Execute Tasks
      │
      ▼
Task Failed?
      │
 ┌────┴────┐
 │         │
 ▼         ▼
 No       Yes
 │         │
 ▼         ▼
Continue Replan
      │
      ▼
Execute New Plan
      │
      ▼
Complete Goal
```

---

# Step-by-Step Process

## Step 1: Create Initial Plan

Example

```
Book Flight

↓

Reserve Hotel

↓

Rent Car
```

---

## Step 2: Execute Plan

```
Flight Booked

↓

Reserve Hotel
```

---

## Step 3: Detect Failure

```
Hotel Fully Booked
```

---

## Step 4: Generate New Plan

```
Search Nearby Hotels

↓

Compare Prices

↓

Reserve Alternative Hotel
```

---

## Step 5: Continue Execution

```
Hotel Reserved

↓

Rent Car

↓

Trip Completed
```

---

# Real-World Example

## Delivery Robot

Original Plan

```
Deliver Package

↓

Route A
```

Unexpected Event

```
Road Blocked
```

Replanned Route

```
Route B

↓

Deliver Package
```

---

# Enterprise Example

## AI Recruitment Agent

Goal

```
Hire Software Engineer
```

Original Plan

```
Collect Applications

↓

Conduct Interview

↓

Send Offer
```

Unexpected Event

```
Candidate Rejects Offer
```

Replanned Workflow

```
Select Next Candidate

↓

Schedule Interview

↓

Send New Offer
```

---

# Advantages

- Recovers from failures
- Improves reliability
- Supports autonomous execution
- Handles unexpected situations
- Increases task success
- Suitable for enterprise systems

---

# Limitations

- Additional computation required
- Can increase execution time
- Frequent replanning affects performance
- Complex dependency management
- Requires accurate monitoring

---

# Replanning vs Dynamic Planning

| Replanning | Dynamic Planning |
|------------|------------------|
| Creates a new plan | Updates existing plan |
| Triggered by failures | Continuous adaptation |
| Larger plan changes | Small plan modifications |
| Recovery focused | Optimization focused |
| Used after major changes | Used during execution |

---

# Python Example

```python
class ReplanningAgent:

    def execute(self, hotel_available):

        plan = [
            "Book Flight",
            "Reserve Hotel",
            "Rent Car"
        ]

        print("Original Plan:")

        for task in plan:
            print("-", task)

        print()

        if not hotel_available:

            print("Hotel Reservation Failed")

            print("Generating New Plan...\n")

            plan[1] = "Reserve Alternative Hotel"

        print("Updated Plan:")

        for task in plan:
            print("-", task)


agent = ReplanningAgent()

agent.execute(False)
```

### Output

```text
Original Plan:

- Book Flight
- Reserve Hotel
- Rent Car

Hotel Reservation Failed

Generating New Plan...

Updated Plan:

- Book Flight
- Reserve Alternative Hotel
- Rent Car
```

---

# Real-World Applications

- Travel booking
- AI customer support
- Robotics
- Autonomous vehicles
- Manufacturing
- Supply chain
- Cloud deployment
- Healthcare workflows
- Smart logistics
- Enterprise automation

---

# Enterprise Use Cases

## Banking

```text
Loan Verification
      │
      ▼
Credit Check Failed
      │
      ▼
Use Alternative Credit Source
```

---

## Manufacturing

```text
Machine Failure
      │
      ▼
Assign Backup Machine
```

---

## Cloud Computing

```text
Primary Server Down
      │
      ▼
Deploy to Backup Server
```

---

## Healthcare

```text
Doctor Unavailable
      │
      ▼
Assign Another Specialist
```

---

# Best Practices

- Detect failures quickly.
- Replan only when necessary.
- Preserve completed work.
- Avoid restarting the entire workflow.
- Validate the new plan before execution.
- Log replanning decisions for auditing.

---

# Replanning in Agentic AI Frameworks

### LangGraph

- Re-routes execution using conditional edges.
- Updates workflow state after failures.

### CrewAI

- Manager agent reallocates failed tasks to other agents.

### AutoGen

- Planner agent creates a revised execution strategy after receiving failure feedback.

### OpenAI Agents SDK

- Agent selects alternative tools or workflows when the original execution fails.

---

# Summary

Replanning enables AI Agents to recover from failures and continue toward their goals by generating a new execution strategy. It is a critical capability in enterprise Agentic AI systems where unexpected events, changing requirements, and resource failures are common. By preserving completed work and adapting intelligently, replanning improves reliability, robustness, and overall task success.