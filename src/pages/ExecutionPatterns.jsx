import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Sequential from "../assets/docs/ExecutionPatterns/Sequential.md?raw";
import Parallel from "../assets/docs/ExecutionPatterns/Parallel.md?raw";
import Pipeline from "../assets/docs/ExecutionPatterns/Pipeline.md?raw";
import FanOutFanIn from "../assets/docs/ExecutionPatterns/FanOutFanIn.md?raw";
import MapReduce from "../assets/docs/ExecutionPatterns/MapReduce.md?raw";
import Router from "../assets/docs/ExecutionPatterns/Router.md?raw";
import ReflectionLoop from "../assets/docs/ExecutionPatterns/ReflectionLoop.md?raw";
import RetryPattern from "../assets/docs/ExecutionPatterns/RetryPattern.md?raw";
import FallbackPattern from "../assets/docs/ExecutionPatterns/FallbackPattern.md?raw";
import HumanInTheLoop from "../assets/docs/ExecutionPatterns/HumanInTheLoop.md?raw";

const ExecutionPatterns=[
    {
  id: "sequential",
  category: "Execution Patterns",
  title: "Sequential",
  difficulty: "Beginner",
  time: "~10 min",
  description:
    "Learn how AI agents execute tasks one after another in a predefined order.",

  tags: [
    "sequential",
    "workflow",
    "execution",
    "pipeline",
    "agent"
  ],

  concept: Sequential,

  steps: [
    {
      label: "Receive Task",
      icon: "📥",
      detail: "Accept the overall objective."
    },
    {
      label: "Execute Step 1",
      icon: "1️⃣",
      detail: "Complete the first task."
    },
    {
      label: "Execute Step 2",
      icon: "2️⃣",
      detail: "Proceed only after the previous step finishes."
    },
    {
      label: "Continue",
      icon: "➡️",
      detail: "Repeat until every task is completed."
    },
    {
      label: "Return Result",
      icon: "✅",
      detail: "Produce the final output."
    }
  ],

  code: ""
},
{
  id: "parallel",
  category: "Execution Patterns",
  title: "Parallel",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how AI agents execute multiple independent tasks simultaneously to reduce execution time.",

  tags: [
    "parallel",
    "concurrency",
    "execution",
    "multi-agent",
    "workflow"
  ],

  concept: Parallel,

  steps: [
    {
      label: "Split Tasks",
      icon: "🧩",
      detail: "Identify independent tasks."
    },
    {
      label: "Execute Concurrently",
      icon: "⚡",
      detail: "Run tasks simultaneously."
    },
    {
      label: "Monitor",
      icon: "👀",
      detail: "Track task completion."
    },
    {
      label: "Merge Results",
      icon: "📊",
      detail: "Collect outputs."
    },
    {
      label: "Return",
      icon: "🚀",
      detail: "Deliver the combined result."
    }
  ],

  code: ""
},
{
  id: "pipeline",
  category: "Execution Patterns",
  title: "Pipeline",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Understand pipeline execution where the output of one stage becomes the input of the next stage.",

  tags: [
    "pipeline",
    "workflow",
    "stages",
    "processing",
    "execution"
  ],

  concept: Pipeline,

  steps: [
    {
      label: "Input",
      icon: "📥",
      detail: "Receive raw input."
    },
    {
      label: "Stage Processing",
      icon: "⚙️",
      detail: "Execute each processing stage."
    },
    {
      label: "Transfer",
      icon: "➡️",
      detail: "Pass output to the next stage."
    },
    {
      label: "Validate",
      icon: "✔️",
      detail: "Ensure quality between stages."
    },
    {
      label: "Output",
      icon: "📤",
      detail: "Generate the final result."
    }
  ],

  code: ""
},
{
  id: "fan-out-fan-in",
  category: "Execution Patterns",
  title: "Fan-Out/Fan-In",
  difficulty: "Advanced",
  time: "~15 min",
  description:
    "Learn how tasks are distributed across multiple workers and later aggregated into one result.",

  tags: [
    "fan out",
    "fan in",
    "parallel",
    "aggregation",
    "agents"
  ],

  concept: FanOutFanIn,

  steps: [
    {
      label: "Receive Task",
      icon: "📥",
      detail: "Accept the overall request."
    },
    {
      label: "Fan-Out",
      icon: "🌐",
      detail: "Distribute subtasks to workers."
    },
    {
      label: "Parallel Execution",
      icon: "⚡",
      detail: "Workers execute independently."
    },
    {
      label: "Fan-In",
      icon: "🧩",
      detail: "Collect all outputs."
    },
    {
      label: "Finalize",
      icon: "✅",
      detail: "Return the merged result."
    }
  ],

  code: ""
},
{
  id: "map-reduce",
  category: "Execution Patterns",
  title: "Map Reduce",
  difficulty: "Advanced",
  time: "~15 min",
  description:
    "Understand how large workloads are divided into map tasks and combined using reduce operations.",

  tags: [
    "map reduce",
    "distributed",
    "parallel",
    "big data",
    "execution"
  ],

  concept: MapReduce,

  steps: [
    {
      label: "Split Data",
      icon: "📂",
      detail: "Partition the dataset."
    },
    {
      label: "Map",
      icon: "🗺️",
      detail: "Process each partition independently."
    },
    {
      label: "Shuffle",
      icon: "🔄",
      detail: "Group intermediate results."
    },
    {
      label: "Reduce",
      icon: "📊",
      detail: "Aggregate processed outputs."
    },
    {
      label: "Return",
      icon: "🏁",
      detail: "Produce the final result."
    }
  ],

  code: ""
},
{
  id: "router",
  category: "Execution Patterns",
  title: "Router",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how Router patterns direct requests to the most appropriate AI agent or workflow.",

  tags: [
    "router",
    "routing",
    "workflow",
    "agents",
    "decision"
  ],

  concept: Router,

  steps: [
    {
      label: "Receive Request",
      icon: "📩",
      detail: "Accept the incoming task."
    },
    {
      label: "Analyze",
      icon: "🔍",
      detail: "Determine task type."
    },
    {
      label: "Select Route",
      icon: "🧭",
      detail: "Choose the best agent."
    },
    {
      label: "Execute",
      icon: "⚙️",
      detail: "Run the selected workflow."
    },
    {
      label: "Respond",
      icon: "📤",
      detail: "Return the generated output."
    }
  ],

  code: ""
},
{
  id: "reflection-loop",
  category: "Execution Patterns",
  title: "Reflection Loop",
  difficulty: "Advanced",
  time: "~15 min",
  description:
    "Learn how AI agents repeatedly evaluate and improve their own outputs before producing the final response.",

  tags: [
    "reflection",
    "loop",
    "self review",
    "reasoning",
    "agents"
  ],

  concept: ReflectionLoop,

  steps: [
    {
      label: "Generate",
      icon: "✨",
      detail: "Produce an initial response."
    },
    {
      label: "Evaluate",
      icon: "🔍",
      detail: "Review the generated output."
    },
    {
      label: "Improve",
      icon: "🛠️",
      detail: "Correct identified issues."
    },
    {
      label: "Repeat",
      icon: "🔄",
      detail: "Continue until quality is acceptable."
    },
    {
      label: "Deliver",
      icon: "🚀",
      detail: "Return the refined result."
    }
  ],

  code: ""
},
{
  id: "retry-pattern",
  category: "Execution Patterns",
  title: "Retry Pattern",
  difficulty: "Intermediate",
  time: "~10 min",
  description:
    "Understand how AI agents automatically retry failed operations before reporting an error.",

  tags: [
    "retry",
    "resilience",
    "workflow",
    "fault tolerance",
    "execution"
  ],

  concept: RetryPattern,

  steps: [
    {
      label: "Execute",
      icon: "▶️",
      detail: "Perform the operation."
    },
    {
      label: "Failure?",
      icon: "❓",
      detail: "Detect execution failure."
    },
    {
      label: "Retry",
      icon: "🔄",
      detail: "Attempt execution again."
    },
    {
      label: "Success Check",
      icon: "✔️",
      detail: "Verify completion."
    },
    {
      label: "Complete",
      icon: "🏁",
      detail: "Return success or final error."
    }
  ],

  code: ""
},
{
  id: "fallback-pattern",
  category: "Execution Patterns",
  title: "Fallback Pattern",
  difficulty: "Intermediate",
  time: "~10 min",
  description:
    "Learn how AI systems switch to backup strategies when the primary execution path fails.",

  tags: [
    "fallback",
    "backup",
    "resilience",
    "workflow",
    "agents"
  ],

  concept: FallbackPattern,

  steps: [
    {
      label: "Primary Execution",
      icon: "🚀",
      detail: "Attempt the preferred solution."
    },
    {
      label: "Detect Failure",
      icon: "⚠️",
      detail: "Identify unsuccessful execution."
    },
    {
      label: "Fallback",
      icon: "🔁",
      detail: "Switch to an alternative strategy."
    },
    {
      label: "Validate",
      icon: "✔️",
      detail: "Verify fallback success."
    },
    {
      label: "Return",
      icon: "📤",
      detail: "Deliver the best available result."
    }
  ],

  code: ""
},
{
  id: "human-in-the-loop",
  category: "Execution Patterns",
  title: "Human-in-the-Loop",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how AI agents collaborate with humans by requesting approval, feedback, or decisions during execution.",

  tags: [
    "human in the loop",
    "approval",
    "feedback",
    "governance",
    "agents"
  ],

  concept: HumanInTheLoop,

  steps: [
    {
      label: "Generate Output",
      icon: "🤖",
      detail: "AI prepares a proposed solution."
    },
    {
      label: "Request Review",
      icon: "🙋",
      detail: "Send the result to a human reviewer."
    },
    {
      label: "Receive Feedback",
      icon: "💬",
      detail: "Collect approval or corrections."
    },
    {
      label: "Update",
      icon: "✏️",
      detail: "Modify the output if needed."
    },
    {
      label: "Finalize",
      icon: "✅",
      detail: "Deliver the approved result."
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
            { label: "Recipes", value: ExecutionPatterns.length },
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
    const [selected, setSelected] = useState(ExecutionPatterns[0]);
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
            recipes={ExecutionPatterns}
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
