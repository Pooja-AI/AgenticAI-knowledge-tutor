import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import OfflineEvaluation from "../assets/docs/AgentEvaluation/OfflineEvaluation.md?raw";
import OnlineEvaluation from "../assets/docs/AgentEvaluation/OnlineEvaluation.md?raw";
import HumanEvaluation from "../assets/docs/AgentEvaluation/HumanEvaluation.md?raw";
import LLMAsAJudge from "../assets/docs/AgentEvaluation/LLMAsAJudge.md?raw";
import Benchmarks from "../assets/docs/AgentEvaluation/Benchmarks.md?raw";
import TaskSuccessRate from "../assets/docs/AgentEvaluation/TaskSuccessRate.md?raw";
import HallucinationDetection from "../assets/docs/AgentEvaluation/HallucinationDetection.md?raw";
import SafetyEvaluation from "../assets/docs/AgentEvaluation/SafetyEvaluation.md?raw";
import CostEvaluation from "../assets/docs/AgentEvaluation/CostEvaluation.md?raw";
import LatencyEvaluation from "../assets/docs/AgentEvaluation/LatencyEvaluation.md?raw";

const AgentEvalution=[ 
    {
  id: "offline-evaluation",
  category: "Evaluation",
  title: "Offline Evaluation",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how AI Agents are evaluated using pre-collected datasets and predefined test cases before deployment to measure accuracy, reliability, and overall performance.",

  tags: [
    "offline evaluation",
    "testing",
    "benchmark",
    "dataset",
    "performance",
    "accuracy",
    "evaluation"
  ],

  concept: "",

  steps: [
    {
      label: "Prepare Test Dataset",
      icon: "📂",
      detail:
        "Collect representative datasets, prompts, and expected outputs that reflect real-world scenarios."
    },
    {
      label: "Execute Test Cases",
      icon: "▶️",
      detail:
        "Run the AI Agent against the prepared dataset using predefined evaluation scenarios."
    },
    {
      label: "Compare Results",
      icon: "⚖️",
      detail:
        "Compare the generated responses with expected answers to identify correct and incorrect outputs."
    },
    {
      label: "Measure Performance",
      icon: "📊",
      detail:
        "Calculate evaluation metrics such as accuracy, precision, recall, task completion rate, and response quality."
    },
    {
      label: "Analyze Failures",
      icon: "🔍",
      detail:
        "Investigate incorrect responses, reasoning failures, hallucinations, and workflow issues."
    },
    {
      label: "Improve the Agent",
      icon: "📈",
      detail:
        "Refine prompts, workflows, retrieval strategies, and models based on evaluation findings."
    }
  ],

  code: ""
},
{
  id: "online-evaluation",
  category: "Evaluation",
  title: "Online Evaluation",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how AI Agents are evaluated in real-world environments by monitoring live interactions, collecting user feedback, and measuring production performance.",

  tags: [
    "online evaluation",
    "production",
    "live monitoring",
    "user feedback",
    "performance",
    "analytics",
    "continuous evaluation"
  ],

  concept: "",

  steps: [
    {
      label: "Deploy the Agent",
      icon: "🚀",
      detail:
        "Release the AI Agent into a production or live environment where it can interact with real users."
    },
    {
      label: "Monitor Interactions",
      icon: "👀",
      detail:
        "Observe user conversations, tool executions, workflow outcomes, and system behavior in real time."
    },
    {
      label: "Collect Feedback",
      icon: "💬",
      detail:
        "Gather explicit user ratings, comments, and implicit signals such as retries, corrections, and abandonment."
    },
    {
      label: "Measure Performance",
      icon: "📊",
      detail:
        "Track production metrics including task success rate, response quality, latency, cost, and user satisfaction."
    },
    {
      label: "Detect Issues",
      icon: "⚠️",
      detail:
        "Identify failures, hallucinations, policy violations, performance bottlenecks, and unexpected agent behavior."
    },
    {
      label: "Continuously Improve",
      icon: "📈",
      detail:
        "Refine prompts, workflows, models, retrieval strategies, and tools using insights from production data."
    }
  ],

  code: ""
},
{
  id: "human-evaluation",
  category: "Evaluation",
  title: "Human Evaluation",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how domain experts and end users evaluate AI Agent responses by assessing accuracy, relevance, reasoning quality, safety, and overall user satisfaction.",

  tags: [
    "human evaluation",
    "expert review",
    "feedback",
    "quality assessment",
    "accuracy",
    "user satisfaction",
    "evaluation"
  ],

  concept: "",

  steps: [
    {
      label: "Define Evaluation Criteria",
      icon: "📋",
      detail:
        "Establish clear evaluation guidelines such as accuracy, relevance, completeness, safety, and reasoning quality."
    },
    {
      label: "Review Agent Responses",
      icon: "👀",
      detail:
        "Human evaluators examine AI-generated responses across different tasks and real-world scenarios."
    },
    {
      label: "Assign Ratings",
      icon: "⭐",
      detail:
        "Score responses using predefined rating scales or rubrics based on the evaluation criteria."
    },
    {
      label: "Provide Feedback",
      icon: "💬",
      detail:
        "Document strengths, weaknesses, errors, and improvement suggestions for each evaluated response."
    },
    {
      label: "Analyze Results",
      icon: "📊",
      detail:
        "Aggregate evaluation scores to identify performance trends, common issues, and opportunities for improvement."
    },
    {
      label: "Improve the Agent",
      icon: "📈",
      detail:
        "Use human feedback to refine prompts, workflows, retrieval strategies, models, and overall agent behavior."
    }
  ],

  code: ""
},
{
  id: "llm-as-a-judge",
  category: "Evaluation",
  title: "LLM-as-a-Judge",
  difficulty: "Advanced",
  time: "~15 min",
  description:
    "Learn how Large Language Models can automatically evaluate AI Agent responses by assessing quality, accuracy, relevance, reasoning, and adherence to predefined evaluation criteria.",

  tags: [
    "llm as a judge",
    "automated evaluation",
    "judge model",
    "quality assessment",
    "reasoning",
    "scoring",
    "evaluation"
  ],

  concept: "",

  steps: [
    {
      label: "Define Evaluation Criteria",
      icon: "📋",
      detail:
        "Specify the evaluation dimensions such as correctness, relevance, completeness, reasoning quality, and safety."
    },
    {
      label: "Generate Agent Response",
      icon: "🤖",
      detail:
        "Allow the AI Agent to process the request and produce a response for evaluation."
    },
    {
      label: "Judge the Response",
      icon: "⚖️",
      detail:
        "Use a separate LLM to compare the response against the evaluation criteria and identify strengths and weaknesses."
    },
    {
      label: "Assign Scores",
      icon: "⭐",
      detail:
        "Generate quantitative or qualitative scores for each evaluation dimension along with supporting explanations."
    },
    {
      label: "Analyze Evaluation",
      icon: "📊",
      detail:
        "Review the evaluation results to identify recurring issues, inconsistencies, and areas requiring improvement."
    },
    {
      label: "Improve the Agent",
      icon: "📈",
      detail:
        "Use the judge's feedback to refine prompts, workflows, retrieval strategies, and overall agent performance."
    }
  ],

  code: ""
},
{
  id: "benchmarks",
  category: "Evaluation",
  title: "Benchmarks",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how standardized benchmark datasets and evaluation suites are used to measure, compare, and track the performance of AI Agents across different tasks and scenarios.",

  tags: [
    "benchmarks",
    "evaluation",
    "datasets",
    "performance",
    "comparison",
    "testing",
    "metrics"
  ],

  concept: "",

  steps: [
    {
      label: "Select Benchmark",
      icon: "📚",
      detail:
        "Choose an appropriate benchmark dataset or evaluation suite that matches the AI Agent's intended tasks and objectives."
    },
    {
      label: "Run Evaluation",
      icon: "▶️",
      detail:
        "Execute the AI Agent against the benchmark using standardized inputs and evaluation procedures."
    },
    {
      label: "Measure Performance",
      icon: "📊",
      detail:
        "Calculate metrics such as accuracy, precision, recall, task success rate, reasoning quality, and response correctness."
    },
    {
      label: "Compare Results",
      icon: "⚖️",
      detail:
        "Compare the agent's performance against baseline models, previous versions, or industry-standard results."
    },
    {
      label: "Identify Weaknesses",
      icon: "🔍",
      detail:
        "Analyze areas where the agent underperforms, including reasoning errors, hallucinations, or incomplete task execution."
    },
    {
      label: "Optimize Performance",
      icon: "📈",
      detail:
        "Use benchmark insights to improve prompts, retrieval pipelines, workflows, models, and overall agent capabilities."
    }
  ],

  code: ""
},
{
  id: "task-success-rate",
  category: "Evaluation",
  title: "Task Success Rate",
  difficulty: "Intermediate",
  time: "~10 min",
  description:
    "Learn how Task Success Rate measures an AI Agent's ability to successfully complete user requests and achieve the intended objectives across different workflows and real-world scenarios.",

  tags: [
    "task success rate",
    "success metrics",
    "evaluation",
    "performance",
    "workflow",
    "accuracy",
    "completion"
  ],

  concept: "",

  steps: [
    {
      label: "Define Success Criteria",
      icon: "🎯",
      detail:
        "Specify the expected outcome, acceptance conditions, and completion requirements for each task."
    },
    {
      label: "Execute Tasks",
      icon: "▶️",
      detail:
        "Run the AI Agent on representative user requests, workflows, and evaluation scenarios."
    },
    {
      label: "Measure Completion",
      icon: "✅",
      detail:
        "Determine whether each task was completed successfully based on the predefined success criteria."
    },
    {
      label: "Calculate Success Rate",
      icon: "📊",
      detail:
        "Compute the percentage of successfully completed tasks compared to the total number of evaluated tasks."
    },
    {
      label: "Analyze Failures",
      icon: "🔍",
      detail:
        "Investigate incomplete tasks, reasoning errors, tool failures, and workflow issues that prevented successful completion."
    },
    {
      label: "Improve Performance",
      icon: "📈",
      detail:
        "Optimize prompts, planning, retrieval, tools, and workflows to increase the overall task success rate."
    }
  ],

  code: ""
},
{
  id: "hallucination-detection",
  category: "Evaluation",
  title: "Hallucination Detection",
  difficulty: "Advanced",
  time: "~15 min",
  description:
    "Learn how to identify, measure, and reduce hallucinations in AI Agent responses by validating generated information against trusted knowledge sources and factual evidence.",

  tags: [
    "hallucination",
    "fact checking",
    "evaluation",
    "grounding",
    "rag",
    "accuracy",
    "validation"
  ],

  concept: "",

  steps: [
    {
      label: "Generate Response",
      icon: "🤖",
      detail:
        "Allow the AI Agent to generate a response based on the user's request and available context."
    },
    {
      label: "Retrieve Evidence",
      icon: "📚",
      detail:
        "Collect supporting information from trusted documents, databases, knowledge bases, or external sources."
    },
    {
      label: "Validate Facts",
      icon: "✔️",
      detail:
        "Compare the generated response against the retrieved evidence to verify factual correctness and consistency."
    },
    {
      label: "Detect Hallucinations",
      icon: "🚨",
      detail:
        "Identify fabricated, unsupported, contradictory, or misleading statements that are not backed by reliable evidence."
    },
    {
      label: "Measure Accuracy",
      icon: "📊",
      detail:
        "Evaluate the severity and frequency of hallucinations using predefined metrics and quality scores."
    },
    {
      label: "Reduce Hallucinations",
      icon: "📈",
      detail:
        "Improve response reliability by refining prompts, enhancing retrieval, applying guardrails, and validating outputs."
    }
  ],

  code: ""
},
{
  id: "safety-evaluation",
  category: "Evaluation",
  title: "Safety Evaluation",
  difficulty: "Advanced",
  time: "~15 min",
  description:
    "Learn how to evaluate AI Agents for safety by assessing compliance with security policies, ethical guidelines, regulatory requirements, and organizational guardrails to minimize harmful or unsafe behavior.",

  tags: [
    "safety evaluation",
    "ai safety",
    "guardrails",
    "policy compliance",
    "security",
    "risk assessment",
    "responsible ai"
  ],

  concept: "",

  steps: [
    {
      label: "Define Safety Criteria",
      icon: "📋",
      detail:
        "Establish safety requirements, acceptable behaviors, security policies, and compliance standards for the AI Agent."
    },
    {
      label: "Execute Safety Tests",
      icon: "🧪",
      detail:
        "Evaluate the agent using adversarial prompts, harmful scenarios, policy violations, and edge-case test inputs."
    },
    {
      label: "Assess Responses",
      icon: "🛡️",
      detail:
        "Verify that generated responses follow safety guidelines, avoid harmful content, and respect organizational policies."
    },
    {
      label: "Identify Risks",
      icon: "⚠️",
      detail:
        "Detect vulnerabilities such as prompt injection, jailbreak attempts, hallucinations, data leakage, and unsafe tool usage."
    },
    {
      label: "Measure Compliance",
      icon: "📊",
      detail:
        "Calculate safety metrics, policy adherence, violation rates, and overall risk levels across evaluation scenarios."
    },
    {
      label: "Improve Safety",
      icon: "📈",
      detail:
        "Strengthen guardrails, update policies, refine prompts, and enhance validation mechanisms to improve agent safety."
    }
  ],

  code: ""
},
{
  id: "cost-evaluation",
  category: "Evaluation",
  title: "Cost Evaluation",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how to evaluate the operational cost of AI Agents by measuring token usage, model invocations, infrastructure consumption, tool execution, and overall resource utilization to optimize efficiency.",

  tags: [
    "cost evaluation",
    "token usage",
    "llm cost",
    "api cost",
    "resource utilization",
    "optimization",
    "evaluation"
  ],

  concept: "",

  steps: [
    {
      label: "Track Resource Usage",
      icon: "📊",
      detail:
        "Monitor token consumption, API requests, tool executions, compute resources, and storage usage during agent execution."
    },
    {
      label: "Calculate Costs",
      icon: "💰",
      detail:
        "Estimate the cost of model inference, external APIs, infrastructure, and supporting services for each workflow."
    },
    {
      label: "Analyze Cost Drivers",
      icon: "🔍",
      detail:
        "Identify expensive operations such as multiple LLM calls, excessive retrieval, long prompts, or unnecessary tool usage."
    },
    {
      label: "Measure Cost Efficiency",
      icon: "⚖️",
      detail:
        "Compare operational costs against business value, task success rate, response quality, and performance metrics."
    },
    {
      label: "Optimize Workflows",
      icon: "⚙️",
      detail:
        "Reduce costs by improving prompts, selecting appropriate models, caching results, and minimizing redundant operations."
    },
    {
      label: "Monitor Continuously",
      icon: "📈",
      detail:
        "Continuously track spending trends, budget utilization, and optimization opportunities to maintain cost-effective AI operations."
    }
  ],

  code: ""
},
{
  id: "latency-evaluation",
  category: "Evaluation",
  title: "Latency Evaluation",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how to evaluate AI Agent response time by measuring the latency of model inference, retrieval, tool execution, and end-to-end workflows to ensure fast and efficient user experiences.",

  tags: [
    "latency evaluation",
    "response time",
    "performance",
    "execution time",
    "optimization",
    "monitoring",
    "evaluation"
  ],

  concept: "",

  steps: [
    {
      label: "Measure Response Time",
      icon: "⏱️",
      detail:
        "Record the total time taken by the AI Agent to process a request and generate the final response."
    },
    {
      label: "Analyze Workflow Stages",
      icon: "🔍",
      detail:
        "Measure latency for individual components such as retrieval, reasoning, model inference, tool execution, and response generation."
    },
    {
      label: "Identify Bottlenecks",
      icon: "🚧",
      detail:
        "Locate slow operations, overloaded services, inefficient prompts, or external dependencies that increase response time."
    },
    {
      label: "Compare Performance",
      icon: "📊",
      detail:
        "Evaluate latency across different models, workflows, environments, and workloads to identify the most efficient configuration."
    },
    {
      label: "Optimize Execution",
      icon: "⚙️",
      detail:
        "Reduce latency through caching, prompt optimization, parallel execution, model selection, and efficient tool orchestration."
    },
    {
      label: "Monitor Continuously",
      icon: "📈",
      detail:
        "Track latency trends in production, detect performance degradation, and continuously improve response times."
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
            { label: "Recipes", value: AgentEvalution.length },
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
    const [selected, setSelected] = useState(AgentEvalution[0]);
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
            recipes={AgentEvalution}
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
