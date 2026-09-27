import CookbookApp from "../components/CookbookApp"; 

import LangChain from "../assets/docs/AgentFrameworks/LangChain.md?raw";
import LangGraph from "../assets/docs/AgentFrameworks/LangGraph.md?raw";
import CrewAI from "../assets/docs/AgentFrameworks/crewai.md?raw";
import AutoGen from "../assets/docs/AgentFrameworks/autogen.md?raw";
import SemanticKernel from "../assets/docs/AgentFrameworks/semantic-kernel.md?raw";
import LlamaIndex from "../assets/docs/AgentFrameworks/llamaindex.md?raw";
import Haystack from "../assets/docs/AgentFrameworks/haystack.md?raw";
import PydanticAI from "../assets/docs/AgentFrameworks/pydantic-ai.md?raw";
import OpenAIAgentsSDK from "../assets/docs/AgentFrameworks/openai-agents-sdk.md?raw";
import GoogleADK from "../assets/docs/AgentFrameworks/google-adk.md?raw";



const AgentFrameworks=[ 
{
  id: "langchain",
  category: "Frameworks",
  title: "LangChain",
  difficulty: "Beginner",
  time: "~10 min",
  description:
    "Learn how LangChain helps developers build LLM-powered applications using prompts, chains, memory, tools, agents, and retrieval workflows.",

  tags: [
    "langchain",
    "llm",
    "chains",
    "agents",
    "memory",
    "rag",
    "framework"
  ],

  concept: LangChain,

  steps: [
    {
      label: "Create LLM",
      icon: "🤖",
      detail: "Initialize a language model provider and configure model settings."
    },
    {
      label: "Build Prompts",
      icon: "📝",
      detail: "Create reusable prompt templates for interacting with the model."
    },
    {
      label: "Compose Chains",
      icon: "🔗",
      detail: "Combine prompts, models, parsers, and tools into execution pipelines."
    },
    {
      label: "Use Memory",
      icon: "🧠",
      detail: "Maintain conversation history and contextual information."
    },
    {
      label: "Add Tools",
      icon: "🛠️",
      detail: "Allow the LLM to call external APIs, databases, or functions."
    },
    {
      label: "Execute Workflow",
      icon: "▶️",
      detail: "Run the chain and generate responses for user requests."
    }
  ],

  code: ""
},

{
  id: "langgraph",
  category: "Frameworks",
  title: "LangGraph",
  difficulty: "Intermediate",
  time: "~10 min",
  description:
    "Learn how LangGraph builds stateful, multi-step AI agent workflows using graph-based execution.",

  tags: [
    "langgraph",
    "workflow",
    "graph",
    "agents",
    "state",
    "orchestration"
  ],

  concept: LangGraph,

  steps: [
    {
      label: "Define State",
      icon: "📦",
      detail: "Create a shared state object passed across workflow nodes."
    },
    {
      label: "Create Nodes",
      icon: "⚙️",
      detail: "Implement each agent or workflow step as a graph node."
    },
    {
      label: "Connect Nodes",
      icon: "🔗",
      detail: "Define edges that determine execution flow."
    },
    {
      label: "Handle Branching",
      icon: "🌿",
      detail: "Support conditional routing and dynamic execution paths."
    },
    {
      label: "Compile Graph",
      icon: "🏗️",
      detail: "Compile the graph into an executable workflow."
    },
    {
      label: "Run Workflow",
      icon: "▶️",
      detail: "Execute the graph while preserving state across nodes."
    }
  ],

  code: ""
},

{
  id: "crewai",
  category: "Frameworks",
  title: "CrewAI",
  difficulty: "Beginner",
  time: "~10 min",
  description:
    "Learn how CrewAI enables multiple AI agents to collaborate by assigning specialized roles and coordinated tasks.",

  tags: [
    "crewai",
    "agents",
    "multi-agent",
    "tasks",
    "workflow",
    "coordination"
  ],

  concept: CrewAI,

  steps: [
    {
      label: "Create Agents",
      icon: "🤖",
      detail: "Define specialized agents with unique roles and goals."
    },
    {
      label: "Assign Tasks",
      icon: "📋",
      detail: "Provide each agent with a dedicated responsibility."
    },
    {
      label: "Build Crew",
      icon: "👥",
      detail: "Combine agents into a collaborative team."
    },
    {
      label: "Coordinate Work",
      icon: "🔄",
      detail: "Enable agents to work together toward a common objective."
    },
    {
      label: "Execute Tasks",
      icon: "▶️",
      detail: "Run the crew and monitor task execution."
    },
    {
      label: "Collect Results",
      icon: "📊",
      detail: "Aggregate outputs from all participating agents."
    }
  ],

  code: ""
},

{
  id: "autogen",
  category: "Frameworks",
  title: "AutoGen",
  difficulty: "Intermediate",
  time: "~10 min",
  description:
    "Learn how AutoGen automates conversations between multiple AI agents to solve complex tasks collaboratively.",

  tags: [
    "autogen",
    "agents",
    "conversation",
    "multi-agent",
    "automation",
    "llm"
  ],

  concept: AutoGen,

  steps: [
    {
      label: "Create Agents",
      icon: "🤖",
      detail: "Initialize assistant and user agents."
    },
    {
      label: "Configure Roles",
      icon: "🎯",
      detail: "Assign responsibilities to each conversational agent."
    },
    {
      label: "Start Conversation",
      icon: "💬",
      detail: "Allow agents to exchange messages automatically."
    },
    {
      label: "Use Tools",
      icon: "🛠️",
      detail: "Enable agents to execute functions or external tools."
    },
    {
      label: "Complete Task",
      icon: "✅",
      detail: "Continue conversations until the objective is achieved."
    },
    {
      label: "Review Output",
      icon: "📄",
      detail: "Collect the final solution generated by the agent team."
    }
  ],

  code: ""
},

{
  id: "semantic-kernel",
  category: "Frameworks",
  title: "Semantic Kernel",
  difficulty: "Intermediate",
  time: "~10 min",
  description:
    "Learn how Semantic Kernel combines AI models with traditional code using skills, plugins, planners, and memory.",

  tags: [
    "semantic-kernel",
    "plugins",
    "planner",
    "memory",
    "skills",
    "ai"
  ],

  concept: SemanticKernel,

  steps: [
    {
      label: "Initialize Kernel",
      icon: "⚙️",
      detail: "Create the Semantic Kernel instance."
    },
    {
      label: "Register Plugins",
      icon: "🧩",
      detail: "Load AI skills and native functions."
    },
    {
      label: "Configure Memory",
      icon: "🧠",
      detail: "Store and retrieve contextual information."
    },
    {
      label: "Invoke Skills",
      icon: "✨",
      detail: "Execute semantic and native functions."
    },
    {
      label: "Plan Tasks",
      icon: "📋",
      detail: "Generate execution plans for complex objectives."
    },
    {
      label: "Produce Results",
      icon: "📄",
      detail: "Return the final AI-generated output."
    }
  ],

  code: ""
},

{
  id: "openai-agents-sdk",
  category: "Frameworks",
  title: "OpenAI Agents SDK",
  difficulty: "Intermediate",
  time: "~10 min",
  description:
    "Learn how OpenAI Agents SDK simplifies building AI agents with tools, memory, guardrails, and structured workflows.",

  tags: [
    "openai",
    "agents",
    "sdk",
    "tools",
    "workflow",
    "llm"
  ],

  concept: "OpenAI Agents SDK",

  steps: [
    {
      label: "Create Agent",
      icon: "🤖",
      detail: "Initialize an AI agent with instructions."
    },
    {
      label: "Add Tools",
      icon: "🛠️",
      detail: "Provide tools and external capabilities."
    },
    {
      label: "Configure Guardrails",
      icon: "🛡️",
      detail: "Define safety and validation rules."
    },
    {
      label: "Execute Tasks",
      icon: "▶️",
      detail: "Run the agent against user requests."
    },
    {
      label: "Track State",
      icon: "📦",
      detail: "Maintain context during execution."
    },
    {
      label: "Return Response",
      icon: "📄",
      detail: "Generate the final structured answer."
    }
  ],

  code: ""
},

{
  id: "llamaindex",
  category: "Frameworks",
  title: "LlamaIndex",
  difficulty: "Beginner",
  time: "~10 min",
  description:
    "Learn how LlamaIndex organizes, indexes, and retrieves enterprise data for Retrieval-Augmented Generation (RAG).",

  tags: [
    "llamaindex",
    "rag",
    "retrieval",
    "vector",
    "index",
    "documents"
  ],

  concept: LlamaIndex,

  steps: [
    {
      label: "Load Documents",
      icon: "📄",
      detail: "Import documents from various data sources."
    },
    {
      label: "Create Index",
      icon: "📚",
      detail: "Build searchable indexes over the data."
    },
    {
      label: "Store Embeddings",
      icon: "🧠",
      detail: "Generate embeddings for efficient retrieval."
    },
    {
      label: "Query Index",
      icon: "🔍",
      detail: "Retrieve the most relevant information."
    },
    {
      label: "Generate Answer",
      icon: "💬",
      detail: "Combine retrieved context with an LLM."
    },
    {
      label: "Return Response",
      icon: "✅",
      detail: "Provide accurate context-aware answers."
    }
  ],

  code: ""
},

{
  id: "haystack",
  category: "Frameworks",
  title: "Haystack",
  difficulty: "Intermediate",
  time: "~10 min",
  description:
    "Learn how Haystack builds search, retrieval, question-answering, and RAG pipelines for AI applications.",

  tags: [
    "haystack",
    "rag",
    "retrieval",
    "pipeline",
    "search",
    "qa"
  ],

  concept: Haystack,

  steps: [
    {
      label: "Load Data",
      icon: "📄",
      detail: "Import documents into the retrieval pipeline."
    },
    {
      label: "Index Content",
      icon: "📚",
      detail: "Store searchable document embeddings."
    },
    {
      label: "Retrieve Documents",
      icon: "🔍",
      detail: "Find relevant documents using retrievers."
    },
    {
      label: "Build Pipeline",
      icon: "🔗",
      detail: "Connect retrievers, prompts, and generators."
    },
    {
      label: "Generate Answers",
      icon: "💬",
      detail: "Use an LLM to answer user questions."
    },
    {
      label: "Optimize Results",
      icon: "⚙️",
      detail: "Improve retrieval quality and accuracy."
    }
  ],

  code: ""
},

{
  id: "pydantic-ai",
  category: "Frameworks",
  title: "Pydantic AI",
  difficulty: "Intermediate",
  time: "~10 min",
  description:
    "Learn how Pydantic AI creates reliable AI applications using type-safe inputs, outputs, validation, and structured responses.",

  tags: [
    "pydantic",
    "validation",
    "structured-output",
    "types",
    "ai",
    "framework"
  ],

  concept: "Pydantic AI",

  steps: [
    {
      label: "Define Models",
      icon: "📋",
      detail: "Create structured data models using Pydantic."
    },
    {
      label: "Validate Input",
      icon: "✔️",
      detail: "Ensure incoming data matches the schema."
    },
    {
      label: "Configure Agent",
      icon: "🤖",
      detail: "Initialize an AI agent with typed responses."
    },
    {
      label: "Generate Output",
      icon: "💬",
      detail: "Produce validated structured responses."
    },
    {
      label: "Handle Errors",
      icon: "⚠️",
      detail: "Detect validation failures and recover gracefully."
    },
    {
      label: "Return Results",
      icon: "📄",
      detail: "Deliver strongly typed outputs."
    }
  ],

  code: ""
},

{
  id: "google-adk",
  category: "Frameworks",
  title: "Google ADK",
  difficulty: "Intermediate",
  time: "~10 min",
  description:
    "Learn how Google Agent Development Kit (ADK) simplifies building, orchestrating, and deploying AI agents with tools and workflows.",

  tags: [
    "google",
    "adk",
    "agents",
    "workflow",
    "orchestration",
    "tools"
  ],

  concept: "Google ADK",

  steps: [
    {
      label: "Create Agent",
      icon: "🤖",
      detail: "Initialize an agent with goals and instructions."
    },
    {
      label: "Register Tools",
      icon: "🛠️",
      detail: "Connect APIs, functions, and external services."
    },
    {
      label: "Manage Context",
      icon: "🧠",
      detail: "Maintain conversation and execution state."
    },
    {
      label: "Execute Workflow",
      icon: "▶️",
      detail: "Coordinate tool calls and reasoning steps."
    },
    {
      label: "Observe Execution",
      icon: "📊",
      detail: "Track execution, logs, and agent decisions."
    },
    {
      label: "Deploy Agent",
      icon: "🚀",
      detail: "Publish the agent for production usage."
    }
  ],

  code: ""
}


];

export default function CWDPage() { 
  return ( 
    <CookbookApp 
      data={AgentFrameworks}
      title="AgentFrameworks Cookbook" 
      subtitle="Complete Workflow Design" 
      icon="🧩" 
      patternLabel="Topics" 
    /> 
  ); 
}