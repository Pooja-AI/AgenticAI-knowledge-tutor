import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ConstraintPlanning from "../assets/docs/Planning/ConstraintPlanning.md?raw";
import DynamicPlanning from "../assets/docs/Planning/DynamicPlanning.md?raw";
import GoalPlanning from "../assets/docs/Planning/GoalPlanning.md?raw";
import HierarchicalPlanning from "../assets/docs/Planning/HierarchicalPlanning.md?raw";
import ParallelPlanning from "../assets/docs/Planning/ParallelPlanning.md?raw";
import PlanAndExecute from "../assets/docs/Planning/PlanAndExecute.md?raw";
import ReactivePlanning from "../assets/docs/Planning/ReactivePlanning.md?raw";
import Replanning from "../assets/docs/Planning/Replanning.md?raw";
import TaskDecomposition from "../assets/docs/Planning/TaskDecomposition.md?raw";
import WorkflowPlanning from "../assets/docs/Planning/WorkflowPlanning.md?raw";


const AgenticAIPlanning = [

    {
  id: "goal-planning",
  category: "Planning",
  title: "Goal Planning",
  difficulty: "Beginner",
  time: "~12 min",
  description:
    "Learn how AI Agents define objectives, prioritize goals, and generate execution strategies to accomplish desired outcomes.",

  tags: [
    "goal planning",
    "planning",
    "objectives",
    "agentic ai",
    "reasoning"
  ],

  concept: GoalPlanning,

  steps: [
    {
      label: "Goal Definition",
      icon: "🎯",
      detail: "Understand how AI Agents identify and define user objectives."
    },
    {
      label: "Goal Prioritization",
      icon: "📌",
      detail: "Learn how agents prioritize multiple competing goals."
    },
    {
      label: "Planning Strategy",
      icon: "📝",
      detail: "Explore techniques for generating execution plans."
    },
    {
      label: "Execution",
      icon: "⚙️",
      detail: "Understand how plans are executed step-by-step."
    },
    {
      label: "Monitoring",
      icon: "📊",
      detail: "Track progress and validate whether goals are achieved."
    }
  ],

  code: ""
},
{
  id: "task-decomposition",
  category: "Planning",
  title: "Task Decomposition",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how complex tasks are divided into smaller executable subtasks.",

  tags: [
    "task decomposition",
    "planning",
    "workflow",
    "agentic ai"
  ],

  concept: TaskDecomposition,

  steps: [
    {
      label: "Analyze Task",
      icon: "🔍",
      detail: "Understand the overall objective."
    },
    {
      label: "Break into Subtasks",
      icon: "🧩",
      detail: "Split large problems into manageable units."
    },
    {
      label: "Identify Dependencies",
      icon: "🔗",
      detail: "Determine relationships among subtasks."
    },
    {
      label: "Execute Tasks",
      icon: "⚙️",
      detail: "Execute each subtask individually."
    },
    {
      label: "Combine Results",
      icon: "✅",
      detail: "Merge outputs into the final solution."
    }
  ],

  code: ""
},

{
  id: "hierarchical-planning",
  category: "Planning",
  title: "Hierarchical Planning",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how high-level goals are recursively decomposed into executable plans.",

  tags: [
    "hierarchical planning",
    "planning",
    "agent hierarchy"
  ],

  concept: HierarchicalPlanning,

  steps: [
    {
      label: "High-Level Goal",
      icon: "🎯",
      detail: "Define the primary objective."
    },
    {
      label: "Sub Goals",
      icon: "🏗️",
      detail: "Break goals into smaller objectives."
    },
    {
      label: "Low-Level Tasks",
      icon: "🧩",
      detail: "Generate executable tasks."
    },
    {
      label: "Execution",
      icon: "⚙️",
      detail: "Execute plans from top to bottom."
    },
    {
      label: "Validation",
      icon: "✅",
      detail: "Ensure every level meets its objective."
    }
  ],

  code: ""
},

{
  id: "workflow-planning",
  category: "Planning",
  title: "Workflow Planning",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how AI Agents organize tasks into structured workflows.",

  tags: [
    "workflow",
    "planning",
    "automation"
  ],

  concept: WorkflowPlanning,

  steps: [
    {
      label: "Identify Workflow",
      icon: "📋",
      detail: "Understand the overall business process."
    },
    {
      label: "Arrange Tasks",
      icon: "🔄",
      detail: "Sequence tasks logically."
    },
    {
      label: "Dependencies",
      icon: "🔗",
      detail: "Identify prerequisite tasks."
    },
    {
      label: "Execute Workflow",
      icon: "⚙️",
      detail: "Run the workflow step-by-step."
    },
    {
      label: "Monitor",
      icon: "📊",
      detail: "Track workflow progress."
    }
  ],

  code: ""
},

{
  id: "plan-and-execute",
  category: "Planning",
  title: "Plan and Execute",
  difficulty: "Intermediate",
  time: "~18 min",
  description:
    "Learn how AI Agents first create a complete plan before executing it.",

  tags: [
    "plan and execute",
    "planning",
    "execution"
  ],

  concept: PlanAndExecute,

  steps: [
    {
      label: "Receive Goal",
      icon: "🎯",
      detail: "Accept the user request."
    },
    {
      label: "Generate Plan",
      icon: "📝",
      detail: "Create a complete execution strategy."
    },
    {
      label: "Execute Steps",
      icon: "⚙️",
      detail: "Execute each task sequentially."
    },
    {
      label: "Collect Results",
      icon: "📦",
      detail: "Gather outputs."
    },
    {
      label: "Deliver Response",
      icon: "✅",
      detail: "Return the final result."
    }
  ],

  code: ""
},

{
  id: "reactive-planning",
  category: "Planning",
  title: "Reactive Planning",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how AI Agents adapt their plans in response to changing conditions.",

  tags: [
    "reactive planning",
    "dynamic",
    "adaptation"
  ],

  concept: ReactivePlanning,

  steps: [
    {
      label: "Monitor Environment",
      icon: "👀",
      detail: "Observe new information continuously."
    },
    {
      label: "Detect Changes",
      icon: "⚠️",
      detail: "Identify unexpected events."
    },
    {
      label: "Adjust Plan",
      icon: "🔄",
      detail: "Modify execution strategy."
    },
    {
      label: "Continue Execution",
      icon: "⚙️",
      detail: "Resume with the updated plan."
    },
    {
      label: "Complete Goal",
      icon: "✅",
      detail: "Finish the task successfully."
    }
  ],

  code: ""
},

{
  id: "dynamic-planning",
  category: "Planning",
  title: "Dynamic Planning",
  difficulty: "Advanced",
  time: "~18 min",
  description:
    "Learn how AI Agents continuously optimize plans during execution.",

  tags: [
    "dynamic planning",
    "adaptive planning",
    "optimization"
  ],

  concept: DynamicPlanning,

  steps: [
    {
      label: "Create Initial Plan",
      icon: "📝",
      detail: "Generate an execution plan."
    },
    {
      label: "Evaluate Progress",
      icon: "📊",
      detail: "Assess execution status."
    },
    {
      label: "Optimize Plan",
      icon: "⚡",
      detail: "Improve task ordering and decisions."
    },
    {
      label: "Execute Updates",
      icon: "⚙️",
      detail: "Continue with optimized actions."
    },
    {
      label: "Finish Goal",
      icon: "🏁",
      detail: "Deliver the completed objective."
    }
  ],

  code: ""
},

{
  id: "constraint-planning",
  category: "Planning",
  title: "Constraint Planning",
  difficulty: "Advanced",
  time: "~18 min",
  description:
    "Learn how AI Agents generate plans while satisfying predefined constraints.",

  tags: [
    "constraints",
    "optimization",
    "planning"
  ],

  concept: ConstraintPlanning,

  steps: [
    {
      label: "Identify Constraints",
      icon: "📏",
      detail: "Recognize business and resource limits."
    },
    {
      label: "Generate Plan",
      icon: "📝",
      detail: "Create a constraint-aware strategy."
    },
    {
      label: "Validate Rules",
      icon: "✔️",
      detail: "Ensure every action satisfies constraints."
    },
    {
      label: "Execute",
      icon: "⚙️",
      detail: "Run the validated plan."
    },
    {
      label: "Review",
      icon: "📊",
      detail: "Confirm successful execution."
    }
  ],

  code: ""
},

{
  id: "parallel-planning",
  category: "Planning",
  title: "Parallel Planning",
  difficulty: "Advanced",
  time: "~18 min",
  description:
    "Learn how independent tasks execute simultaneously for improved efficiency.",

  tags: [
    "parallel planning",
    "concurrency",
    "optimization"
  ],

  concept: ParallelPlanning,

  steps: [
    {
      label: "Identify Parallel Tasks",
      icon: "🔍",
      detail: "Find independent subtasks."
    },
    {
      label: "Schedule Execution",
      icon: "📋",
      detail: "Assign tasks for concurrent execution."
    },
    {
      label: "Execute Concurrently",
      icon: "🚀",
      detail: "Run multiple tasks simultaneously."
    },
    {
      label: "Synchronize",
      icon: "🔄",
      detail: "Combine parallel outputs."
    },
    {
      label: "Deliver Result",
      icon: "✅",
      detail: "Produce the final response."
    }
  ],

  code: ""
},
{
  id: "replanning",
  category: "Planning",
  title: "Replanning",
  difficulty: "Advanced",
  time: "~18 min",
  description:
    "Learn how AI Agents recover from failures by generating new execution plans.",

  tags: [
    "replanning",
    "adaptive planning",
    "recovery"
  ],

  concept: Replanning,

  steps: [
    {
      label: "Detect Failure",
      icon: "⚠️",
      detail: "Identify unsuccessful execution."
    },
    {
      label: "Analyze Cause",
      icon: "🔍",
      detail: "Determine why the plan failed."
    },
    {
      label: "Generate New Plan",
      icon: "📝",
      detail: "Create an alternative strategy."
    },
    {
      label: "Resume Execution",
      icon: "⚙️",
      detail: "Continue with the updated plan."
    },
    {
      label: "Achieve Goal",
      icon: "🏁",
      detail: "Successfully complete the objective."
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
              { label: "Recipes", value: AgenticAIPlanning.length },
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
      const [selected, setSelected] = useState(AgenticAIPlanning[0]);
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
                recipes={AgenticAIPlanning}
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
    