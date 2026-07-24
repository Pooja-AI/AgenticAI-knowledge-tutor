import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChainOfThought from "../assets/docs/ReasoningTechniques/ChainOfThought.md?raw";
import TreeOfThoughts from "../assets/docs/ReasoningTechniques/TreeOfThoughts.md?raw";
import GraphOfThoughts from "../assets/docs/ReasoningTechniques/GraphOfThoughts.md?raw";
import ReAct from "../assets/docs/ReasoningTechniques/ReAct.md?raw";
import SelfReflection from "../assets/docs/ReasoningTechniques/SelfReflection.md?raw";
import SelfConsistency from "../assets/docs/ReasoningTechniques/SelfConsistency.md?raw";
import Debate from "../assets/docs/ReasoningTechniques/Debate.md?raw";
import ProgramOfThoughts from "../assets/docs/ReasoningTechniques/ProgramOfThoughts.md?raw";
import LeastToMostPrompting from "../assets/docs/ReasoningTechniques/LeastToMostPrompting.md?raw";
import DeliberativeReasoning from "../assets/docs/ReasoningTechniques/DeliberativeReasoning.md?raw";

const AgentReasoingTechniques = [
{
  id: "chain-of-thought",
  category: "Reasoning Techniques",
  title: "Chain of Thought (CoT)",
  difficulty: "Beginner",
  time: "~15 min",
  description:
    "Learn how AI Agents solve complex problems by breaking reasoning into intermediate step-by-step thoughts before producing the final answer.",

  tags: ["cot", "chain of thought", "reasoning", "llm", "agent"],

  concept: ChainOfThought,

  steps: [
    {
      label: "Understand Problem",
      icon: "🧠",
      detail: "Analyze the user's question and identify the objective."
    },
    {
      label: "Break into Steps",
      icon: "📝",
      detail: "Divide the problem into smaller logical reasoning steps."
    },
    {
      label: "Reason Step-by-Step",
      icon: "💡",
      detail: "Solve each intermediate step sequentially."
    },
    {
      label: "Combine Results",
      icon: "🔗",
      detail: "Merge all intermediate reasoning into a complete solution."
    },
    {
      label: "Generate Answer",
      icon: "✅",
      detail: "Produce the final response based on the reasoning chain."
    }
  ],

  code: ""
},
{
  id: "tree-of-thoughts",
  category: "Reasoning Techniques",
  title: "Tree of Thoughts (ToT)",
  difficulty: "Intermediate",
  time: "~18 min",
  description:
    "Learn how AI Agents explore multiple reasoning paths simultaneously, evaluate different solutions, and select the most promising approach to solve complex problems.",

  tags: ["tree of thoughts", "tot", "reasoning", "search", "agent"],

  concept: TreeOfThoughts,

  steps: [
    {
      label: "Define Problem",
      icon: "🎯",
      detail: "Understand the problem and identify the objective."
    },
    {
      label: "Generate Branches",
      icon: "🌳",
      detail: "Create multiple possible reasoning paths or solution ideas."
    },
    {
      label: "Evaluate Paths",
      icon: "🔍",
      detail: "Assess each branch based on quality and feasibility."
    },
    {
      label: "Select Best Path",
      icon: "⭐",
      detail: "Choose the most promising reasoning branch."
    },
    {
      label: "Produce Answer",
      icon: "✅",
      detail: "Generate the final response using the selected reasoning path."
    }
  ],

  code: ""
},
{
  id: "graph-of-thoughts",
  category: "Reasoning Techniques",
  title: "Graph of Thoughts",
  difficulty: "Intermediate",
  time: "~18 min",
  description:
    "Learn how AI Agents connect multiple reasoning paths as a graph, allowing ideas to merge, branch, and interact for solving complex problems more effectively.",

  tags: ["graph of thoughts", "got", "reasoning", "graph", "agent"],

  concept: GraphOfThoughts,

  steps: [
    {
      label: "Define Problem",
      icon: "🎯",
      detail: "Understand the problem and identify the reasoning objective."
    },
    {
      label: "Create Thought Nodes",
      icon: "🟢",
      detail: "Represent individual ideas or reasoning steps as graph nodes."
    },
    {
      label: "Connect Thoughts",
      icon: "🔗",
      detail: "Build relationships between related reasoning paths."
    },
    {
      label: "Explore Graph",
      icon: "🕸️",
      detail: "Traverse multiple connected reasoning paths to discover better solutions."
    },
    {
      label: "Generate Answer",
      icon: "✅",
      detail: "Combine insights from the graph to produce the final response."
    }
  ],

  code: ""
},
{
  id: "react",
  category: "Reasoning Techniques",
  title: "ReAct (Reason + Act)",
  difficulty: "Intermediate",
  time: "~18 min",
  description:
    "Learn how AI Agents combine reasoning with actions by thinking step-by-step, using external tools, observing results, and refining responses to solve complex tasks.",

  tags: ["react", "reasoning", "tool usage", "agent", "reason + act"],

  concept: ReAct,

  steps: [
    {
      label: "Reason",
      icon: "🧠",
      detail: "Analyze the user's request and determine what information is needed."
    },
    {
      label: "Take Action",
      icon: "⚡",
      detail: "Invoke an external tool, API, database, or search engine."
    },
    {
      label: "Observe",
      icon: "👀",
      detail: "Collect and analyze the results returned by the tool."
    },
    {
      label: "Refine Reasoning",
      icon: "🔄",
      detail: "Use the observations to improve reasoning or perform additional actions."
    },
    {
      label: "Generate Answer",
      icon: "✅",
      detail: "Produce the final response using both reasoning and observed results."
    }
  ],

  code: ""
},
{
  id: "self-reflection",
  category: "Reasoning Techniques",
  title: "Self Reflection",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how AI Agents evaluate their own responses, identify mistakes, and improve the quality of answers through iterative self-review before delivering the final output.",

  tags: ["self reflection", "reflection", "reasoning", "evaluation", "agent"],

  concept: SelfReflection,

  steps: [
    {
      label: "Generate Answer",
      icon: "✍️",
      detail: "Produce an initial solution for the user's request."
    },
    {
      label: "Review Response",
      icon: "🔍",
      detail: "Analyze the generated answer for accuracy, completeness, and consistency."
    },
    {
      label: "Identify Issues",
      icon: "⚠️",
      detail: "Detect mistakes, missing information, or logical inconsistencies."
    },
    {
      label: "Refine Answer",
      icon: "🔄",
      detail: "Improve the response using insights from the self-review process."
    },
    {
      label: "Deliver Final Output",
      icon: "✅",
      detail: "Return the revised and higher-quality response to the user."
    }
  ],

  code: ""
},
{
  id: "self-consistency",
  category: "Reasoning Techniques",
  title: "Self Consistency",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how AI Agents generate multiple reasoning paths, compare their results, and select the most consistent answer to improve reliability and reduce reasoning errors.",

  tags: ["self consistency", "reasoning", "consensus", "voting", "agent"],

  concept: SelfConsistency,

  steps: [
    {
      label: "Generate Solutions",
      icon: "🧠",
      detail: "Produce multiple independent reasoning paths for the same problem."
    },
    {
      label: "Evaluate Results",
      icon: "🔍",
      detail: "Compare the answers generated from different reasoning paths."
    },
    {
      label: "Find Consensus",
      icon: "🤝",
      detail: "Identify the answer that appears most frequently or is best supported."
    },
    {
      label: "Validate Choice",
      icon: "✔️",
      detail: "Verify that the selected answer is logically consistent."
    },
    {
      label: "Return Final Answer",
      icon: "✅",
      detail: "Provide the most reliable answer based on consensus."
    }
  ],

  code: ""
},
{
  id: "debate",
  category: "Reasoning Techniques",
  title: "Debate",
  difficulty: "Intermediate",
  time: "~18 min",
  description:
    "Learn how multiple AI Agents or reasoning perspectives debate different solutions, evaluate competing arguments, and arrive at the most accurate and well-supported decision.",

  tags: ["debate", "multi-agent", "reasoning", "evaluation", "consensus"],

  concept: Debate,

  steps: [
    {
      label: "Generate Perspectives",
      icon: "💭",
      detail: "Create multiple viewpoints or candidate solutions for the problem."
    },
    {
      label: "Present Arguments",
      icon: "🗣️",
      detail: "Allow each reasoning path or agent to explain its approach."
    },
    {
      label: "Evaluate Evidence",
      icon: "⚖️",
      detail: "Compare arguments based on facts, logic, and supporting evidence."
    },
    {
      label: "Reach Consensus",
      icon: "🤝",
      detail: "Select the strongest solution after evaluating all perspectives."
    },
    {
      label: "Deliver Answer",
      icon: "✅",
      detail: "Generate the final response using the best-supported conclusion."
    }
  ],

  code: ""
},
{
  id: "program-of-thoughts",
  category: "Reasoning Techniques",
  title: "Program of Thoughts (PoT)",
  difficulty: "Intermediate",
  time: "~18 min",
  description:
    "Learn how AI Agents combine logical reasoning with program execution by generating executable code to solve computational and mathematical problems accurately.",

  tags: ["program of thoughts", "pot", "reasoning", "code execution", "agent"],

  concept: ProgramOfThoughts,

  steps: [
    {
      label: "Analyze Problem",
      icon: "🧠",
      detail: "Understand the problem and identify the required computation."
    },
    {
      label: "Generate Program",
      icon: "💻",
      detail: "Create executable code to solve the problem."
    },
    {
      label: "Execute Code",
      icon: "▶️",
      detail: "Run the generated program in a secure execution environment."
    },
    {
      label: "Validate Output",
      icon: "✔️",
      detail: "Verify the execution results for correctness and consistency."
    },
    {
      label: "Generate Answer",
      icon: "✅",
      detail: "Use the computed output to produce the final response."
    }
  ],

  code: ""
},
{
  id: "least-to-most-prompting",
  category: "Reasoning Techniques",
  title: "Least-to-Most Prompting",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how AI Agents solve complex problems by first completing simple subtasks and progressively building toward more difficult reasoning, improving accuracy and reliability.",

  tags: ["least-to-most", "prompting", "reasoning", "decomposition", "agent"],

  concept: LeastToMostPrompting,

  steps: [
    {
      label: "Break Down Task",
      icon: "🧩",
      detail: "Divide a complex problem into smaller and simpler subtasks."
    },
    {
      label: "Solve Simple Tasks",
      icon: "1️⃣",
      detail: "Complete the easiest subtasks first to build foundational knowledge."
    },
    {
      label: "Build on Results",
      icon: "📈",
      detail: "Use previous solutions as context for solving more complex subtasks."
    },
    {
      label: "Solve Complex Task",
      icon: "🧠",
      detail: "Combine intermediate results to solve the overall problem."
    },
    {
      label: "Generate Final Answer",
      icon: "✅",
      detail: "Produce the complete solution using the accumulated reasoning."
    }
  ],

  code: ""
},
{
  id: "deliberative-reasoning",
  category: "Reasoning Techniques",
  title: "Deliberative Reasoning",
  difficulty: "Advanced",
  time: "~20 min",
  description:
    "Learn how AI Agents carefully evaluate multiple alternatives, compare trade-offs, consider constraints, and select the optimal solution before taking action.",

  tags: ["deliberative reasoning", "reasoning", "planning", "decision making", "agent"],
  concept: DeliberativeReasoning,

  steps: [
    {
      label: "Understand Goal",
      icon: "🎯",
      detail: "Analyze the user's objective, available information, and constraints."
    },
    {
      label: "Generate Alternatives",
      icon: "🧩",
      detail: "Create multiple possible solutions or action plans."
    },
    {
      label: "Evaluate Trade-offs",
      icon: "⚖️",
      detail: "Compare alternatives based on cost, risk, accuracy, and expected outcomes."
    },
    {
      label: "Select Best Strategy",
      icon: "🏆",
      detail: "Choose the solution that best satisfies the objective and constraints."
    },
    {
      label: "Execute & Respond",
      icon: "✅",
      detail: "Apply the selected strategy and generate the final response."
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
            { label: "Recipes", value: AgentReasoingTechniques.length },
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
    const [selected, setSelected] = useState(AgentReasoingTechniques[0]);
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
            recipes={AgentReasoingTechniques}
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
