import { useState } from "react";
// import AgentArchitectures from "../assets/docs/AgentArchitectures.md?raw";
import AgentChallenges from "../assets/docs/AgentChallenges.md?raw";
import AgentCommunication from "../assets/docs/AgentCommunication.md?raw";
import AgentComponents from "../assets/docs/AgentComponents.md?raw";
import AgentDesignPatterns from "../assets/docs/AgentDesignPatterns.md?raw";
import AgentEcosystem from "../assets/docs/AgentEcosystem.md?raw";
import AgentEvaluation from "../assets/docs/AgentEvaluation.md?raw";
import AgentFundamentals from "../assets/docs/AgentFundamentals.md?raw";
import AgentLifecycle from "../assets/docs/AgentLifecycle.md?raw";
import AgentMemory from "../assets/docs/AgentMemory.md?raw";
import AgentObservability from "../assets/docs/AgentObservability.md?raw";
import AgentPlanning from "../assets/docs/AgentPlanning.md?raw";
import AgentReasoning from "../assets/docs/AgentReasoning.md?raw";
import AgentSafety from "../assets/docs/AgentSafety.md?raw";
import ContextManagement from "../assets/docs/ContextManagement.md?raw";
import DecisionMaking from "../assets/docs/DecisionMaking.md?raw";
import ExecutionPatterns from "../assets/docs/ExecutionPatterns.md?raw";
import IntroductionAgenticAI from "../assets/docs/IntroductionAgenticAI.md?raw";
import MultiAgentSystems from "../assets/docs/MultiAgentSystems.md?raw";
import ToolUsage from "../assets/docs/ToolUsage.md?raw";
import TypesofAIAgents from "../assets/docs/TypesofAIAgents.md?raw";
import IntroductionAgenticAICode from "../assets/code/IntroductionAgenticAI.py?raw";
import AgentFundamentalsCode from "../assets/code/AgentFundamentals.py?raw";
import AgentComponentsCode from "../assets/code/AgentComponents.py?raw";
import AgentLifecycleCode from "../assets/code/AgentLifecycle.py?raw";
import TypesOfAIAgentsCode from "../assets/code/TypesofAIAgents.py?raw";
import AgentReasoningCode from "../assets/code/AgentReasoning.py?raw";
import AgentPlanningCode from "../assets/code/AgentPlanning.py?raw";
import AgentMemoryCode from "../assets/code/AgentMemory.py?raw";
import ToolUsageCode from "../assets/code/ToolUsage.py?raw";
import ContextManagementCode from "../assets/code/ContextManagement.py?raw";
import DecisionMakingCode from "../assets/code/DecisionMaking.py?raw";
import AgentCommunicationCode from "../assets/code/AgentCommunication.py?raw";
import MultiAgentSystemsCode from "../assets/code/MultiAgentSystems.py?raw";
import ExecutionPatternsCode from "../assets/code/ExecutionPatterns.py?raw";
import AgentSafetyCode from "../assets/code/AgentSafety.py?raw";
import AgentEvaluationCode from "../assets/code/AgentEvaluation.py?raw";
import AgentObservabilityCode from "../assets/code/AgentObservability.py?raw";
import AgentDesignPatternsCode from "../assets/code/AgentDesignPatterns.py?raw";



