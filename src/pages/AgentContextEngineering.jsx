import CookbookApp from "../components/CookbookApp"; 

import ContextWindow from "../assets/docs/ContextEngineering/ContextWindow.md?raw";
import PromptContext from "../assets/docs/ContextEngineering/PromptContext.md?raw";
import ConversationContext from "../assets/docs/ContextEngineering/ConversationContext.md?raw";
import RetrievedContext from "../assets/docs/ContextEngineering/RetrievedContext.md?raw";
import ContextCompression from "../assets/docs/ContextEngineering/ContextCompression.md?raw";
import ContextRanking from "../assets/docs/ContextEngineering/ContextRanking.md?raw";
import ContextFiltering from "../assets/docs/ContextEngineering/ContextFiltering.md?raw";
import ContextFusion from "../assets/docs/ContextEngineering/ContextFusion.md?raw";
import ContextInjection from "../assets/docs/ContextEngineering/ContextInjection.md?raw";
import ContextOptimization from "../assets/docs/ContextEngineering/ContextOptimization.md?raw";

const AgentContextEngineering = [

    {
  id: "context-window",
  category: "Context Engineering",
  title: "Context Window",
  difficulty: "Beginner",
  time: "~15 min",
  description:
    "Learn how the Context Window determines the amount of information an AI model can process in a single interaction and how it impacts reasoning and response quality.",

  tags: [
    "context window",
    "tokens",
    "llm",
    "context",
    "prompt"
  ],

  concept: ContextWindow,

  steps: [
    {
      label: "Receive Input",
      icon: "📥",
      detail: "The model receives the user's prompt and available context."
    },
    {
      label: "Tokenize Content",
      icon: "🔤",
      detail: "The input is converted into tokens that fit within the context window."
    },
    {
      label: "Select Context",
      icon: "📚",
      detail: "Relevant information is retained while exceeding content is truncated."
    },
    {
      label: "Reason",
      icon: "🧠",
      detail: "The model performs reasoning using the available context."
    },
    {
      label: "Generate Response",
      icon: "✅",
      detail: "A response is generated using only the information within the context window."
    }
  ],

  code: ""
},
{
  id: "prompt-context",
  category: "Context Engineering",
  title: "Prompt Context",
  difficulty: "Beginner",
  time: "~15 min",
  description:
    "Learn how prompt context provides instructions, examples, and constraints that guide AI agent behavior.",

  tags: [
    "prompt",
    "context",
    "system prompt",
    "llm",
    "instruction"
  ],

  concept: PromptContext,

  steps: [
    {
      label: "Define Instructions",
      icon: "📝",
      detail: "Specify the objective and behavior for the AI model."
    },
    {
      label: "Add Constraints",
      icon: "📏",
      detail: "Provide rules and limitations for the response."
    },
    {
      label: "Include Examples",
      icon: "📖",
      detail: "Add demonstrations to improve model understanding."
    },
    {
      label: "Process Prompt",
      icon: "🧠",
      detail: "The model interprets the prompt and context."
    },
    {
      label: "Generate Output",
      icon: "✅",
      detail: "Produce responses aligned with the provided prompt context."
    }
  ],

  code: ""
},
{
  id: "conversation-context",
  category: "Context Engineering",
  title: "Conversation Context",
  difficulty: "Beginner",
  time: "~15 min",
  description:
    "Learn how AI agents maintain conversation history to generate coherent, context-aware responses across multiple interactions.",

  tags: [
    "conversation",
    "chat history",
    "memory",
    "context",
    "agent"
  ],

  concept: ConversationContext,

  steps: [
    {
      label: "Receive Message",
      icon: "💬",
      detail: "The user sends a new message."
    },
    {
      label: "Retrieve History",
      icon: "📜",
      detail: "Previous conversation history is retrieved."
    },
    {
      label: "Combine Context",
      icon: "🔗",
      detail: "Current message and history are merged."
    },
    {
      label: "Reason",
      icon: "🧠",
      detail: "The model understands the ongoing conversation."
    },
    {
      label: "Respond",
      icon: "✅",
      detail: "Generate a context-aware response."
    }
  ],

  code: ""
},
{
  id: "retrieved-context",
  category: "Context Engineering",
  title: "Retrieved Context",
  difficulty: "Intermediate",
  time: "~20 min",
  description:
    "Learn how retrieved context from external knowledge sources enhances AI responses with relevant information.",

  tags: [
    "rag",
    "retrieval",
    "context",
    "vector database",
    "knowledge"
  ],

  concept: RetrievedContext,

  steps: [
    {
      label: "Receive Query",
      icon: "❓",
      detail: "The agent receives a user query."
    },
    {
      label: "Retrieve Documents",
      icon: "🔍",
      detail: "Relevant information is fetched from the knowledge base."
    },
    {
      label: "Rank Results",
      icon: "📊",
      detail: "The most relevant documents are selected."
    },
    {
      label: "Inject Context",
      icon: "📚",
      detail: "Retrieved information is added to the prompt."
    },
    {
      label: "Generate Answer",
      icon: "✅",
      detail: "Produce a grounded response using retrieved knowledge."
    }
  ],

  code: ""
},
{
  id: "context-compression",
  category: "Context Engineering",
  title: "Context Compression",
  difficulty: "Intermediate",
  time: "~20 min",
  description:
    "Learn how context compression reduces token usage while preserving essential information for reasoning.",

  tags: [
    "compression",
    "tokens",
    "optimization",
    "summary",
    "context"
  ],

  concept: ContextCompression,

  steps: [
    {
      label: "Collect Context",
      icon: "📚",
      detail: "Gather all available contextual information."
    },
    {
      label: "Identify Key Information",
      icon: "🔍",
      detail: "Determine the most relevant facts."
    },
    {
      label: "Compress Content",
      icon: "🗜️",
      detail: "Summarize or remove redundant information."
    },
    {
      label: "Validate Context",
      icon: "✔️",
      detail: "Ensure important details are preserved."
    },
    {
      label: "Use Optimized Context",
      icon: "✅",
      detail: "Generate responses using compressed context."
    }
  ],

  code: ""
},
{
  id: "context-ranking",
  category: "Context Engineering",
  title: "Context Ranking",
  difficulty: "Intermediate",
  time: "~20 min",
  description:
    "Learn how Context Ranking prioritizes the most relevant information before passing it to an AI model, improving response quality and reducing unnecessary tokens.",

  tags: [
    "context ranking",
    "retrieval",
    "relevance",
    "rag",
    "ranking"
  ],

  concept: ContextRanking,

  steps: [
    {
      label: "Retrieve Context",
      icon: "📥",
      detail: "Retrieve multiple candidate documents or context chunks."
    },
    {
      label: "Calculate Relevance",
      icon: "📊",
      detail: "Score each context based on semantic similarity or relevance."
    },
    {
      label: "Sort Results",
      icon: "📋",
      detail: "Rank the contexts from highest to lowest relevance."
    },
    {
      label: "Select Top Results",
      icon: "⭐",
      detail: "Choose the highest-ranked context for the LLM."
    },
    {
      label: "Generate Response",
      icon: "✅",
      detail: "Produce an accurate response using the best-ranked context."
    }
  ],

  code: ""
},
{
  id: "context-filtering",
  category: "Context Engineering",
  title: "Context Filtering",
  difficulty: "Intermediate",
  time: "~20 min",
  description:
    "Learn how Context Filtering removes irrelevant, duplicate, or low-quality information before it reaches the AI model.",

  tags: [
    "context filtering",
    "filtering",
    "rag",
    "context",
    "retrieval"
  ],

  concept: ContextFiltering,

  steps: [
    {
      label: "Retrieve Context",
      icon: "📚",
      detail: "Collect all candidate documents or context."
    },
    {
      label: "Filter Noise",
      icon: "🚫",
      detail: "Remove irrelevant, duplicate, or outdated information."
    },
    {
      label: "Validate Context",
      icon: "✔️",
      detail: "Ensure the remaining context is accurate and relevant."
    },
    {
      label: "Prepare Prompt",
      icon: "📝",
      detail: "Build the prompt using the filtered context."
    },
    {
      label: "Generate Response",
      icon: "✅",
      detail: "Produce an answer using clean and relevant information."
    }
  ],

  code: ""
},
{
  id: "context-fusion",
  category: "Context Engineering",
  title: "Context Fusion",
  difficulty: "Advanced",
  time: "~25 min",
  description:
    "Learn how Context Fusion combines information from multiple sources into a unified context for better reasoning and decision-making.",

  tags: [
    "context fusion",
    "fusion",
    "multi-source",
    "rag",
    "knowledge"
  ],

  concept: ContextFusion,

  steps: [
    {
      label: "Retrieve Sources",
      icon: "📚",
      detail: "Retrieve relevant information from multiple knowledge sources."
    },
    {
      label: "Merge Information",
      icon: "🔗",
      detail: "Combine overlapping and complementary context."
    },
    {
      label: "Resolve Conflicts",
      icon: "⚖️",
      detail: "Identify and resolve inconsistent information."
    },
    {
      label: "Build Unified Context",
      icon: "🧠",
      detail: "Create a single coherent context for the AI model."
    },
    {
      label: "Generate Response",
      icon: "✅",
      detail: "Produce a comprehensive response using fused knowledge."
    }
  ],

  code: ""
},
{
  id: "context-injection",
  category: "Context Engineering",
  title: "Context Injection",
  difficulty: "Intermediate",
  time: "~20 min",
  description:
    "Learn how Context Injection inserts relevant information into prompts to improve AI reasoning, accuracy, and task performance.",

  tags: [
    "context injection",
    "prompt engineering",
    "rag",
    "llm",
    "context"
  ],

  concept: ContextInjection,

  steps: [
    {
      label: "Identify Context",
      icon: "🔍",
      detail: "Determine which information is needed for the current task."
    },
    {
      label: "Inject Context",
      icon: "📥",
      detail: "Insert the selected context into the prompt."
    },
    {
      label: "Combine Instructions",
      icon: "📝",
      detail: "Merge system instructions, user query, and injected context."
    },
    {
      label: "LLM Processing",
      icon: "🧠",
      detail: "The model reasons over the enriched prompt."
    },
    {
      label: "Generate Answer",
      icon: "✅",
      detail: "Return an accurate, context-aware response."
    }
  ],

  code: ""
},
{
  id: "context-optimization",
  category: "Context Engineering",
  title: "Context Optimization",
  difficulty: "Advanced",
  time: "~25 min",
  description:
    "Learn how Context Optimization improves the quality, relevance, and efficiency of context supplied to AI models while minimizing token usage.",

  tags: [
    "context optimization",
    "optimization",
    "tokens",
    "rag",
    "llm"
  ],

  concept: ContextOptimization,

  steps: [
    {
      label: "Collect Context",
      icon: "📚",
      detail: "Gather all available contextual information."
    },
    {
      label: "Analyze Quality",
      icon: "📊",
      detail: "Evaluate relevance, redundancy, and completeness."
    },
    {
      label: "Optimize Context",
      icon: "⚙️",
      detail: "Compress, rank, filter, and organize the context."
    },
    {
      label: "Construct Prompt",
      icon: "📝",
      detail: "Build an optimized prompt using high-quality context."
    },
    {
      label: "Generate Response",
      icon: "✅",
      detail: "Produce accurate and efficient responses with optimized context."
    }
  ],

  code: ""
},

];
export default function CWDPage() { 
  return ( 
    <CookbookApp 
      data={AgentContextEngineering}
      title="AgentContextEngineering Cookbook" 
      subtitle="Complete Workflow Design" 
      icon="🧩" 
      patternLabel="Topics" 
    /> 
  ); 
}