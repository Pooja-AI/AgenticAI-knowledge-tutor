import CookbookApp from "../components/CookbookApp"; 

import LLM from "../assets/docs/AgentComponents/LLM.md?raw";
import Prompt from "../assets/docs/AgentComponents/Prompt.md?raw";
import SystemPrompt from "../assets/docs/AgentComponents/SystemPrompt.md?raw";
import MemoryModule from "../assets/docs/AgentComponents/MemoryModule.md?raw";
import Planner from "../assets/docs/AgentComponents/Planner.md?raw";
import Executor from "../assets/docs/AgentComponents/Executor.md?raw";
import ToolManager from "../assets/docs/AgentComponents/ToolManager.md?raw";
import Retriever from "../assets/docs/AgentComponents/Retriever.md?raw";
import KnowledgeBase from "../assets/docs/AgentComponents/KnowledgeBase.md?raw";
import OutputGenerator from "../assets/docs/AgentComponents/OutputGenerator.md?raw";

const AgentComponents=[
    {
  id: "llm",
  category: "Agent Components",
  title: "LLM",
  difficulty: "Beginner",
  time: "~15 min",
  description:
    "Learn how Large Language Models act as the reasoning engine of AI agents by understanding instructions, planning actions, and generating intelligent responses.",

  tags: ["llm", "language model", "gpt", "agent", "reasoning"],

  concept: LLM,

  steps: [
    {
      label: "Receive Prompt",
      icon: "📥",
      detail: "Accept instructions, user queries, and contextual information."
    },
    {
      label: "Understand Context",
      icon: "🧠",
      detail: "Interpret the prompt using learned language knowledge."
    },
    {
      label: "Reason",
      icon: "💡",
      detail: "Perform reasoning, planning, or decision making."
    },
    {
      label: "Generate Tokens",
      icon: "⚙️",
      detail: "Predict the next tokens sequentially."
    },
    {
      label: "Return Response",
      icon: "✅",
      detail: "Produce the final natural language output."
    }
  ],

  code: ""
},
{
  id: "prompt",
  category: "Agent Components",
  title: "Prompt",
  difficulty: "Beginner",
  time: "~10 min",
  description:
    "Learn how prompts guide AI agents by providing instructions, questions, and contextual information for reasoning.",

  tags: ["prompt", "instruction", "llm", "agent"],

  concept: Prompt,

  steps: [
    {
      label: "Write Prompt",
      icon: "✍️",
      detail: "Create clear instructions for the model."
    },
    {
      label: "Add Context",
      icon: "📚",
      detail: "Include relevant background information."
    },
    {
      label: "Send to LLM",
      icon: "📤",
      detail: "Pass the prompt to the language model."
    },
    {
      label: "Model Processes",
      icon: "🧠",
      detail: "The LLM interprets the prompt."
    },
    {
      label: "Generate Response",
      icon: "✅",
      detail: "Produce the requested output."
    }
  ],

  code: ""
},
{
  id: "system-prompt",
  category: "Agent Components",
  title: "System Prompt",
  difficulty: "Beginner",
  time: "~12 min",
  description:
    "Learn how system prompts define the behavior, personality, and rules that guide an AI agent throughout a conversation.",

  tags: ["system prompt", "prompt engineering", "llm", "agent"],

  concept: SystemPrompt,

  steps: [
    {
      label: "Define Role",
      icon: "👤",
      detail: "Specify the AI's identity and responsibilities."
    },
    {
      label: "Set Rules",
      icon: "📜",
      detail: "Provide constraints and policies."
    },
    {
      label: "Guide Behavior",
      icon: "🎯",
      detail: "Control tone, style, and objectives."
    },
    {
      label: "Apply Globally",
      icon: "🌐",
      detail: "Use the instructions across the conversation."
    },
    {
      label: "Generate Responses",
      icon: "✅",
      detail: "Respond according to system instructions."
    }
  ],

  code: ""
},


{
  id: "memory-module",
  category: "Agent Components",
  title: "Memory Module",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how AI agents store, retrieve, and manage information across interactions using memory modules.",

  tags: ["memory", "agent", "context", "state"],

  concept: MemoryModule,

  steps: [
    {
      label: "Store Information",
      icon: "💾",
      detail: "Save conversation or knowledge."
    },
    {
      label: "Retrieve Memory",
      icon: "🔍",
      detail: "Find relevant past information."
    },
    {
      label: "Update Memory",
      icon: "♻️",
      detail: "Refresh stored information."
    },
    {
      label: "Inject Context",
      icon: "📚",
      detail: "Provide memory to the LLM."
    },
    {
      label: "Continue Task",
      icon: "✅",
      detail: "Maintain long-term context."
    }
  ],

  code: ""
},
{
  id: "planner",
  category: "Agent Components",
  title: "Planner",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how planners break complex goals into executable tasks for AI agents.",

  tags: ["planner", "planning", "agent", "workflow"],

  concept: Planner,

  steps: [
    {
      label: "Receive Goal",
      icon: "🎯",
      detail: "Understand the user's objective."
    },
    {
      label: "Analyze Task",
      icon: "🧠",
      detail: "Determine required actions."
    },
    {
      label: "Create Plan",
      icon: "📝",
      detail: "Generate an execution strategy."
    },
    {
      label: "Prioritize Tasks",
      icon: "📌",
      detail: "Order tasks logically."
    },
    {
      label: "Send to Executor",
      icon: "✅",
      detail: "Pass the plan for execution."
    }
  ],

  code: ""
},
{
  id: "executor",
  category: "Agent Components",
  title: "Executor",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how the Executor performs tasks generated by the planner using tools and APIs.",

  tags: ["executor", "execution", "agent", "workflow"],

  concept: Executor,

  steps: [
    {
      label: "Receive Plan",
      icon: "📥",
      detail: "Accept tasks from the planner."
    },
    {
      label: "Invoke Tools",
      icon: "🛠️",
      detail: "Execute APIs, databases, or functions."
    },
    {
      label: "Collect Results",
      icon: "📊",
      detail: "Gather outputs from execution."
    },
    {
      label: "Validate Output",
      icon: "✔️",
      detail: "Check execution success."
    },
    {
      label: "Return Results",
      icon: "✅",
      detail: "Provide results to the agent."
    }
  ],

  code: ""
},
{
  id: "tool-manager",
  category: "Agent Components",
  title: "Tool Manager",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how Tool Managers select, invoke, and manage external tools for AI agents.",

  tags: ["tool manager", "tools", "agent", "apis"],

  concept: ToolManager,

  steps: [
    {
      label: "Identify Need",
      icon: "🔍",
      detail: "Determine whether a tool is required."
    },
    {
      label: "Select Tool",
      icon: "🛠️",
      detail: "Choose the appropriate tool."
    },
    {
      label: "Execute Tool",
      icon: "⚙️",
      detail: "Invoke APIs or functions."
    },
    {
      label: "Collect Output",
      icon: "📥",
      detail: "Receive tool results."
    },
    {
      label: "Return Results",
      icon: "✅",
      detail: "Provide outputs to the agent."
    }
  ],

  code: ""
},
{
  id: "retriever",
  category: "Agent Components",
  title: "Retriever",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how retrievers fetch relevant knowledge from vector databases, search engines, or document stores.",

  tags: ["retriever", "rag", "vector search", "knowledge"],

  concept: Retriever,

  steps: [
    {
      label: "Receive Query",
      icon: "❓",
      detail: "Accept the search request."
    },
    {
      label: "Search Knowledge",
      icon: "🔎",
      detail: "Search indexed documents."
    },
    {
      label: "Rank Results",
      icon: "📈",
      detail: "Order results by relevance."
    },
    {
      label: "Retrieve Context",
      icon: "📚",
      detail: "Return the best matching documents."
    },
    {
      label: "Send to LLM",
      icon: "✅",
      detail: "Provide retrieved context for reasoning."
    }
  ],

  code: ""
},
{
  id: "knowledge-base",
  category: "Agent Components",
  title: "Knowledge Base",
  difficulty: "Beginner",
  time: "~12 min",
  description:
    "Learn how knowledge bases store structured and unstructured information that AI agents use for reasoning.",

  tags: ["knowledge base", "documents", "rag", "storage"],

  concept: KnowledgeBase,

  steps: [
    {
      label: "Store Knowledge",
      icon: "📚",
      detail: "Save documents and structured data."
    },
    {
      label: "Index Content",
      icon: "📑",
      detail: "Organize information for retrieval."
    },
    {
      label: "Search Data",
      icon: "🔍",
      detail: "Locate relevant information."
    },
    {
      label: "Retrieve Results",
      icon: "📥",
      detail: "Return matching content."
    },
    {
      label: "Support Agents",
      icon: "✅",
      detail: "Provide knowledge during reasoning."
    }
  ],

  code: ""
},
{
  id: "output-generator",
  category: "Agent Components",
  title: "Output Generator",
  difficulty: "Beginner",
  time: "~10 min",
  description:
    "Learn how AI agents convert reasoning and execution results into clear, structured, and user-friendly responses.",

  tags: ["output", "response", "generation", "agent"],

  concept: OutputGenerator,

  steps: [
    {
      label: "Receive Results",
      icon: "📥",
      detail: "Collect outputs from reasoning and tools."
    },
    {
      label: "Format Response",
      icon: "📝",
      detail: "Structure information for readability."
    },
    {
      label: "Apply Style",
      icon: "🎨",
      detail: "Follow tone and formatting guidelines."
    },
    {
      label: "Validate Output",
      icon: "✔️",
      detail: "Check for completeness and correctness."
    },
    {
      label: "Deliver Response",
      icon: "✅",
      detail: "Present the final answer to the user."
    }
  ],

  code: ""
},

];

export default function CWDPage() { 
  return ( 
    <CookbookApp 
      data={AgentComponents}
      title="AgentComponents Cookbook" 
      subtitle="Complete Workflow Design" 
      icon="🧩" 
      patternLabel="Topics" 
    /> 
  ); 
}