import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const AgenticAICookbook = [

  {
  id: "ai-agents-introduction",
  category: "Core Concepts",
  title: "AI Agents Introduction",
  difficulty: "Beginner",
  time: "~10 min",
  description:
    "Learn what AI Agents are, how they differ from traditional AI systems, and why they are becoming the foundation of modern intelligent applications.",

  tags: [
    "ai agents",
    "introduction",
    "autonomous systems",
    "agentic ai",
    "llm"
  ],

  concept: IntroductionAgenticAI,

  steps: [
    {
      label: "What is an AI Agent?",
      icon: "🤖",
      detail:
        "Understand the definition of an AI Agent and how it autonomously performs tasks to achieve specific goals."
    },
    {
      label: "Why AI Agents?",
      icon: "🎯",
      detail:
        "Learn why AI Agents are needed for solving complex problems beyond traditional chatbots and automation."
    },
    {
      label: "Core Characteristics",
      icon: "⭐",
      detail:
        "Explore the essential characteristics of AI Agents, including autonomy, reasoning, planning, memory, and action execution."
    },
    {
      label: "How AI Agents Work",
      icon: "⚙️",
      detail:
        "Understand the high-level workflow from receiving user requests to planning, reasoning, tool usage, and completing tasks."
    },
    {
      label: "Real-World Applications",
      icon: "🏢",
      detail:
        "Discover how AI Agents are used across industries such as banking, healthcare, manufacturing, retail, customer support, and software engineering."
    },
    {
      label: "Future of AI Agents",
      icon: "🚀",
      detail:
        "Understand how AI Agents are evolving toward collaborative, autonomous, and enterprise-scale intelligent systems."
    }
  ],

  code: IntroductionAgenticAICode
},
{
  id: "agent-fundamentals",
  category: "Core Concepts",
  title: "Agent Fundamentals",
  difficulty: "Beginner",
  time: "~12 min",
  description:
    "Understand the foundational concepts of AI Agents, including goals, environment, autonomy, perception, reasoning, actions, and the core principles that enable intelligent behavior.",

  tags: [
    "agent fundamentals",
    "autonomy",
    "goals",
    "environment",
    "perception",
    "reasoning",
    "actions"
  ],

  concept: AgentFundamentals,

  steps: [
    {
      label: "Understand AI Agents",
      icon: "🤖",
      detail:
        "Learn what makes an AI Agent different from traditional software and language models."
    },
    {
      label: "Goals & Objectives",
      icon: "🎯",
      detail:
        "Explore how agents operate with defined goals and continuously work toward achieving desired outcomes."
    },
    {
      label: "Perceive the Environment",
      icon: "👀",
      detail:
        "Understand how agents collect information from users, documents, APIs, databases, sensors, and other external sources."
    },
    {
      label: "Reason & Decide",
      icon: "🧠",
      detail:
        "Learn how agents analyze available information, evaluate options, and determine the most appropriate action."
    },
    {
      label: "Take Actions",
      icon: "⚡",
      detail:
        "Discover how agents execute actions such as calling tools, querying databases, invoking APIs, or generating responses."
    },
    {
      label: "Adapt & Improve",
      icon: "📈",
      detail:
        "Understand how agents use memory, feedback, and previous experiences to improve future decisions and performance."
    }
  ],

  code: AgentFundamentalsCode
},
{
  id: "agent-components",
  category: "Core Concepts",
  title: "Agent Components",
  difficulty: "Beginner",
  time: "~15 min",
  description:
    "Explore the essential building blocks of an AI Agent, including perception, reasoning, planning, memory, tools, actions, and feedback mechanisms that work together to accomplish goals.",

  tags: [
    "components",
    "perception",
    "reasoning",
    "planning",
    "memory",
    "tools",
    "actions"
  ],

  concept: AgentComponents,

  steps: [
    {
      label: "Perception",
      icon: "👀",
      detail:
        "Collect information from users, documents, APIs, databases, sensors, and other data sources to understand the current environment."
    },
    {
      label: "Reasoning Engine",
      icon: "🧠",
      detail:
        "Analyze the collected information, evaluate possible solutions, and determine the best course of action."
    },
    {
      label: "Planning Module",
      icon: "📋",
      detail:
        "Break complex objectives into smaller, manageable tasks and organize them into an execution plan."
    },
    {
      label: "Memory",
      icon: "💾",
      detail:
        "Store conversations, retrieved knowledge, previous experiences, and intermediate results to maintain continuity across tasks."
    },
    {
      label: "Tool Integration",
      icon: "🛠️",
      detail:
        "Connect with external tools such as APIs, databases, search engines, calculators, and enterprise applications to perform real-world actions."
    },
    {
      label: "Action Execution",
      icon: "⚡",
      detail:
        "Execute planned actions, interact with external systems, and generate responses based on the selected strategy."
    },
    {
      label: "Feedback & Learning",
      icon: "📈",
      detail:
        "Monitor execution results, capture feedback, and use observations to improve future reasoning, planning, and decision making."
    }
  ],

  code: AgentComponentsCode
},
{
  id: "agent-lifecycle",
  category: "Core Concepts",
  title: "Agent Lifecycle",
  difficulty: "Beginner",
  time: "~12 min",
  description:
    "Learn the complete lifecycle of an AI Agent, from receiving a request to reasoning, planning, execution, monitoring, and continuous improvement.",

  tags: [
    "agent lifecycle",
    "workflow",
    "execution",
    "planning",
    "monitoring",
    "feedback",
    "automation"
  ],

  concept: AgentLifecycle,

  steps: [
    {
      label: "Receive Request",
      icon: "📥",
      detail:
        "The AI Agent receives a task, question, or event from a user, application, or external system."
    },
    {
      label: "Understand Context",
      icon: "🧠",
      detail:
        "Analyze the request, retrieve relevant context, and identify the user's intent and objectives."
    },
    {
      label: "Plan Workflow",
      icon: "📝",
      detail:
        "Create an execution strategy by breaking the objective into smaller tasks and determining the required tools and resources."
    },
    {
      label: "Execute Tasks",
      icon: "⚡",
      detail:
        "Perform the planned actions by invoking tools, querying knowledge sources, interacting with APIs, or collaborating with other agents."
    },
    {
      label: "Monitor Progress",
      icon: "📊",
      detail:
        "Track task execution, verify intermediate results, handle errors, and adjust the workflow if necessary."
    },
    {
      label: "Generate Response",
      icon: "💬",
      detail:
        "Combine the execution results into a clear, accurate, and complete response for the user or calling system."
    },
    {
      label: "Learn & Improve",
      icon: "📈",
      detail:
        "Store useful information in memory, capture feedback, and use execution outcomes to improve future performance."
    }
  ],

  code: AgentLifecycleCode
},
{
  id: "types-of-ai-agents",
  category: "Core Concepts",
  title: "Types of AI Agents",
  difficulty: "Beginner",
  time: "~15 min",
  description:
    "Explore the different types of AI Agents, from simple rule-based agents to advanced learning and multi-agent systems, and understand where each type is best suited.",

  tags: [
    "agent types",
    "simple reflex",
    "model-based",
    "goal-based",
    "utility-based",
    "learning agent",
    "multi-agent"
  ],

  concept: TypesofAIAgents,

  steps: [
    {
      label: "Simple Reflex Agent",
      icon: "⚡",
      detail:
        "Responds to current inputs using predefined rules without considering past experiences or future consequences."
    },
    {
      label: "Model-Based Agent",
      icon: "🗺️",
      detail:
        "Maintains an internal model of the environment to make better decisions even when information is incomplete."
    },
    {
      label: "Goal-Based Agent",
      icon: "🎯",
      detail:
        "Evaluates possible actions based on defined goals and selects the path that best achieves the desired outcome."
    },
    {
      label: "Utility-Based Agent",
      icon: "📊",
      detail:
        "Chooses the action that maximizes overall utility by balancing factors such as cost, risk, quality, and efficiency."
    },
    {
      label: "Learning Agent",
      icon: "📚",
      detail:
        "Continuously improves its behavior by learning from feedback, previous experiences, and newly available information."
    },
    {
      label: "Multi-Agent System",
      icon: "🤝",
      detail:
        "Multiple specialized AI Agents collaborate, coordinate, and communicate to solve complex tasks more effectively."
    }
  ],

  code: TypesOfAIAgentsCode
},
{
  id: "agent-reasoning",
  category: "Core Concepts",
  title: "Agent Reasoning",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how AI Agents analyze information, evaluate alternatives, draw conclusions, and make intelligent decisions to solve problems and accomplish goals.",

  tags: [
    "reasoning",
    "thinking",
    "logic",
    "problem solving",
    "decision making",
    "inference",
    "llm"
  ],

  concept: AgentReasoning,

  steps: [
    {
      label: "Understand the Goal",
      icon: "🎯",
      detail:
        "Interpret the user's request, identify the objective, and determine what needs to be accomplished."
    },
    {
      label: "Collect Information",
      icon: "📚",
      detail:
        "Gather relevant context from memory, retrieved documents, user inputs, APIs, and external knowledge sources."
    },
    {
      label: "Analyze the Situation",
      icon: "🧠",
      detail:
        "Examine the available information, identify relationships, constraints, and possible solutions."
    },
    {
      label: "Evaluate Alternatives",
      icon: "⚖️",
      detail:
        "Compare multiple approaches based on accuracy, feasibility, cost, risk, and business objectives."
    },
    {
      label: "Select the Best Action",
      icon: "✅",
      detail:
        "Choose the most appropriate action or sequence of actions to achieve the desired outcome."
    },
    {
      label: "Refine Through Feedback",
      icon: "📈",
      detail:
        "Review execution results, learn from successes and failures, and improve future reasoning and decision-making."
    }
  ],

  code: AgentReasoningCode
},
{
  id: "planning",
  category: "Core Concepts",
  title: "Planning",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how AI Agents create structured execution plans by breaking complex goals into smaller tasks, determining dependencies, selecting tools, and organizing workflows for efficient execution.",

  tags: [
    "planning",
    "task decomposition",
    "workflow",
    "execution",
    "strategy",
    "goal planning",
    "agent planning"
  ],

  concept: AgentPlanning,

  steps: [
    {
      label: "Define the Goal",
      icon: "🎯",
      detail:
        "Understand the user's objective and clearly define the expected outcome before creating a plan."
    },
    {
      label: "Break Down Tasks",
      icon: "🧩",
      detail:
        "Decompose complex objectives into smaller, manageable tasks that are easier to execute."
    },
    {
      label: "Identify Dependencies",
      icon: "🔗",
      detail:
        "Determine the order of execution by identifying which tasks depend on the completion of others."
    },
    {
      label: "Select Resources",
      icon: "🛠️",
      detail:
        "Choose the appropriate tools, APIs, memory, knowledge sources, and external systems required to complete each task."
    },
    {
      label: "Execute the Plan",
      icon: "⚡",
      detail:
        "Carry out the planned tasks sequentially or in parallel while monitoring progress and handling unexpected situations."
    },
    {
      label: "Review & Adjust",
      icon: "📈",
      detail:
        "Evaluate execution results, refine the plan when conditions change, and optimize future planning strategies."
    }
  ],

  code: AgentPlanningCode
},
{
  id: "memory",
  category: "Core Concepts",
  title: "Memory",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how AI Agents store, retrieve, and utilize information across interactions to maintain context, personalize responses, and support long-running workflows.",

  tags: [
    "memory",
    "short-term memory",
    "long-term memory",
    "episodic memory",
    "semantic memory",
    "working memory",
    "context"
  ],

  concept: AgentMemory,

  steps: [
    {
      label: "Capture Information",
      icon: "📝",
      detail:
        "Collect important details from user interactions, retrieved documents, tool outputs, and workflow execution."
    },
    {
      label: "Organize Memory",
      icon: "🗂️",
      detail:
        "Classify information into different memory types such as short-term, long-term, episodic, semantic, or working memory."
    },
    {
      label: "Store Knowledge",
      icon: "💾",
      detail:
        "Persist valuable information in memory systems, databases, or vector stores for future retrieval."
    },
    {
      label: "Retrieve Context",
      icon: "🔍",
      detail:
        "Access relevant memories and contextual information to support reasoning, planning, and decision making."
    },
    {
      label: "Update Memory",
      icon: "🔄",
      detail:
        "Modify existing memories by incorporating new experiences, correcting outdated information, and removing irrelevant data."
    },
    {
      label: "Apply Memory",
      icon: "🧠",
      detail:
        "Use stored knowledge and past interactions to provide personalized, consistent, and context-aware responses."
    }
  ],

  code: AgentMemoryCode
},
{
  id: "tool-usage",
  category: "Core Concepts",
  title: "Tool Usage",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how AI Agents discover, select, and use external tools such as APIs, databases, search engines, calculators, and enterprise systems to perform real-world tasks beyond language generation.",

  tags: [
    "tool usage",
    "apis",
    "function calling",
    "external tools",
    "integrations",
    "automation",
    "enterprise systems"
  ],

  concept: ToolUsage,

  steps: [
    {
      label: "Identify the Need",
      icon: "🎯",
      detail:
        "Determine whether the user's request requires an external tool or can be answered using the agent's existing knowledge."
    },
    {
      label: "Select the Right Tool",
      icon: "🛠️",
      detail:
        "Choose the most appropriate tool based on the task, available capabilities, permissions, and expected outcome."
    },
    {
      label: "Prepare the Request",
      icon: "📋",
      detail:
        "Validate inputs, gather required parameters, and format the request according to the tool's interface."
    },
    {
      label: "Execute the Tool",
      icon: "⚡",
      detail:
        "Invoke APIs, query databases, perform searches, execute code, or interact with enterprise applications."
    },
    {
      label: "Process the Results",
      icon: "📊",
      detail:
        "Analyze and validate the tool's output before incorporating it into the workflow or final response."
    },
    {
      label: "Respond & Monitor",
      icon: "✅",
      detail:
        "Return the processed result to the user, monitor execution success, and handle errors or retries when necessary."
    }
  ],

  code: ToolUsageCode
},
{
  id: "context-management",
  category: "Core Concepts",
  title: "Context Management",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how AI Agents collect, organize, maintain, and optimize context from conversations, memory, retrieved knowledge, and external systems to make accurate and relevant decisions.",

  tags: [
    "context",
    "context management",
    "conversation",
    "memory",
    "retrieval",
    "rag",
    "token management"
  ],

  concept: ContextManagement,

  steps: [
    {
      label: "Collect Context",
      icon: "📥",
      detail:
        "Gather relevant information from user inputs, conversation history, memory, retrieved documents, APIs, and external systems."
    },
    {
      label: "Filter Relevant Information",
      icon: "🔍",
      detail:
        "Identify the most useful information while removing duplicate, outdated, or irrelevant content."
    },
    {
      label: "Organize Context",
      icon: "🗂️",
      detail:
        "Structure the collected context into a format that supports efficient reasoning, planning, and decision making."
    },
    {
      label: "Maintain Context",
      icon: "🧠",
      detail:
        "Preserve important information across interactions while updating context as conversations and tasks evolve."
    },
    {
      label: "Optimize Context Window",
      icon: "⚙️",
      detail:
        "Manage token limits by summarizing, compressing, or prioritizing the most relevant information for the LLM."
    },
    {
      label: "Apply Context",
      icon: "✅",
      detail:
        "Use the prepared context to generate accurate, personalized, and context-aware responses and actions."
    }
  ],

  code: ContextManagementCode
},
{
  id: "decision-making",
  category: "Core Concepts",
  title: "Decision Making",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how AI Agents evaluate available information, compare multiple alternatives, assess risks, and choose the most appropriate action to achieve their objectives.",

  tags: [
    "decision making",
    "reasoning",
    "evaluation",
    "action selection",
    "risk assessment",
    "confidence",
    "optimization"
  ],

  concept: DecisionMaking,

  steps: [
    {
      label: "Define the Objective",
      icon: "🎯",
      detail:
        "Identify the desired outcome and understand the constraints, priorities, and success criteria for the task."
    },
    {
      label: "Gather Information",
      icon: "📚",
      detail:
        "Collect relevant context from user input, memory, retrieved knowledge, tools, and external systems."
    },
    {
      label: "Evaluate Alternatives",
      icon: "⚖️",
      detail:
        "Analyze multiple possible actions by considering accuracy, feasibility, cost, risk, and business rules."
    },
    {
      label: "Select the Best Option",
      icon: "✅",
      detail:
        "Choose the action that best aligns with the objective while maximizing value and minimizing potential risks."
    },
    {
      label: "Execute the Decision",
      icon: "⚡",
      detail:
        "Perform the selected action through workflows, APIs, tools, or interactions with external systems."
    },
    {
      label: "Review the Outcome",
      icon: "📈",
      detail:
        "Monitor the results, measure success, capture feedback, and use the outcome to improve future decisions."
    }
  ],

  code: DecisionMakingCode
},
{
  id: "agent-communication",
  category: "Core Concepts",
  title: "Agent Communication",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how AI Agents exchange information with users, other agents, tools, and enterprise systems to coordinate tasks, share knowledge, and accomplish complex objectives.",

  tags: [
    "agent communication",
    "communication",
    "coordination",
    "messaging",
    "protocols",
    "collaboration",
    "a2a"
  ],

  concept: AgentCommunication,

  steps: [
    {
      label: "Receive Messages",
      icon: "📥",
      detail:
        "Accept requests, events, or instructions from users, applications, or other AI Agents."
    },
    {
      label: "Interpret Intent",
      icon: "🧠",
      detail:
        "Understand the purpose of the message, extract relevant information, and determine the required action."
    },
    {
      label: "Exchange Information",
      icon: "🔄",
      detail:
        "Share context, task updates, intermediate results, and supporting data with other agents or external systems."
    },
    {
      label: "Coordinate Tasks",
      icon: "🤝",
      detail:
        "Collaborate with specialized agents by delegating work, synchronizing activities, and tracking progress."
    },
    {
      label: "Handle Responses",
      icon: "📨",
      detail:
        "Receive results from tools, services, or collaborating agents and validate the returned information."
    },
    {
      label: "Complete Communication",
      icon: "✅",
      detail:
        "Deliver the final response to the user or requesting system while maintaining context and ensuring reliable communication."
    }
  ],

  code: AgentCommunicationCode
},
{
  id: "multi-agent-systems",
  category: "Core Concepts",
  title: "Multi-Agent Systems",
  difficulty: "Intermediate",
  time: "~18 min",
  description:
    "Learn how multiple AI Agents collaborate, coordinate, and communicate to solve complex problems by leveraging specialized roles, shared knowledge, and distributed execution.",

  tags: [
    "multi-agent",
    "agent collaboration",
    "coordination",
    "distributed systems",
    "orchestration",
    "specialized agents",
    "teamwork"
  ],

  concept: MultiAgentSystems,

  steps: [
    {
      label: "Define Agent Roles",
      icon: "👥",
      detail:
        "Assign specialized responsibilities to individual agents based on their expertise, such as planning, research, coding, or validation."
    },
    {
      label: "Coordinate Tasks",
      icon: "📋",
      detail:
        "Break complex objectives into smaller tasks and distribute them among the appropriate agents."
    },
    {
      label: "Communicate & Share",
      icon: "💬",
      detail:
        "Exchange context, intermediate results, status updates, and decisions to ensure effective collaboration."
    },
    {
      label: "Execute in Parallel",
      icon: "⚡",
      detail:
        "Allow multiple agents to perform independent tasks simultaneously, improving efficiency and reducing execution time."
    },
    {
      label: "Aggregate Results",
      icon: "🧩",
      detail:
        "Collect outputs from all participating agents, resolve conflicts if necessary, and combine them into a unified solution."
    },
    {
      label: "Deliver Final Outcome",
      icon: "✅",
      detail:
        "Present the consolidated result to the user while ensuring consistency, accuracy, and completion of the overall objective."
    }
  ],

  code: MultiAgentSystemsCode
},
{
  id: "execution-patterns",
  category: "Core Concepts",
  title: "Execution Patterns",
  difficulty: "Intermediate",
  time: "~18 min",
  description:
    "Learn how AI Agents execute workflows using different execution strategies such as sequential, parallel, routing, pipeline, event-driven, and human-in-the-loop patterns to optimize performance and reliability.",

  tags: [
    "execution patterns",
    "workflow",
    "sequential",
    "parallel",
    "pipeline",
    "routing",
    "event-driven"
  ],

  concept: ExecutionPatterns,

  steps: [
    {
      label: "Sequential Execution",
      icon: "➡️",
      detail:
        "Execute tasks one after another, where each task begins only after the previous task has successfully completed."
    },
    {
      label: "Parallel Execution",
      icon: "⚡",
      detail:
        "Run multiple independent tasks simultaneously to reduce overall execution time and improve efficiency."
    },
    {
      label: "Pipeline Processing",
      icon: "🔄",
      detail:
        "Process data through a series of dependent stages, where the output of one stage becomes the input for the next."
    },
    {
      label: "Routing & Delegation",
      icon: "🛣️",
      detail:
        "Dynamically route requests to the most appropriate workflow, specialized agent, or external service based on predefined conditions."
    },
    {
      label: "Event-Driven Execution",
      icon: "🔔",
      detail:
        "Trigger workflows automatically when specific events occur, such as new data arrival, user actions, or system notifications."
    },
    {
      label: "Human-in-the-Loop",
      icon: "👤",
      detail:
        "Pause automated execution when human review, approval, or intervention is required before proceeding."
    }
  ],

  code: ExecutionPatternsCode
},
{
  id: "agent-safety",
  category: "Core Concepts",
  title: "Agent Safety",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how AI Agents operate securely and responsibly by applying guardrails, access controls, validation, human oversight, and risk mitigation techniques to protect users and enterprise systems.",

  tags: [
    "agent safety",
    "security",
    "guardrails",
    "privacy",
    "authorization",
    "validation",
    "responsible ai"
  ],

  concept: AgentSafety,

  steps: [
    {
      label: "Identify Risks",
      icon: "⚠️",
      detail:
        "Recognize potential risks such as hallucinations, prompt injection, unauthorized access, data leakage, and unsafe tool usage."
    },
    {
      label: "Apply Guardrails",
      icon: "🛡️",
      detail:
        "Define policies and constraints that control agent behavior and prevent unsafe or unauthorized actions."
    },
    {
      label: "Validate Inputs & Outputs",
      icon: "✔️",
      detail:
        "Verify user inputs, generated responses, and tool outputs to ensure accuracy, security, and policy compliance."
    },
    {
      label: "Control Access",
      icon: "🔐",
      detail:
        "Authenticate users, enforce permissions, and restrict access to sensitive tools, data, and enterprise resources."
    },
    {
      label: "Enable Human Oversight",
      icon: "👤",
      detail:
        "Require human review and approval for critical, high-risk, or business-sensitive decisions before execution."
    },
    {
      label: "Monitor & Improve",
      icon: "📊",
      detail:
        "Continuously monitor agent behavior, log important actions, detect policy violations, and strengthen safety measures over time."
    }
  ],

  code: AgentSafetyCode
},
{
  id: "agent-evaluation",
  category: "Core Concepts",
  title: "Agent Evaluation",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how to measure, analyze, and improve AI Agent performance using evaluation metrics, benchmarking, automated testing, human feedback, and continuous monitoring.",

  tags: [
    "agent evaluation",
    "metrics",
    "benchmarking",
    "testing",
    "performance",
    "quality",
    "feedback"
  ],

  concept: AgentEvaluation,

  steps: [
    {
      label: "Define Evaluation Goals",
      icon: "🎯",
      detail:
        "Identify what success looks like by defining objectives, expected outcomes, and performance criteria for the AI Agent."
    },
    {
      label: "Measure Performance",
      icon: "📏",
      detail:
        "Evaluate metrics such as accuracy, task completion, latency, reliability, and tool execution success."
    },
    {
      label: "Test the Agent",
      icon: "🧪",
      detail:
        "Assess the agent using offline datasets, simulated scenarios, automated test cases, and real-world interactions."
    },
    {
      label: "Analyze Results",
      icon: "📊",
      detail:
        "Review successes, failures, reasoning quality, and workflow execution to identify areas for improvement."
    },
    {
      label: "Collect Feedback",
      icon: "💬",
      detail:
        "Gather input from users, human reviewers, monitoring systems, and production logs to evaluate response quality."
    },
    {
      label: "Improve Continuously",
      icon: "📈",
      detail:
        "Refine prompts, workflows, tools, and models based on evaluation insights to improve future performance."
    }
  ],

  code: AgentEvaluationCode
},
{
  id: "agent-observability",
  category: "Core Concepts",
  title: "Agent Observability",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how to monitor, trace, and analyze AI Agent behavior in production using logs, metrics, traces, and performance insights to improve reliability and debugging.",

  tags: [
    "observability",
    "monitoring",
    "logging",
    "tracing",
    "metrics",
    "debugging",
    "performance"
  ],

  concept: AgentObservability,

  steps: [
    {
      label: "Capture Logs",
      icon: "📝",
      detail:
        "Record important agent activities including requests, decisions, tool usage, responses, errors, and execution events."
    },
    {
      label: "Track Metrics",
      icon: "📊",
      detail:
        "Measure performance indicators such as response time, success rate, failures, token usage, cost, and resource utilization."
    },
    {
      label: "Trace Execution Flow",
      icon: "🔍",
      detail:
        "Follow the complete journey of a request across planning, reasoning, retrieval, tool calls, and final response generation."
    },
    {
      label: "Monitor Tools & Integrations",
      icon: "🛠️",
      detail:
        "Observe external API calls, database interactions, tool execution results, failures, and retry behavior."
    },
    {
      label: "Detect Issues",
      icon: "🚨",
      detail:
        "Identify performance bottlenecks, unexpected behaviors, failures, security risks, and workflow problems."
    },
    {
      label: "Optimize Performance",
      icon: "📈",
      detail:
        "Use monitoring insights to improve prompts, workflows, models, tools, reliability, and operational efficiency."
    }
  ],

  code: AgentObservabilityCode
},
{
  id: "agent-design-patterns",
  category: "Core Concepts",
  title: "Agent Design Patterns",
  difficulty: "Intermediate",
  time: "~18 min",
  description:
    "Learn reusable architectural patterns for building reliable AI Agents, including reasoning patterns, workflow patterns, collaboration approaches, and strategies for solving common agent design problems.",

  tags: [
    "design patterns",
    "react",
    "planning",
    "reflection",
    "router",
    "rag",
    "multi-agent",
    "architecture"
  ],

  concept: AgentDesignPatterns,

  steps: [
    {
      label: "ReAct Pattern",
      icon: "🤔",
      detail:
        "Combine reasoning and action by allowing agents to think, use tools, observe results, and continue solving problems iteratively."
    },
    {
      label: "Plan-and-Execute Pattern",
      icon: "📋",
      detail:
        "Create an execution plan first, then complete tasks step by step according to the defined workflow."
    },
    {
      label: "Reflection Pattern",
      icon: "🔄",
      detail:
        "Enable agents to review their own outputs, identify issues, and improve responses before delivering the final result."
    },
    {
      label: "Router Pattern",
      icon: "🛣️",
      detail:
        "Direct requests to the most suitable agent, model, or workflow based on user intent and task requirements."
    },
    {
      label: "Evaluator-Optimizer Pattern",
      icon: "⚖️",
      detail:
        "Use evaluation and optimization loops where one component generates results and another component reviews and improves them."
    },
    {
      label: "RAG Pattern",
      icon: "📚",
      detail:
        "Combine retrieval systems with LLM reasoning to provide accurate responses using trusted external knowledge sources."
    },
    {
      label: "Human-in-the-Loop Pattern",
      icon: "👤",
      detail:
        "Include human validation and approval steps for critical decisions, sensitive operations, and high-risk workflows."
    }
  ],

  code: AgentDesignPatternsCode
},
{
  id: "agent-challenges",
  category: "Core Concepts",
  title: "Agent Challenges",
  difficulty: "Advanced",
  time: "~18 min",
  description:
    "Understand the major technical, operational, security, and scalability challenges involved in designing, deploying, and maintaining reliable AI Agents in real-world environments.",

  tags: [
    "challenges",
    "hallucination",
    "security",
    "scalability",
    "latency",
    "cost",
    "reliability"
  ],

  concept: AgentChallenges,

  steps: [
    {
      label: "Manage Hallucinations",
      icon: "⚠️",
      detail:
        "Reduce incorrect or fabricated responses by using trusted knowledge sources, retrieval systems, validation, and confidence checks."
    },
    {
      label: "Handle Reasoning Errors",
      icon: "🧠",
      detail:
        "Improve decision quality by evaluating reasoning processes, adding constraints, and refining agent workflows."
    },
    {
      label: "Control Tool Failures",
      icon: "🛠️",
      detail:
        "Manage failures from APIs, databases, and external systems using retries, fallbacks, validation, and error handling."
    },
    {
      label: "Ensure Security & Privacy",
      icon: "🔐",
      detail:
        "Protect sensitive data and systems from risks such as prompt injection, unauthorized access, and data leakage."
    },
    {
      label: "Improve Scalability",
      icon: "📈",
      detail:
        "Design architectures that support increasing users, workloads, agents, tools, and enterprise requirements."
    },
    {
      label: "Optimize Cost & Performance",
      icon: "⚡",
      detail:
        "Balance model usage, latency, infrastructure cost, and response quality for efficient production operations."
    },
    {
      label: "Maintain Reliability",
      icon: "✅",
      detail:
        "Use evaluation, monitoring, observability, and continuous improvement practices to maintain consistent agent behavior."
    }
  ],

  code: ""
},
{
  id: "agent-ecosystem",
  category: "Core Concepts",
  title: "Agent Ecosystem",
  difficulty: "Advanced",
  time: "~20 min",
  description:
    "Explore the complete AI Agent ecosystem including foundation models, agent frameworks, communication protocols, memory systems, retrieval technologies, tools, observability platforms, and deployment infrastructure.",

  tags: [
    "ecosystem",
    "llm",
    "frameworks",
    "protocols",
    "rag",
    "vector database",
    "deployment",
    "enterprise ai"
  ],

  concept: AgentEcosystem,

  steps: [
    {
      label: "Foundation Models",
      icon: "🧠",
      detail:
        "Understand how Large Language Models provide reasoning, language understanding, generation, and decision-making capabilities for AI Agents."
    },
    {
      label: "Agent Frameworks",
      icon: "🏗️",
      detail:
        "Explore frameworks that simplify agent development by providing orchestration, workflows, memory, tool integration, and multi-agent capabilities."
    },
    {
      label: "Communication Protocols",
      icon: "🔗",
      detail:
        "Learn how agents, tools, and applications communicate using standards and protocols for interoperability."
    },
    {
      label: "Knowledge & Retrieval Systems",
      icon: "📚",
      detail:
        "Understand how RAG systems, search engines, knowledge graphs, and vector databases provide external knowledge to agents."
    },
    {
      label: "Memory Systems",
      icon: "💾",
      detail:
        "Explore short-term and long-term memory mechanisms that help agents maintain context and improve future interactions."
    },
    {
      label: "Tool & System Integration",
      icon: "🛠️",
      detail:
        "Learn how agents connect with APIs, databases, enterprise applications, cloud services, and external systems to perform actions."
    },
    {
      label: "Observability & Governance",
      icon: "📊",
      detail:
        "Understand monitoring, evaluation, security, compliance, and governance capabilities required for production AI Agent systems."
    },
    {
      label: "Deployment Infrastructure",
      icon: "☁️",
      detail:
        "Explore cloud platforms, containers, orchestration systems, and enterprise infrastructure used to deploy scalable AI Agents."
    }
  ],

  code: ""
},
];

