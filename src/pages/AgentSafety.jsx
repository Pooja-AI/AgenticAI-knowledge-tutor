import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import PromptInjection from "../assets/docs/AgentSafety/PromptInjection.md?raw";
import JailbreakAttacks from "../assets/docs/AgentSafety/JailbreakAttacks.md?raw";
import ToolSecurity from "../assets/docs/AgentSafety/ToolSecurity.md?raw";
import Authorization from "../assets/docs/AgentSafety/Authorization.md?raw";
import Authentication from "../assets/docs/AgentSafety/Authentication.md?raw";
import DataPrivacy from "../assets/docs/AgentSafety/DataPrivacy.md?raw";
import Guardrails from "../assets/docs/AgentSafety/Guardrails.md?raw";
import PolicyEnforcement from "../assets/docs/AgentSafety/PolicyEnforcement.md?raw";
import HumanApproval from "../assets/docs/AgentSafety/HumanApproval.md?raw";
import RiskMitigation from "../assets/docs/AgentSafety/RiskMitigation.md?raw";
const AgentSafety=[ 
    {
  id: "prompt-injection",
  category: "Safety",
  title: "Prompt Injection",
  difficulty: "Intermediate",
  time: "~10 min",
  description:
    "Learn how Prompt Injection attacks manipulate AI Agents through malicious instructions and explore techniques to detect, prevent, and mitigate these attacks.",

  tags: [
    "prompt injection",
    "security",
    "llm",
    "guardrails",
    "malicious prompts",
    "validation",
    "safety"
  ],

  concept: "",

  steps: [
    {
      label: "Identify Input",
      icon: "📥",
      detail:
        "Receive user prompts from conversations, APIs, documents, or external sources."
    },
    {
      label: "Inspect Content",
      icon: "🔍",
      detail:
        "Analyze the prompt for suspicious instructions, hidden commands, or attempts to override system behavior."
    },
    {
      label: "Validate Prompt",
      icon: "✔️",
      detail:
        "Apply security filters and validation rules before processing the request."
    },
    {
      label: "Apply Guardrails",
      icon: "🛡️",
      detail:
        "Enforce system policies to ignore or block malicious instructions."
    },
    {
      label: "Execute Safely",
      icon: "⚡",
      detail:
        "Process only validated instructions while protecting system prompts and sensitive information."
    },
    {
      label: "Monitor Attacks",
      icon: "📊",
      detail:
        "Log suspicious activities and continuously improve prompt security mechanisms."
    }
  ],

  code: ""
},
{
  id: "jailbreak-attacks",
  category: "Safety",
  title: "Jailbreak Attacks",
  difficulty: "Intermediate",
  time: "~10 min",
  description:
    "Learn how Jailbreak Attacks attempt to bypass AI safety restrictions, manipulate model behavior, and generate unauthorized or unsafe responses, along with techniques to defend against them.",

  tags: [
    "jailbreak",
    "security",
    "prompt attack",
    "guardrails",
    "llm safety",
    "policy",
    "ai security"
  ],

  concept: "",

  steps: [
    {
      label: "Recognize Jailbreak Attempts",
      icon: "🚨",
      detail:
        "Identify prompts designed to bypass system instructions, safety rules, or content policies."
    },
    {
      label: "Analyze User Intent",
      icon: "🧠",
      detail:
        "Evaluate whether the user's request is legitimate or attempts to manipulate the agent into unsafe behavior."
    },
    {
      label: "Enforce Safety Policies",
      icon: "🛡️",
      detail:
        "Apply predefined safety rules and content policies before generating a response."
    },
    {
      label: "Block Unsafe Requests",
      icon: "⛔",
      detail:
        "Reject or safely refuse requests that violate security, ethical, or organizational policies."
    },
    {
      label: "Provide Safe Alternatives",
      icon: "✅",
      detail:
        "Offer helpful responses or guidance that remain within approved safety boundaries."
    },
    {
      label: "Monitor & Improve",
      icon: "📈",
      detail:
        "Continuously monitor jailbreak attempts, update detection mechanisms, and strengthen guardrails based on emerging attack patterns."
    }
  ],

  code: ""
},
{
  id: "tool-security",
  category: "Safety",
  title: "Tool Security",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how AI Agents securely access and use external tools, APIs, databases, and enterprise systems while protecting sensitive data, enforcing permissions, and preventing unauthorized actions.",

  tags: [
    "tool security",
    "api security",
    "authorization",
    "permissions",
    "validation",
    "enterprise security",
    "safe tool usage"
  ],

  concept: "",

  steps: [
    {
      label: "Identify Required Tool",
      icon: "🛠️",
      detail:
        "Determine which external tool or service is required to complete the requested task."
    },
    {
      label: "Verify Permissions",
      icon: "🔐",
      detail:
        "Ensure the agent and user have the necessary authorization before accessing the selected tool."
    },
    {
      label: "Validate Inputs",
      icon: "✔️",
      detail:
        "Check all input parameters for correctness, completeness, and security before invoking the tool."
    },
    {
      label: "Execute Securely",
      icon: "⚡",
      detail:
        "Invoke the tool using secure communication, authenticated requests, and protected credentials."
    },
    {
      label: "Verify Results",
      icon: "📊",
      detail:
        "Validate tool responses for accuracy, integrity, and compliance before using the results."
    },
    {
      label: "Audit & Monitor",
      icon: "📈",
      detail:
        "Record tool usage, monitor security events, and detect unauthorized or abnormal activities."
    }
  ],

  code: ""
},
{
  id: "authorization",
  category: "Safety",
  title: "Authorization",
  difficulty: "Intermediate",
  time: "~10 min",
  description:
    "Learn how Authorization ensures AI Agents and users can access only the resources, tools, and operations they are permitted to use based on roles, permissions, and organizational policies.",

  tags: [
    "authorization",
    "access control",
    "permissions",
    "roles",
    "security",
    "rbac",
    "least privilege"
  ],

  concept: "",

  steps: [
    {
      label: "Identify User",
      icon: "👤",
      detail:
        "Determine the identity of the authenticated user or AI Agent requesting access."
    },
    {
      label: "Check Roles",
      icon: "🪪",
      detail:
        "Identify the assigned roles and responsibilities associated with the user or agent."
    },
    {
      label: "Verify Permissions",
      icon: "🔐",
      detail:
        "Evaluate whether the requested resource, tool, or action is permitted based on access policies."
    },
    {
      label: "Grant or Deny Access",
      icon: "⚖️",
      detail:
        "Allow authorized operations while blocking requests that exceed assigned permissions."
    },
    {
      label: "Execute Securely",
      icon: "⚡",
      detail:
        "Perform the approved action while maintaining security controls and least-privilege access."
    },
    {
      label: "Log Access Events",
      icon: "📊",
      detail:
        "Record authorization decisions for auditing, compliance, monitoring, and security analysis."
    }
  ],

  code: ""
},
{
  id: "authentication",
  category: "Safety",
  title: "Authentication",
  difficulty: "Intermediate",
  time: "~10 min",
  description:
    "Learn how Authentication verifies the identity of users, AI Agents, and systems before granting access to applications, tools, APIs, and enterprise resources.",

  tags: [
    "authentication",
    "identity",
    "login",
    "mfa",
    "security",
    "credentials",
    "access"
  ],

  concept: "",

  steps: [
    {
      label: "Receive Credentials",
      icon: "📥",
      detail:
        "Collect authentication information such as usernames, passwords, API keys, tokens, or certificates."
    },
    {
      label: "Verify Identity",
      icon: "🪪",
      detail:
        "Validate the provided credentials against a trusted identity provider or authentication service."
    },
    {
      label: "Apply Multi-Factor Authentication",
      icon: "📱",
      detail:
        "Strengthen security by requiring additional verification methods such as OTPs, authenticator apps, or biometric authentication."
    },
    {
      label: "Generate Secure Session",
      icon: "🔑",
      detail:
        "Create a secure session or access token for authenticated users and AI Agents."
    },
    {
      label: "Grant Access",
      icon: "✅",
      detail:
        "Allow access to protected applications, APIs, or enterprise resources after successful authentication."
    },
    {
      label: "Monitor Authentication",
      icon: "📊",
      detail:
        "Track login attempts, detect suspicious activities, and maintain audit logs for security and compliance."
    }
  ],

  code: ""
},
{
  id: "data-privacy",
  category: "Safety",
  title: "Data Privacy",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how AI Agents protect sensitive information by collecting, processing, storing, and sharing data securely while complying with privacy regulations and organizational policies.",

  tags: [
    "data privacy",
    "privacy",
    "pii",
    "data protection",
    "encryption",
    "compliance",
    "security"
  ],

  concept: "",

  steps: [
    {
      label: "Identify Sensitive Data",
      icon: "🔍",
      detail:
        "Recognize personally identifiable information (PII), confidential business data, financial records, and other sensitive information."
    },
    {
      label: "Minimize Data Collection",
      icon: "📉",
      detail:
        "Collect only the information necessary to complete the requested task and avoid unnecessary data retention."
    },
    {
      label: "Protect Data",
      icon: "🔐",
      detail:
        "Secure sensitive information using encryption, masking, tokenization, and controlled access mechanisms."
    },
    {
      label: "Control Data Access",
      icon: "🛡️",
      detail:
        "Restrict access to authorized users, AI Agents, and applications based on organizational policies."
    },
    {
      label: "Comply with Regulations",
      icon: "📜",
      detail:
        "Follow applicable privacy regulations, industry standards, and internal governance policies when processing data."
    },
    {
      label: "Monitor & Audit",
      icon: "📊",
      detail:
        "Track data access, maintain audit logs, detect privacy violations, and continuously improve data protection practices."
    }
  ],

  code: ""
},
{
  id: "guardrails",
  category: "Safety",
  title: "Guardrails",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how Guardrails help AI Agents operate safely by enforcing predefined rules, validating inputs and outputs, restricting unsafe actions, and ensuring compliance with organizational policies.",

  tags: [
    "guardrails",
    "ai safety",
    "policy enforcement",
    "validation",
    "security",
    "compliance",
    "responsible ai"
  ],

  concept: "",

  steps: [
    {
      label: "Define Safety Rules",
      icon: "📋",
      detail:
        "Establish policies, constraints, and acceptable behaviors that the AI Agent must follow during execution."
    },
    {
      label: "Validate Inputs",
      icon: "🔍",
      detail:
        "Inspect user requests and external inputs to detect malicious, unsafe, or policy-violating content before processing."
    },
    {
      label: "Control Agent Actions",
      icon: "🛡️",
      detail:
        "Restrict access to sensitive tools, APIs, and operations while preventing unauthorized or risky actions."
    },
    {
      label: "Verify Outputs",
      icon: "✔️",
      detail:
        "Review generated responses to ensure they are accurate, safe, compliant, and free from sensitive information leakage."
    },
    {
      label: "Handle Violations",
      icon: "⛔",
      detail:
        "Block, modify, or safely refuse requests that violate security policies, ethical guidelines, or business rules."
    },
    {
      label: "Monitor & Improve",
      icon: "📊",
      detail:
        "Continuously evaluate guardrail effectiveness, analyze policy violations, and update safeguards to address emerging risks."
    }
  ],

  code: ""
},
{
  id: "policy-enforcement",
  category: "Safety",
  title: "Policy Enforcement",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how AI Agents enforce organizational policies, regulatory requirements, and security rules to ensure every action complies with defined governance standards.",

  tags: [
    "policy enforcement",
    "governance",
    "compliance",
    "security",
    "business rules",
    "guardrails",
    "risk management"
  ],

  concept: "",

  steps: [
    {
      label: "Define Policies",
      icon: "📜",
      detail:
        "Establish organizational rules, compliance requirements, security standards, and business constraints that the AI Agent must follow."
    },
    {
      label: "Validate Requests",
      icon: "🔍",
      detail:
        "Evaluate user inputs, tool requests, and workflow actions against the defined policies before execution."
    },
    {
      label: "Apply Policy Rules",
      icon: "🛡️",
      detail:
        "Enforce access controls, business logic, compliance requirements, and operational constraints throughout the workflow."
    },
    {
      label: "Handle Violations",
      icon: "⛔",
      detail:
        "Reject, modify, or escalate requests that violate organizational policies, legal regulations, or security requirements."
    },
    {
      label: "Record Decisions",
      icon: "📝",
      detail:
        "Maintain audit logs of policy evaluations, enforcement decisions, and exceptions for governance and compliance purposes."
    },
    {
      label: "Review & Update Policies",
      icon: "📈",
      detail:
        "Continuously improve policy definitions based on new regulations, business requirements, security threats, and operational feedback."
    }
  ],

  code: ""
},
{
  id: "human-approval",
  category: "Safety",
  title: "Human Approval",
  difficulty: "Intermediate",
  time: "~10 min",
  description:
    "Learn how Human Approval enables AI Agents to involve people in critical decisions, ensuring high-risk actions are reviewed, validated, and approved before execution.",

  tags: [
    "human approval",
    "human in the loop",
    "approval workflow",
    "validation",
    "governance",
    "risk management",
    "oversight"
  ],

  concept: "",

  steps: [
    {
      label: "Identify Critical Actions",
      icon: "⚠️",
      detail:
        "Detect tasks that involve sensitive data, financial transactions, regulatory compliance, or high business impact."
    },
    {
      label: "Pause Execution",
      icon: "⏸️",
      detail:
        "Temporarily stop the workflow before performing high-risk operations that require manual review."
    },
    {
      label: "Request Approval",
      icon: "📩",
      detail:
        "Notify the appropriate reviewer with all relevant context, recommendations, and supporting information."
    },
    {
      label: "Review Decision",
      icon: "👤",
      detail:
        "Allow the human reviewer to verify the request, assess potential risks, and approve or reject the proposed action."
    },
    {
      label: "Execute or Cancel",
      icon: "✅",
      detail:
        "Continue the workflow if approved or safely terminate, modify, or redirect the process if rejected."
    },
    {
      label: "Record Approval",
      icon: "📝",
      detail:
        "Store approval decisions, reviewer details, timestamps, and audit logs for compliance and future reference."
    }
  ],

  code: ""
},
{
  id: "risk-mitigation",
  category: "Safety",
  title: "Risk Mitigation",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how AI Agents identify, assess, prioritize, and reduce potential risks by implementing preventive controls, monitoring systems, and continuous improvement practices.",

  tags: [
    "risk mitigation",
    "risk assessment",
    "ai safety",
    "security",
    "monitoring",
    "governance",
    "compliance"
  ],

  concept: "",

  steps: [
    {
      label: "Identify Risks",
      icon: "🔍",
      detail:
        "Recognize potential risks such as hallucinations, security threats, privacy violations, tool failures, and compliance issues."
    },
    {
      label: "Assess Impact",
      icon: "📊",
      detail:
        "Evaluate the likelihood and potential business impact of each identified risk to determine its priority."
    },
    {
      label: "Implement Controls",
      icon: "🛡️",
      detail:
        "Apply preventive measures such as guardrails, access controls, validation, monitoring, and fallback mechanisms to reduce risk."
    },
    {
      label: "Monitor Continuously",
      icon: "📈",
      detail:
        "Track agent behavior, tool usage, security events, and system performance to detect emerging risks in real time."
    },
    {
      label: "Respond to Incidents",
      icon: "🚨",
      detail:
        "Take corrective actions when risks materialize by containing issues, recovering services, and minimizing business impact."
    },
    {
      label: "Improve Risk Strategy",
      icon: "🔄",
      detail:
        "Review incidents, analyze lessons learned, and continuously strengthen risk management processes and safety controls."
    }
  ],

  code: ""
},
    
];

const CATEGORIES = ["All", "Safety", "Advanced"];
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
            { label: "Recipes", value: AgentSafety.length },
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
    const [selected, setSelected] = useState(AgentSafety[0]);
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
            recipes={AgentSafety}
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
