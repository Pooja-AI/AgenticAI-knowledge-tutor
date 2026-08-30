import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

const CATEGORIES = ["All", "Frameworks", "Advanced"];
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
            { label: "Recipes", value: AgentFrameworks.length },
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
    const [selected, setSelected] = useState(AgentFrameworks[0]);
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
            recipes={AgentObservability}
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