const CATEGORIES = ["All","Core Concepts", "Planning","Tools & Actions","Memory","Multi-Agent", "Advanced"];
const DIFFICULTIES = { Beginner: "#0F6E56", Intermediate: "#185FA5", Advanced: "#993C1D" };
const DIFFICULTY_BG = { Beginner: "#E1F5EE", Intermediate: "#E6F1FB", Advanced: "#FAECE7" };

function StepFlow({ steps }) {
  const [active, setActive] = useState(null);
  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
        {steps.map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <button
              onClick={() => setActive(active === i ? null : i)}
              style={{
                display: "flex", alignItems: "center", gap: 6, padding: "6px 12px",
                borderRadius: 20, border: active === i ? "1.5px solid #185FA5" : "0.5px solid var(--color-border-tertiary)",
                background: active === i ? "#E6F1FB" : "var(--color-background-primary)",
                color: active === i ? "#185FA5" : "var(--color-text-primary)",
                cursor: "pointer", fontSize: 13, fontWeight: active === i ? 500 : 400,
                transition: "all 0.15s",
              }}
            >
              <span>{step.icon}</span>
              <span>{step.label}</span>
            </button>
            {i < steps.length - 1 && (
              <span style={{ color: "var(--color-text-tertiary)", fontSize: 12 }}>→</span>
            )}
          </div>
        ))}
      </div>
      {active !== null && (
        <div style={{
          marginTop: 10, padding: "10px 14px", borderRadius: 8,
          background: "var(--color-background-secondary)",
          border: "0.5px solid var(--color-border-tertiary)",
          fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6,
        }}>
          <span style={{ fontWeight: 500, color: "var(--color-text-primary)" }}>{steps[active].label}: </span>
          {steps[active].detail}
        </div>
      )}
    </div>
  );
}


