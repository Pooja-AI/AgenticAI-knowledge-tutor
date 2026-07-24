import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
              { label: "Recipes", value: AgenticAIMemory.length },
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
      const [selected, setSelected] = useState(AgenticAIMemory[0]);
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
                recipes={AgenticAIMemory}
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
    