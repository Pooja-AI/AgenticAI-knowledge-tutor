import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import MultiAgentArchitecture from "../assets/docs/MultiAgent/MultiAgentArchitecture.md?raw";
import CoordinatorAgent from "../assets/docs/MultiAgent/CoordinatorAgent.md?raw";
import WorkerAgents from "../assets/docs/MultiAgent/WorkerAgents.md?raw";
import SupervisorAgent from "../assets/docs/MultiAgent/SupervisorAgent.md?raw";
import HierarchicalAgents from "../assets/docs/MultiAgent/HierarchicalAgents.md?raw";
import SwarmAgents from "../assets/docs/MultiAgent/SwarmAgents.md?raw";
import PeerToPeerAgents from "../assets/docs/MultiAgent/PeerToPeerAgents.md?raw";
import AgentCollaboration from "../assets/docs/MultiAgent/AgentCollaboration.md?raw";
import AgentNegotiation from "../assets/docs/MultiAgent/AgentNegotiation.md?raw";
import AgentConsensus from "../assets/docs/MultiAgent/AgentConsensus.md?raw";

const MultiAgent=[
    {
  id: "multi-agent-architecture",
  category: "Multi-Agent Systems",
  title: "Multi-Agent Architecture",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how multiple AI agents collaborate, communicate, and coordinate to solve complex tasks efficiently.",

  tags: [
    "multi agent",
    "architecture",
    "coordination",
    "agent systems",
    "collaboration"
  ],

  concept: MultiAgentArchitecture,

  steps: [
    {
      label: "Define Agents",
      icon: "🤖",
      detail: "Identify specialized agents for different responsibilities."
    },
    {
      label: "Communication",
      icon: "📡",
      detail: "Enable information exchange between agents."
    },
    {
      label: "Coordination",
      icon: "🎯",
      detail: "Assign tasks and synchronize execution."
    },
    {
      label: "Execution",
      icon: "⚙️",
      detail: "Agents perform assigned tasks independently."
    },
    {
      label: "Aggregation",
      icon: "📊",
      detail: "Combine outputs into a final solution."
    }
  ],

  code: ""
},

{
  id: "coordinator-agent",
  category: "Multi-Agent Systems",
  title: "Coordinator Agent",
  difficulty: "Beginner",
  time: "~12 min",
  description:
    "Understand how a Coordinator Agent distributes work, manages communication, and orchestrates multiple AI agents.",

  tags: [
    "coordinator",
    "orchestration",
    "task allocation",
    "workflow",
    "agents"
  ],

  concept: CoordinatorAgent,

  steps: [
    {
      label: "Receive Task",
      icon: "📥",
      detail: "Accept the user's request."
    },
    {
      label: "Split Tasks",
      icon: "🧩",
      detail: "Break work into smaller subtasks."
    },
    {
      label: "Assign Agents",
      icon: "🤝",
      detail: "Allocate subtasks to specialized agents."
    },
    {
      label: "Monitor",
      icon: "👀",
      detail: "Track execution progress."
    },
    {
      label: "Merge Results",
      icon: "📄",
      detail: "Combine outputs into one response."
    }
  ],

  code: ""
},

{
  id: "worker-agents",
  category: "Multi-Agent Systems",
  title: "Worker Agents",
  difficulty: "Beginner",
  time: "~10 min",
  description:
    "Learn how Worker Agents execute specialized tasks assigned by a coordinator or supervisor.",

  tags: [
    "worker agents",
    "execution",
    "specialization",
    "tasks",
    "multi-agent"
  ],

  concept: WorkerAgents,

  steps: [
    {
      label: "Receive Task",
      icon: "📩",
      detail: "Accept assigned work."
    },
    {
      label: "Process",
      icon: "⚙️",
      detail: "Perform specialized reasoning or tool execution."
    },
    {
      label: "Validate",
      icon: "✅",
      detail: "Verify task completion."
    },
    {
      label: "Return Result",
      icon: "📤",
      detail: "Send output back to coordinator."
    },
    {
      label: "Wait",
      icon: "⏳",
      detail: "Remain idle until the next assignment."
    }
  ],

  code: ""
},

{
  id: "supervisor-agent",
  category: "Multi-Agent Systems",
  title: "Supervisor Agent",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Explore how Supervisor Agents oversee execution, validate outputs, and maintain workflow quality.",

  tags: [
    "supervisor",
    "quality control",
    "validation",
    "monitoring",
    "agents"
  ],

  concept: SupervisorAgent,

  steps: [
    {
      label: "Observe",
      icon: "👁️",
      detail: "Monitor worker agent execution."
    },
    {
      label: "Review",
      icon: "📋",
      detail: "Evaluate generated outputs."
    },
    {
      label: "Detect Issues",
      icon: "⚠️",
      detail: "Identify failures or inconsistencies."
    },
    {
      label: "Correct",
      icon: "🔄",
      detail: "Trigger retries or improvements."
    },
    {
      label: "Approve",
      icon: "✔️",
      detail: "Approve final results."
    }
  ],

  code: ""
},

{
  id: "hierarchical-agents",
  category: "Multi-Agent Systems",
  title: "Hierarchical Agents",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Understand hierarchical agent structures where higher-level agents coordinate lower-level specialized agents.",

  tags: [
    "hierarchy",
    "manager",
    "worker",
    "coordination",
    "agents"
  ],

  concept: HierarchicalAgents,

  steps: [
    {
      label: "Top-Level Goal",
      icon: "🎯",
      detail: "Manager agent receives the objective."
    },
    {
      label: "Delegate",
      icon: "📤",
      detail: "Assign work to subordinate agents."
    },
    {
      label: "Execute",
      icon: "⚙️",
      detail: "Worker agents complete assigned tasks."
    },
    {
      label: "Review",
      icon: "📊",
      detail: "Manager evaluates outputs."
    },
    {
      label: "Deliver",
      icon: "📦",
      detail: "Return the integrated result."
    }
  ],

  code: ""
},

{
  id: "swarm-agents",
  category: "Multi-Agent Systems",
  title: "Swarm Agents",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how decentralized AI agents cooperate collectively without a central controller.",

  tags: [
    "swarm",
    "distributed",
    "collective",
    "coordination",
    "agents"
  ],

  concept: SwarmAgents,

  steps: [
    {
      label: "Shared Goal",
      icon: "🎯",
      detail: "All agents pursue a common objective."
    },
    {
      label: "Local Decisions",
      icon: "🧠",
      detail: "Each agent acts independently."
    },
    {
      label: "Communication",
      icon: "📡",
      detail: "Exchange local information."
    },
    {
      label: "Collective Behavior",
      icon: "🐝",
      detail: "Global intelligence emerges."
    },
    {
      label: "Goal Achieved",
      icon: "🏆",
      detail: "Complete the shared objective."
    }
  ],

  code: ""
},

{
  id: "peer-to-peer-agents",
  category: "Multi-Agent Systems",
  title: "Peer-to-Peer Agents",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Explore decentralized agent communication where every agent communicates as an equal without central control.",

  tags: [
    "peer to peer",
    "distributed",
    "communication",
    "decentralized",
    "agents"
  ],

  concept: PeerToPeerAgents,

  steps: [
    {
      label: "Discover Peers",
      icon: "🔍",
      detail: "Identify available agents."
    },
    {
      label: "Exchange Messages",
      icon: "💬",
      detail: "Communicate directly."
    },
    {
      label: "Share Knowledge",
      icon: "📚",
      detail: "Exchange intermediate results."
    },
    {
      label: "Coordinate",
      icon: "🤝",
      detail: "Collaboratively solve the task."
    },
    {
      label: "Finalize",
      icon: "✅",
      detail: "Produce the final outcome."
    }
  ],

  code: ""
},

{
  id: "agent-collaboration",
  category: "Multi-Agent Systems",
  title: "Agent Collaboration",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how AI agents cooperate, exchange knowledge, and jointly solve complex tasks.",

  tags: [
    "collaboration",
    "teamwork",
    "agents",
    "coordination",
    "communication"
  ],

  concept: AgentCollaboration,

  steps: [
    {
      label: "Share Goal",
      icon: "🎯",
      detail: "Establish a common objective."
    },
    {
      label: "Assign Roles",
      icon: "👥",
      detail: "Define responsibilities."
    },
    {
      label: "Communicate",
      icon: "📨",
      detail: "Exchange information."
    },
    {
      label: "Integrate",
      icon: "🧩",
      detail: "Combine intermediate outputs."
    },
    {
      label: "Deliver",
      icon: "🚀",
      detail: "Return the collaborative solution."
    }
  ],

  code: ""
},
{
  id: "agent-negotiation",
  category: "Multi-Agent Systems",
  title: "Agent Negotiation",
  difficulty: "Advanced",
  time: "~15 min",
  description:
    "Understand how AI agents negotiate resources, priorities, and decisions to achieve shared objectives.",

  tags: [
    "negotiation",
    "decision making",
    "coordination",
    "multi-agent",
    "consensus"
  ],

  concept: AgentNegotiation,

  steps: [
    {
      label: "Propose",
      icon: "💡",
      detail: "Suggest possible solutions."
    },
    {
      label: "Evaluate",
      icon: "⚖️",
      detail: "Assess proposals."
    },
    {
      label: "Negotiate",
      icon: "🤝",
      detail: "Resolve conflicts."
    },
    {
      label: "Agree",
      icon: "✅",
      detail: "Reach mutual agreement."
    },
    {
      label: "Execute",
      icon: "🚀",
      detail: "Implement the negotiated plan."
    }
  ],

  code: ""
},
{
  id: "agent-consensus",
  category: "Multi-Agent Systems",
  title: "Agent Consensus",
  difficulty: "Advanced",
  time: "~15 min",
  description:
    "Learn how multiple AI agents reach a common decision through voting, agreement, or consensus algorithms.",

  tags: [
    "consensus",
    "voting",
    "agreement",
    "decision",
    "multi-agent"
  ],

  concept: AgentConsensus,

  steps: [
    {
      label: "Collect Opinions",
      icon: "📝",
      detail: "Gather responses from all agents."
    },
    {
      label: "Compare",
      icon: "📊",
      detail: "Evaluate different viewpoints."
    },
    {
      label: "Vote",
      icon: "🗳️",
      detail: "Determine the preferred solution."
    },
    {
      label: "Consensus",
      icon: "🤝",
      detail: "Reach a common agreement."
    },
    {
      label: "Finalize",
      icon: "🏁",
      detail: "Publish the agreed result."
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
            { label: "Recipes", value: MultiAgent.length },
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
    const [selected, setSelected] = useState(MultiAgent[0]);
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
            recipes={MultiAgent}
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

