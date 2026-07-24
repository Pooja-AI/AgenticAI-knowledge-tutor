import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
            { label: "Recipes", value: AgentComponents.length },
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
    const [selected, setSelected] = useState(AgentComponents[0]);
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
            recipes={AgentComponents}
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
