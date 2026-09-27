import CookbookApp from "../components/CookbookApp"; 

import WorkingMemory from "../assets/docs/Memory/WorkingMemory.md?raw";
import ShortTermMemory from "../assets/docs/Memory/ShortTermMemory.md?raw";
import LongTermMemory from "../assets/docs/Memory/LongTermMemory.md?raw";
import EpisodicMemory from "../assets/docs/Memory/EpisodicMemory.md?raw";
import SemanticMemory from "../assets/docs/Memory/SemanticMemory.md?raw";
import ProceduralMemory from "../assets/docs/Memory/ProceduralMemory.md?raw";
import VectorMemory from "../assets/docs/Memory/VectorMemory.md?raw";
import MemoryCompression from "../assets/docs/Memory/MemoryCompression.md?raw";
import MemoryRetrieval from "../assets/docs/Memory/MemoryRetrieval.md?raw";
import MemoryManagement from "../assets/docs/Memory/MemoryManagement.md?raw";

const AgenticAIMemory = [

    {
  id: "working-memory",
  category: "Memory",
  title: "Working Memory",
  difficulty: "Beginner",
  time: "~12 min",
  description:
    "Learn how AI Agents temporarily store and process information while performing reasoning and task execution.",

  tags: ["working memory", "memory", "reasoning", "context", "agent"],

  concept: WorkingMemory,

  steps: [
    {
      label: "Purpose",
      icon: "🧠",
      detail: "Understand the role of working memory during task execution."
    },
    {
      label: "Store Context",
      icon: "📥",
      detail: "Temporarily retain important information."
    },
    {
      label: "Reasoning",
      icon: "💡",
      detail: "Use stored context for decision making."
    },
    {
      label: "Update Memory",
      icon: "🔄",
      detail: "Continuously update information during execution."
    },
    {
      label: "Discard",
      icon: "🗑️",
      detail: "Remove temporary information after completion."
    }
  ],

  code: ""
},

{
  id: "short-term-memory",
  category: "Memory",
  title: "Short-Term Memory",
  difficulty: "Beginner",
  time: "~12 min",
  description:
    "Understand how AI Agents retain recent interactions and contextual information within a conversation.",

  tags: ["short-term memory", "context", "conversation", "memory"],

  concept: ShortTermMemory,

  steps: [
    {
      label: "Capture Context",
      icon: "📝",
      detail: "Store recent user interactions."
    },
    {
      label: "Maintain Session",
      icon: "💬",
      detail: "Preserve conversation continuity."
    },
    {
      label: "Access Memory",
      icon: "📂",
      detail: "Retrieve recent context when needed."
    },
    {
      label: "Refresh",
      icon: "🔄",
      detail: "Update stored session information."
    },
    {
      label: "Expire",
      icon: "⌛",
      detail: "Remove outdated session data."
    }
  ],

  code:""
},

{
  id: "long-term-memory",
  category: "Memory",
  title: "Long-Term Memory",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how AI Agents persist knowledge across sessions for long-term learning and personalization.",

  tags: ["long-term memory", "persistent memory", "knowledge"],

  concept: LongTermMemory,

  steps: [
    {
      label: "Store Knowledge",
      icon: "📚",
      detail: "Persist important information."
    },
    {
      label: "Organize",
      icon: "🗂️",
      detail: "Categorize stored memories."
    },
    {
      label: "Retrieve",
      icon: "🔍",
      detail: "Access relevant memories."
    },
    {
      label: "Update",
      icon: "✏️",
      detail: "Modify stored information."
    },
    {
      label: "Reuse",
      icon: "♻️",
      detail: "Apply memories in future tasks."
    }
  ],

  code: ""
},

{
  id: "episodic-memory",
  category: "Memory",
  title: "Episodic Memory",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Understand how AI Agents remember past events, conversations, and execution histories.",

  tags: ["episodic memory", "events", "history", "memory"],

  concept: EpisodicMemory,

  steps: [
    {
      label: "Capture Events",
      icon: "📸",
      detail: "Record important interactions."
    },
    {
      label: "Store Timeline",
      icon: "🗓️",
      detail: "Maintain chronological history."
    },
    {
      label: "Retrieve Episodes",
      icon: "📖",
      detail: "Recall previous experiences."
    },
    {
      label: "Learn",
      icon: "🎓",
      detail: "Improve future decisions."
    },
    {
      label: "Apply",
      icon: "🚀",
      detail: "Use past experiences in new tasks."
    }
  ],

  code: ""
},

{
  id: "semantic-memory",
  category: "Memory",
  title: "Semantic Memory",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how AI Agents store facts, concepts, and domain knowledge independently of specific events.",

  tags: ["semantic memory", "knowledge", "facts"],

  concept: SemanticMemory,

  steps: [
    {
      label: "Capture Facts",
      icon: "📖",
      detail: "Store structured knowledge."
    },
    {
      label: "Organize",
      icon: "🗂️",
      detail: "Classify concepts and entities."
    },
    {
      label: "Retrieve",
      icon: "🔍",
      detail: "Access relevant facts."
    },
    {
      label: "Update",
      icon: "✏️",
      detail: "Maintain accurate knowledge."
    },
    {
      label: "Reason",
      icon: "🧠",
      detail: "Support intelligent decision making."
    }
  ],

  code: ""
},

{
  id: "procedural-memory",
  category: "Memory",
  title: "Procedural Memory",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Understand how AI Agents remember workflows, procedures, and execution patterns.",

  tags: ["procedural memory", "workflow", "execution"],

  concept: ProceduralMemory,

  steps: [
    {
      label: "Learn Procedure",
      icon: "📋",
      detail: "Capture execution workflows."
    },
    {
      label: "Store Pattern",
      icon: "🧩",
      detail: "Remember repeated actions."
    },
    {
      label: "Reuse",
      icon: "♻️",
      detail: "Apply learned procedures."
    },
    {
      label: "Optimize",
      icon: "⚡",
      detail: "Improve execution efficiency."
    },
    {
      label: "Automate",
      icon: "🤖",
      detail: "Execute procedures automatically."
    }
  ],

  code: ""
},

{
  id: "vector-memory",
  category: "Memory",
  title: "Vector Memory",
  difficulty: "Advanced",
  time: "~18 min",
  description:
    "Learn how embeddings and vector databases enable semantic memory retrieval in AI Agents.",

  tags: ["vector memory", "embeddings", "vector database"],

  concept: VectorMemory,

  steps: [
    {
      label: "Generate Embeddings",
      icon: "🔢",
      detail: "Convert information into vectors."
    },
    {
      label: "Store Vectors",
      icon: "💾",
      detail: "Persist embeddings in vector databases."
    },
    {
      label: "Similarity Search",
      icon: "🔍",
      detail: "Find semantically related information."
    },
    {
      label: "Retrieve",
      icon: "📂",
      detail: "Return relevant memories."
    },
    {
      label: "Use Context",
      icon: "🧠",
      detail: "Enhance reasoning using retrieved memories."
    }
  ],

  code: ""
},

{
  id: "memory-compression",
  category: "Memory",
  title: "Memory Compression",
  difficulty: "Advanced",
  time: "~15 min",
  description:
    "Learn techniques for reducing memory size while preserving important information.",

  tags: ["compression", "memory optimization"],

  concept: MemoryCompression,

  steps: [
    {
      label: "Analyze Memory",
      icon: "📊",
      detail: "Evaluate stored information."
    },
    {
      label: "Summarize",
      icon: "📝",
      detail: "Compress redundant content."
    },
    {
      label: "Retain Essentials",
      icon: "⭐",
      detail: "Keep important knowledge."
    },
    {
      label: "Store",
      icon: "💾",
      detail: "Persist compressed memory."
    },
    {
      label: "Expand",
      icon: "📂",
      detail: "Recover detailed context when required."
    }
  ],

  code: ""
},

{
  id: "memory-retrieval",
  category: "Memory",
  title: "Memory Retrieval",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Understand how AI Agents locate and retrieve the most relevant memories for reasoning and task execution.",

  tags: ["retrieval", "memory search", "context"],

  concept: MemoryRetrieval,

  steps: [
    {
      label: "Receive Query",
      icon: "❓",
      detail: "Accept retrieval request."
    },
    {
      label: "Search Memory",
      icon: "🔍",
      detail: "Locate relevant information."
    },
    {
      label: "Rank Results",
      icon: "📊",
      detail: "Prioritize retrieved memories."
    },
    {
      label: "Return Context",
      icon: "📄",
      detail: "Provide the most relevant memories."
    },
    {
      label: "Support Reasoning",
      icon: "🧠",
      detail: "Use retrieved context for decision making."
    }
  ],

  code: ""
},

{
  id: "memory-management",
  category: "Memory",
  title: "Memory Management",
  difficulty: "Advanced",
  time: "~18 min",
  description:
    "Learn strategies for organizing, updating, securing, and optimizing AI Agent memory throughout its lifecycle.",

  tags: ["memory management", "optimization", "governance"],

  concept: MemoryManagement,

  steps: [
    {
      label: "Store",
      icon: "💾",
      detail: "Persist useful memories."
    },
    {
      label: "Organize",
      icon: "🗂️",
      detail: "Categorize and index memory."
    },
    {
      label: "Update",
      icon: "✏️",
      detail: "Modify outdated information."
    },
    {
      label: "Delete",
      icon: "🗑️",
      detail: "Remove obsolete memories."
    },
    {
      label: "Optimize",
      icon: "⚡",
      detail: "Maintain efficient memory usage."
    }
  ],

  code: ""
},

];

export default function CWDPage() { 
  return ( 
    <CookbookApp 
      data={AgenticAIMemory}
      title="AgenticAIMemory Cookbook" 
      subtitle="Complete Workflow Design" 
      icon="🧩" 
      patternLabel="Topics" 
    /> 
  ); 
}