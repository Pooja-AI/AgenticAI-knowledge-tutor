import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import FunctionCalling from "../assets/docs/ToolUsage/FunctionCalling.md?raw";
import APIIntegration from "../assets/docs/ToolUsage/APIIntegration.md?raw";
import DatabaseAccess from "../assets/docs/ToolUsage/DatabaseAccess.md?raw";
import SearchEngines from "../assets/docs/ToolUsage/SearchEngines.md?raw";
import FileOperations from "../assets/docs/ToolUsage/FileOperations.md?raw";
import CodeExecution from "../assets/docs/ToolUsage/CodeExecution.md?raw";
import BrowserTools from "../assets/docs/ToolUsage/BrowserTools.md?raw";
import MCP from "../assets/docs/ToolUsage/MCP.md?raw";
import CustomTools from "../assets/docs/ToolUsage/CustomTools.md?raw";
import ToolSelectionStrategies from "../assets/docs/ToolUsage/ToolSelectionStrategies.md?raw";

const AgentToolUsage = [
    {
  id: "function-calling",
  category: "Tool Usage",
  title: "Function Calling",
  difficulty: "Beginner",
  time: "~12 min",
  description:
    "Learn how AI Agents invoke predefined functions to perform real-world actions and retrieve structured information.",

  tags: ["function calling", "tools", "api", "agent", "automation"],

  concept: FunctionCalling,

  steps: [
    {
      label: "Identify Function",
      icon: "🔍",
      detail: "Determine which function is required for the user's request."
    },
    {
      label: "Prepare Arguments",
      icon: "📝",
      detail: "Generate the parameters needed by the function."
    },
    {
      label: "Execute Function",
      icon: "⚡",
      detail: "Invoke the function with the generated arguments."
    },
    {
      label: "Receive Result",
      icon: "📥",
      detail: "Collect the structured output returned by the function."
    },
    {
      label: "Generate Response",
      icon: "🤖",
      detail: "Use the function output to produce the final response."
    }
  ],

  code: ""
},
{
  id: "api-integration",
  category: "Tool Usage",
  title: "API Integration",
  difficulty: "Beginner",
  time: "~12 min",
  description:
    "Learn how AI Agents communicate with external services through REST APIs to access live data and perform actions.",

  tags: ["api", "integration", "http", "rest", "agent"],

  concept: APIIntegration,

  steps: [
    {
      label: "Choose API",
      icon: "🌐",
      detail: "Select the appropriate external service."
    },
    {
      label: "Build Request",
      icon: "📦",
      detail: "Prepare the API endpoint and parameters."
    },
    {
      label: "Send Request",
      icon: "📤",
      detail: "Call the API using HTTP."
    },
    {
      label: "Receive Response",
      icon: "📥",
      detail: "Process the returned JSON or data."
    },
    {
      label: "Generate Output",
      icon: "🤖",
      detail: "Present the API results to the user."
    }
  ],

  code: ""
},
{
  id: "database-access",
  category: "Tool Usage",
  title: "Database Access",
  difficulty: "Beginner",
  time: "~12 min",
  description:
    "Learn how AI Agents retrieve, update, and manage structured information stored in databases.",

  tags: ["database", "sql", "query", "retrieval", "agent"],

  concept: DatabaseAccess,

  steps: [
    {
      label: "Understand Query",
      icon: "🧠",
      detail: "Interpret the user's data request."
    },
    {
      label: "Generate Query",
      icon: "📝",
      detail: "Create an SQL or database query."
    },
    {
      label: "Execute Query",
      icon: "⚡",
      detail: "Retrieve or modify database records."
    },
    {
      label: "Process Results",
      icon: "📊",
      detail: "Analyze the returned data."
    },
    {
      label: "Respond",
      icon: "🤖",
      detail: "Generate a natural language response."
    }
  ],

  code: ""
},
{
  id: "search-engines",
  category: "Tool Usage",
  title: "Search Engines",
  difficulty: "Beginner",
  time: "~12 min",
  description:
    "Learn how AI Agents search the web or enterprise knowledge sources to retrieve relevant information.",

  tags: ["search", "retrieval", "web", "knowledge", "agent"],

  concept: SearchEngines,

  steps: [
    {
      label: "Create Query",
      icon: "🔎",
      detail: "Convert the user's request into a search query."
    },
    {
      label: "Search Sources",
      icon: "🌍",
      detail: "Search web pages or enterprise repositories."
    },
    {
      label: "Retrieve Results",
      icon: "📚",
      detail: "Collect relevant documents."
    },
    {
      label: "Rank Results",
      icon: "⭐",
      detail: "Identify the most useful information."
    },
    {
      label: "Generate Answer",
      icon: "🤖",
      detail: "Use retrieved content to answer the question."
    }
  ],

  code: ""
},
{
  id: "file-operations",
  category: "Tool Usage",
  title: "File Operations",
  difficulty: "Beginner",
  time: "~12 min",
  description:
    "Learn how AI Agents create, read, update, delete, and organize files for document automation.",

  tags: ["files", "documents", "storage", "automation", "agent"],

  concept: FileOperations,

  steps: [
    {
      label: "Locate File",
      icon: "📁",
      detail: "Identify the target file."
    },
    {
      label: "Choose Operation",
      icon: "⚙️",
      detail: "Determine whether to read, write, update, or delete."
    },
    {
      label: "Execute",
      icon: "⚡",
      detail: "Perform the requested file operation."
    },
    {
      label: "Verify",
      icon: "✅",
      detail: "Ensure the operation completed successfully."
    },
    {
      label: "Return Result",
      icon: "📤",
      detail: "Provide the outcome to the user."
    }
  ],

  code: ""
},
{
  id: "code-execution",
  category: "Tool Usage",
  title: "Code Execution",
  difficulty: "Beginner",
  time: "~12 min",
  description:
    "Learn how AI Agents execute code to perform calculations, process data, and automate programming tasks.",

  tags: ["python", "execution", "coding", "automation", "agent"],

  concept: CodeExecution,

  steps: [
    {
      label: "Generate Code",
      icon: "💻",
      detail: "Create executable code for the task."
    },
    {
      label: "Run Code",
      icon: "▶️",
      detail: "Execute the program in a safe environment."
    },
    {
      label: "Capture Output",
      icon: "📥",
      detail: "Collect execution results."
    },
    {
      label: "Handle Errors",
      icon: "⚠️",
      detail: "Detect and report execution issues."
    },
    {
      label: "Present Results",
      icon: "🤖",
      detail: "Explain the execution outcome."
    }
  ],

  code: ""
},
{
  id: "browser-tools",
  category: "Tool Usage",
  title: "Browser Tools",
  difficulty: "Beginner",
  time: "~12 min",
  description:
    "Learn how AI Agents interact with websites to search information, complete forms, and automate web tasks.",

  tags: ["browser", "web", "automation", "selenium", "agent"],

  concept: BrowserTools,

  steps: [
    {
      label: "Open Browser",
      icon: "🌐",
      detail: "Launch the browser session."
    },
    {
      label: "Navigate",
      icon: "🧭",
      detail: "Visit the required webpage."
    },
    {
      label: "Interact",
      icon: "🖱️",
      detail: "Click, type, or select webpage elements."
    },
    {
      label: "Extract Data",
      icon: "📄",
      detail: "Retrieve the required information."
    },
    {
      label: "Respond",
      icon: "🤖",
      detail: "Generate the final answer."
    }
  ],

  code: ""
},
{
  id: "mcp",
  category: "Tool Usage",
  title: "Model Context Protocol (MCP)",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how MCP standardizes communication between AI Agents and external tools, resources, and services.",

  tags: ["mcp", "protocol", "tools", "integration", "agent"],

  concept: MCP,

  steps: [
    {
      label: "Discover Tools",
      icon: "🔍",
      detail: "Identify available MCP tools and resources."
    },
    {
      label: "Connect",
      icon: "🔗",
      detail: "Establish communication with an MCP server."
    },
    {
      label: "Invoke Tool",
      icon: "⚡",
      detail: "Execute the selected tool."
    },
    {
      label: "Receive Data",
      icon: "📥",
      detail: "Collect results from the server."
    },
    {
      label: "Generate Response",
      icon: "🤖",
      detail: "Use the returned information in the final answer."
    }
  ],

  code: ""
},
{
  id: "custom-tools",
  category: "Tool Usage",
  title: "Custom Tools",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how developers build custom tools that allow AI Agents to perform organization-specific tasks.",

  tags: ["custom tools", "enterprise", "automation", "functions", "agent"],

  concept: CustomTools,

  steps: [
    {
      label: "Define Tool",
      icon: "🛠️",
      detail: "Create a custom function or service."
    },
    {
      label: "Register Tool",
      icon: "📋",
      detail: "Expose the tool to the AI Agent."
    },
    {
      label: "Execute",
      icon: "⚡",
      detail: "Run the tool with user inputs."
    },
    {
      label: "Process Result",
      icon: "📊",
      detail: "Handle the returned output."
    },
    {
      label: "Respond",
      icon: "🤖",
      detail: "Generate the final response."
    }
  ],

  code: ""
},
{
  id: "tool-selection-strategies",
  category: "Tool Usage",
  title: "Tool Selection Strategies",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how AI Agents intelligently select the best tool based on user intent, context, cost, and performance.",

  tags: ["tool selection", "reasoning", "decision", "routing", "agent"],

  concept: ToolSelectionStrategies,

  steps: [
    {
      label: "Analyze Intent",
      icon: "🧠",
      detail: "Understand the user's objective."
    },
    {
      label: "Evaluate Tools",
      icon: "🔍",
      detail: "Identify available tools for the task."
    },
    {
      label: "Select Tool",
      icon: "🎯",
      detail: "Choose the most suitable tool."
    },
    {
      label: "Execute",
      icon: "⚡",
      detail: "Run the selected tool."
    },
    {
      label: "Return Response",
      icon: "🤖",
      detail: "Generate the final answer using the tool output."
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
              { label: "Recipes", value: AgentToolUsage.length },
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
      const [selected, setSelected] = useState(AgentToolUsage[0]);
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
                recipes={AgentToolUsage}
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
    