function ContentViewer({ content }) {
  return (
    <div className="prose max-w-none h-[75vh] overflow-y-auto p-6">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div style={{ position: "relative", marginTop: 16 }}>
      <button
        onClick={copy}
        style={{
          position: "absolute", top: 8, right: 8, padding: "4px 10px",
          borderRadius: 6, border: "0.5px solid var(--color-border-secondary)",
          background: "var(--color-background-secondary)", cursor: "pointer",
          fontSize: 12, color: "var(--color-text-secondary)", zIndex: 1,
        }}
      >
        {copied ? "✓ Copied" : "Copy"}
      </button>
      <pre style={{
        margin: 0, padding: "14px 16px", borderRadius: 10, overflowX: "auto",
        background: "var(--color-background-secondary)",
        border: "0.5px solid var(--color-border-tertiary)",
        fontSize: 12, lineHeight: 1.65, fontFamily: "var(--font-mono)",
        color: "var(--color-text-primary)", whiteSpace: "pre",
      }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function RecipeCard({ recipe, onSelect, selected }) {
  return (
    <div
      onClick={() => onSelect(recipe)}
      style={{
        padding: "16px 18px", borderRadius: 12, cursor: "pointer",
        border: selected ? "1.5px solid #185FA5" : "0.5px solid var(--color-border-tertiary)",
        background: selected ? "#061320" : "var(--color-background-primary)",
        transition: "all 0.15s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
        <span style={{ fontSize: 13, color: "var(--color-text-secondary)", fontWeight: 400 }}>
          {recipe.category}
        </span>
        <span style={{
          fontSize: 11, padding: "2px 8px", borderRadius: 20, fontWeight: 500,
          background: DIFFICULTY_BG[recipe.difficulty], color: DIFFICULTIES[recipe.difficulty],
        }}>
          {recipe.difficulty}
        </span>
      </div>
      <div style={{ fontWeight: 500, fontSize: 15, marginBottom: 4, color: "var(--color-text-primary)" }}>
        {recipe.title}
      </div>
      <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
        {recipe.description}
      </div>
      <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
        {recipe.tags.map((t) => (
          <span key={t} style={{
            fontSize: 11, padding: "2px 8px", borderRadius: 20,
            background: "var(--color-background-tertiary)",
            color: "var(--color-text-secondary)", border: "0.5px solid var(--color-border-tertiary)",
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function RecipeDetail({ recipe }) {
  const [tab, setTab] = useState("steps");
  return (
    <div style={{ padding: "24px", borderRadius: 14, background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
        <div>
          <span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>{recipe.category}</span>
          <h2 style={{ margin: "4px 0 6px", fontSize: 22, fontWeight: 500 }}>{recipe.title}</h2>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", paddingTop: 4 }}>
          <span style={{
            fontSize: 12, padding: "3px 10px", borderRadius: 20, fontWeight: 500,
            background: DIFFICULTY_BG[recipe.difficulty], color: DIFFICULTIES[recipe.difficulty],
          }}>{recipe.difficulty}</span>
          <span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>⏱ {recipe.time}</span>
        </div>
      </div>
      <p style={{ margin: "0 0 20px", color: "var(--color-text-secondary)", fontSize: 14, lineHeight: 1.6 }}>
        {recipe.description}
      </p>

      <div style={{ display: "flex", gap: 4, marginBottom: 18, borderBottom: "0.5px solid var(--color-border-tertiary)", paddingBottom: 0 }}>
        {["steps", "code", "concept"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: "8px 16px", border: "none", background: "none", cursor: "pointer",
              fontSize: 14, fontWeight: tab === t ? 500 : 400,
              color: tab === t ? "var(--color-text-primary)" : "var(--color-text-secondary)",
              borderBottom: tab === t ? "2px solid #185FA5" : "2px solid transparent",
              marginBottom: -1, transition: "all 0.12s",
            }}
          >
            {t === "steps" ? "Pipeline Steps" : t === "code" ? "Code" : "Concept"}
          </button>
        ))}
      </div>
      
      {tab === "steps" && <StepFlow steps={recipe.steps} />}
      {tab === "code" && <CodeBlock code={recipe.code} />}
      {tab === "concept" && <ContentViewer content={recipe.concept} />}
    </div>
  );
}

function Sidebar({ recipes, selected, onSelect, category, setCategory, search, setSearch }) {
  const filtered = recipes.filter((r) => {
    const matchCat = category === "All" || r.category === category;
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 0 }}>
      <div style={{ padding: "0 0 16px" }}>
        <input
          type="text"
          placeholder="Search recipes…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%", boxSizing: "border-box", padding: "8px 12px",
            borderRadius: 8, border: "0.5px solid var(--color-border-secondary)",
            background: "var(--color-background-secondary)",
            color: "var(--color-text-primary)", fontSize: 13,
          }}
        />
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            style={{
              padding: "4px 12px", borderRadius: 20, fontSize: 12, cursor: "pointer",
              border: category === c ? "1.5px solid #185FA5" : "0.5px solid var(--color-border-tertiary)",
              background: category === c ? "#E6F1FB" : "var(--color-background-primary)",
              color: category === c ? "#185FA5" : "var(--color-text-secondary)",
              fontWeight: category === c ? 500 : 400,
            }}
          >
            {c}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, overflowY: "auto", flex: 1 }}>
        {filtered.length === 0 ? (
          <div style={{ color: "var(--color-text-tertiary)", fontSize: 13, padding: "12px 0" }}>No recipes found.</div>
        ) : filtered.map((r) => (
          <RecipeCard key={r.id} recipe={r} onSelect={onSelect} selected={selected?.id === r.id} />
        ))}
      </div>
    </div>
  );
}

function Header() {
  return (
    <div style={{
      padding: "20px 32px 16px",
      borderBottom: "0.5px solid var(--color-border-tertiary)",
      display: "flex", alignItems: "center", gap: 16,
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: "#E6F1FB", display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 20,
      }}>
        📚
      </div>
      <div>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 500, letterSpacing: "-0.3px" }}>AgenticAI Cookbook</h1>
        <p style={{ margin: 0, fontSize: 13, color: "var(--color-text-secondary)" }}>
          End-to-end Agentic AI   </p>
      </div>
      <div style={{ marginLeft: "auto", display: "flex", gap: 20 }}>
        {[
          { label: "Recipes", value: AgenticAICookbook.length },
          { label: "Patterns", value: CATEGORIES.length - 1 },
        ].map(({ label, value }) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 18, fontWeight: 500 }}>{value}</div>
            <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState(AgenticAICookbook[0]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  return (
    <div style={{
      display: "flex", flexDirection: "column",
      height: "100vh", fontFamily: "var(--font-sans, system-ui, sans-serif)",
      // background: "var(--color-background-tertiary, radial-gradient(circle at top, #0f172a, #020617);)",
      background: "var(--color-background-tertiary, radial-gradient(circle at top, #0f172a, #020617);)",
      color: "var(--color-text-primary)",
    }}>
      <Header />
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <div style={{
          width: 320, minWidth: 260, padding: "20px 20px",
          borderRight: "0.5px solid var(--color-border-tertiary)",
          background: "var(--color-background-primary)",
          overflowY: "auto",
        }}>
          <Sidebar
            recipes={AgenticAICookbook}
            selected={selected}
            onSelect={setSelected}
            category={category}
            setCategory={setCategory}
            search={search}
            setSearch={setSearch}
          />
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          {selected ? (
            <RecipeDetail recipe={selected} />
          ) : (
            <div style={{ color: "var(--color-text-tertiary)", padding: 40, textAlign: "center" }}>
              Select a recipe to get started
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
