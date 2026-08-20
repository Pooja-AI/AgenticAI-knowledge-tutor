import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import ReAct from "../assets/docs/AgentDesignPatterns/ReAct.md?raw";
import PlannerPattern from "../assets/docs/AgentDesignPatterns/PlannerPattern.md?raw";
import ReflectionPattern from "../assets/docs/AgentDesignPatterns/ReflectionPattern.md?raw";
import RouterPattern from "../assets/docs/AgentDesignPatterns/RouterPattern.md?raw";
import EvaluatorPattern from "../assets/docs/AgentDesignPatterns/EvaluatorPattern.md?raw";
import GeneratorReviewer from "../assets/docs/AgentDesignPatterns/GeneratorReviewer.md?raw";
import RAGAgent from "../assets/docs/AgentDesignPatterns/RAGAgent.md?raw";
import MultiAgentPattern from "../assets/docs/AgentDesignPatterns/MultiAgentPattern.md?raw";
import HumanInTheLoop from "../assets/docs/AgentDesignPatterns/HumanInTheLoop.md?raw";
import AutonomousAgentPattern from "../assets/docs/AgentDesignPatterns/AutonomousAgentPattern.md?raw";
const AgentDesignPatterns=[ 
    {
  id: "react-pattern",
  category: "Agent Design Patterns",
  title: "ReAct",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how the ReAct (Reasoning and Acting) pattern enables AI Agents to combine reasoning with tool usage by iteratively thinking, taking actions, observing results, and improving decisions.",

  tags: [
    "react",
    "reasoning",
    "action",
    "tool usage",
    "agent workflow",
    "llm",
    "design pattern"
  ],

  concept: "",

  steps: [
    {
      label: "Understand User Goal",
      icon: "🎯",
      detail:
        "Analyze the user request, identify the objective, and determine the information required to solve the task."
    },
    {
      label: "Reason About Problem",
      icon: "🧠",
      detail:
        "Evaluate the problem, decide possible approaches, and determine whether external tools or knowledge are required."
    },
    {
      label: "Select Action",
      icon: "⚡",
      detail:
        "Choose the appropriate action such as calling an API, searching information, querying databases, or generating content."
    },
    {
      label: "Execute Tool",
      icon: "🛠️",
      detail:
        "Interact with external tools and systems to gather information or perform required operations."
    },
    {
      label: "Observe Results",
      icon: "👀",
      detail:
        "Analyze tool outputs and update the understanding of the current task based on new information."
    },
    {
      label: "Generate Final Response",
      icon: "✅",
      detail:
        "Combine reasoning and observations to provide an accurate and context-aware final response."
    }
  ],

  code: ""
},
{
  id: "planner-pattern",
  category: "Agent Design Patterns",
  title: "Planner Pattern",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how the Planner Pattern enables AI Agents to break complex goals into smaller tasks, create execution strategies, and coordinate actions to achieve desired outcomes.",

  tags: [
    "planner pattern",
    "planning",
    "task decomposition",
    "reasoning",
    "workflow orchestration",
    "agent design",
    "execution"
  ],

  concept: "",

  steps: [
    {
      label: "Understand Goal",
      icon: "🎯",
      detail:
        "Analyze the user objective and understand the desired outcome before starting execution."
    },
    {
      label: "Decompose Tasks",
      icon: "🧩",
      detail:
        "Break complex objectives into smaller manageable tasks that can be executed independently or sequentially."
    },
    {
      label: "Create Execution Plan",
      icon: "📋",
      detail:
        "Generate a structured plan defining task order, dependencies, required tools, and expected outcomes."
    },
    {
      label: "Execute Tasks",
      icon: "⚡",
      detail:
        "Execute planned tasks using available tools, agents, APIs, databases, or external systems."
    },
    {
      label: "Monitor Progress",
      icon: "📊",
      detail:
        "Track task completion, evaluate intermediate results, and adjust the plan when required."
    },
    {
      label: "Complete Objective",
      icon: "✅",
      detail:
        "Combine completed tasks and generate the final result that satisfies the original goal."
    }
  ],

  code: ""
},
{
  id: "reflection-pattern",
  category: "Agent Design Patterns",
  title: "Reflection Pattern",
  difficulty: "Advanced",
  time: "~15 min",
  description:
    "Learn how the Reflection Pattern enables AI Agents to improve their own outputs by generating responses, critically reviewing them, identifying issues, and refining results through iterative self-improvement.",

  tags: [
    "reflection pattern",
    "self critique",
    "self improvement",
    "evaluation",
    "reasoning",
    "agent design",
    "iterative refinement"
  ],

  concept: "",

  steps: [
    {
      label: "Generate Initial Output",
      icon: "🤖",
      detail:
        "The AI Agent creates an initial response, solution, or action based on the given task and available context."
    },
    {
      label: "Review Output",
      icon: "🔍",
      detail:
        "The agent evaluates its own output for correctness, completeness, quality, and alignment with the objective."
    },
    {
      label: "Identify Issues",
      icon: "⚠️",
      detail:
        "Detect errors, missing information, incorrect reasoning, or areas where the response can be improved."
    },
    {
      label: "Refine Response",
      icon: "✏️",
      detail:
        "Update the original output by applying improvements based on the identified issues and feedback."
    },
    {
      label: "Validate Result",
      icon: "✅",
      detail:
        "Check whether the refined output meets the required quality standards and task objectives."
    },
    {
      label: "Deliver Final Output",
      icon: "📤",
      detail:
        "Provide the improved response after completing the reflection and refinement process."
    }
  ],

  code: ""
},
{
  id: "router-pattern",
  category: "Agent Design Patterns",
  title: "Router Pattern",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how the Router Pattern enables AI Agents to classify incoming requests and route them to the most appropriate model, tool, workflow, or specialized agent for efficient execution.",

  tags: [
    "router pattern",
    "routing",
    "classification",
    "workflow orchestration",
    "agent selection",
    "task delegation",
    "design pattern"
  ],

  concept: "",

  steps: [
    {
      label: "Receive Request",
      icon: "📥",
      detail:
        "Capture the user request and analyze the intent, context, and required outcome."
    },
    {
      label: "Classify Intent",
      icon: "🧠",
      detail:
        "Determine the category, complexity, and type of task that needs to be handled."
    },
    {
      label: "Select Route",
      icon: "🛣️",
      detail:
        "Choose the appropriate agent, model, tool, workflow, or processing path based on the request."
    },
    {
      label: "Execute Workflow",
      icon: "⚡",
      detail:
        "Send the request to the selected component for processing and task execution."
    },
    {
      label: "Validate Response",
      icon: "🔍",
      detail:
        "Review the generated result to ensure it satisfies the original user requirement."
    },
    {
      label: "Return Output",
      icon: "✅",
      detail:
        "Deliver the final response generated by the selected route or specialized agent."
    }
  ],

  code: ""
},
{
  id: "evaluator-pattern",
  category: "Agent Design Patterns",
  title: "Evaluator Pattern",
  difficulty: "Advanced",
  time: "~15 min",
  description:
    "Learn how the Evaluator Pattern enables AI Agents to assess generated outputs, measure quality against predefined criteria, and provide feedback for improving accuracy and reliability.",

  tags: [
    "evaluator pattern",
    "evaluation",
    "quality assessment",
    "feedback loop",
    "validation",
    "agent design",
    "optimization"
  ],

  concept: "",

  steps: [
    {
      label: "Generate Output",
      icon: "🤖",
      detail:
        "The AI Agent produces an initial response, solution, or action based on the given task."
    },
    {
      label: "Define Evaluation Criteria",
      icon: "📋",
      detail:
        "Establish quality standards such as accuracy, relevance, completeness, safety, and task requirements."
    },
    {
      label: "Evaluate Result",
      icon: "🔍",
      detail:
        "Analyze the generated output against the defined criteria to determine its quality and correctness."
    },
    {
      label: "Generate Feedback",
      icon: "💬",
      detail:
        "Provide improvement suggestions, identify errors, and highlight areas requiring refinement."
    },
    {
      label: "Apply Improvements",
      icon: "⚙️",
      detail:
        "Use evaluation feedback to modify prompts, reasoning steps, workflows, or generated responses."
    },
    {
      label: "Approve Final Output",
      icon: "✅",
      detail:
        "Validate that the improved output meets quality expectations before delivering the final response."
    }
  ],

  code: ""
},
{
  id: "generator-reviewer",
  category: "Agent Design Patterns",
  title: "Generator-Reviewer",
  difficulty: "Advanced",
  time: "~15 min",
  description:
    "Learn how the Generator-Reviewer Pattern improves AI Agent outputs by separating content creation from quality evaluation, where one component generates results and another reviews and refines them.",

  tags: [
    "generator reviewer",
    "review loop",
    "quality improvement",
    "evaluation",
    "feedback",
    "agent design",
    "iterative refinement"
  ],

  concept: "",

  steps: [
    {
      label: "Generate Initial Output",
      icon: "✍️",
      detail:
        "The Generator Agent creates an initial response, solution, document, or action based on the user request."
    },
    {
      label: "Review Generated Output",
      icon: "🔍",
      detail:
        "The Reviewer Agent evaluates the output for correctness, quality, completeness, and alignment with requirements."
    },
    {
      label: "Identify Improvements",
      icon: "⚠️",
      detail:
        "The Reviewer identifies errors, missing information, inconsistencies, or areas that require enhancement."
    },
    {
      label: "Provide Feedback",
      icon: "💬",
      detail:
        "The Reviewer generates actionable feedback that guides the Generator Agent toward a better result."
    },
    {
      label: "Regenerate Output",
      icon: "🔄",
      detail:
        "The Generator Agent updates the response using reviewer feedback and produces an improved version."
    },
    {
      label: "Approve Final Result",
      icon: "✅",
      detail:
        "The final output is validated against quality criteria before being delivered to the user."
    }
  ],

  code: ""
},
{
  id: "rag-agent",
  category: "Agent Design Patterns",
  title: "RAG Agent",
  difficulty: "Advanced",
  time: "~15 min",
  description:
    "Learn how RAG Agents combine retrieval systems with AI Agents to access external knowledge, improve factual accuracy, and generate context-aware responses using enterprise data sources.",

  tags: [
    "rag agent",
    "retrieval augmented generation",
    "vector database",
    "knowledge retrieval",
    "grounding",
    "agent design",
    "llm"
  ],

  concept: "",

  steps: [
    {
      label: "Receive User Query",
      icon: "📥",
      detail:
        "The agent receives a user request and analyzes the intent, context, and required information."
    },
    {
      label: "Retrieve Knowledge",
      icon: "🔎",
      detail:
        "The agent searches external knowledge sources such as vector databases, documents, APIs, or enterprise repositories."
    },
    {
      label: "Process Context",
      icon: "🧠",
      detail:
        "The retrieved information is analyzed and combined with the user query to create relevant context."
    },
    {
      label: "Generate Response",
      icon: "🤖",
      detail:
        "The LLM generates a response using retrieved knowledge to improve accuracy and reduce hallucinations."
    },
    {
      label: "Validate Output",
      icon: "✅",
      detail:
        "The agent checks response quality, relevance, and alignment with retrieved information before delivery."
    },
    {
      label: "Learn and Improve",
      icon: "📈",
      detail:
        "Feedback, usage patterns, and evaluation results are used to improve retrieval strategies and agent performance."
    }
  ],

  code: ""
},
{
  id: "multi-agent-pattern",
  category: "Agent Design Patterns",
  title: "Multi-Agent Pattern",
  difficulty: "Advanced",
  time: "~20 min",
  description:
    "Learn how the Multi-Agent Pattern enables multiple specialized AI Agents to collaborate, communicate, and coordinate tasks to solve complex problems more effectively.",

  tags: [
    "multi-agent",
    "agent collaboration",
    "agent communication",
    "orchestration",
    "specialized agents",
    "workflow",
    "agent design"
  ],

  concept: "",

  steps: [
    {
      label: "Define Agent Roles",
      icon: "👥",
      detail:
        "Identify specialized agents based on capabilities, responsibilities, and the tasks they need to perform."
    },
    {
      label: "Assign Tasks",
      icon: "📋",
      detail:
        "Break down complex objectives and distribute tasks to the most suitable agents."
    },
    {
      label: "Agent Communication",
      icon: "🔗",
      detail:
        "Enable agents to exchange information, share results, and coordinate their activities."
    },
    {
      label: "Execute Collaboration",
      icon: "⚡",
      detail:
        "Allow multiple agents to work sequentially or in parallel to complete assigned tasks."
    },
    {
      label: "Aggregate Results",
      icon: "📊",
      detail:
        "Combine outputs from different agents and resolve conflicts to create a unified solution."
    },
    {
      label: "Deliver Final Outcome",
      icon: "✅",
      detail:
        "Provide the final response after successful coordination and validation of all agent outputs."
    }
  ],

  code: ""
},
{
  id: "human-in-the-loop",
  category: "Agent Design Patterns",
  title: "Human-in-the-Loop",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how the Human-in-the-Loop Pattern enables AI Agents to involve human experts for approval, validation, decision-making, and handling complex or high-risk scenarios.",

  tags: [
    "human in the loop",
    "human approval",
    "oversight",
    "validation",
    "governance",
    "agent safety",
    "workflow"
  ],

  concept: "",

  steps: [
    {
      label: "Identify Human Intervention",
      icon: "👤",
      detail:
        "Determine situations where human review is required due to complexity, risk, compliance, or business requirements."
    },
    {
      label: "Pause Agent Execution",
      icon: "⏸️",
      detail:
        "Temporarily stop the workflow before critical decisions or high-impact actions are performed."
    },
    {
      label: "Request Human Review",
      icon: "📩",
      detail:
        "Provide relevant context, recommendations, and supporting information to the human reviewer."
    },
    {
      label: "Receive Feedback",
      icon: "💬",
      detail:
        "Collect human decisions, corrections, approvals, or additional instructions."
    },
    {
      label: "Continue Workflow",
      icon: "▶️",
      detail:
        "Resume execution based on human feedback, approval, or modified instructions."
    },
    {
      label: "Improve Agent Behavior",
      icon: "📈",
      detail:
        "Use human feedback to improve prompts, workflows, policies, and future agent decisions."
    }
  ],

  code: ""
},
{
  id: "autonomous-agent-pattern",
  category: "Agent Design Patterns",
  title: "Autonomous Agent Pattern",
  difficulty: "Advanced",
  time: "~20 min",
  description:
    "Learn how the Autonomous Agent Pattern enables AI Agents to independently plan, reason, execute tasks, use tools, adapt to feedback, and achieve goals with minimal human intervention.",

  tags: [
    "autonomous agent",
    "self-directed execution",
    "planning",
    "reasoning",
    "tool usage",
    "adaptation",
    "agent design"
  ],

  concept: "",

  steps: [
    {
      label: "Define Goal",
      icon: "🎯",
      detail:
        "Provide the agent with a high-level objective that defines the desired outcome without specifying every individual step."
    },
    {
      label: "Analyze Environment",
      icon: "🌐",
      detail:
        "The agent gathers information from available sources, tools, systems, and context to understand the current situation."
    },
    {
      label: "Create Plan",
      icon: "📋",
      detail:
        "The agent decomposes the goal into smaller tasks and creates an execution strategy to achieve the objective."
    },
    {
      label: "Execute Actions",
      icon: "⚡",
      detail:
        "The agent independently performs actions using tools, APIs, databases, and external systems."
    },
    {
      label: "Evaluate Results",
      icon: "🔍",
      detail:
        "The agent reviews outcomes, checks progress toward the goal, and determines whether additional actions are required."
    },
    {
      label: "Adapt and Improve",
      icon: "📈",
      detail:
        "The agent learns from feedback, updates its approach, and improves future decision-making and execution."
    }
  ],

  code: ""
},



];

const CATEGORIES = ["All", "Agent Design Patterns", "Advanced"];
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
            { label: "Recipes", value: AgentDesignPatterns.length },
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
    const [selected, setSelected] = useState(AgentDesignPatterns[0]);
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
            recipes={AgentDesignPatterns}
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
