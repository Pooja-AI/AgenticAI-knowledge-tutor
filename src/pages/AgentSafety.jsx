import CookbookApp from "../components/CookbookApp"; 

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

export default function CWDPage() { 
  return ( 
    <CookbookApp 
      data={AgentSafety}
      title="AgentCommunication Cookbook" 
      subtitle="Complete Workflow Design" 
      icon="🧩" 
      patternLabel="Topics" 
    /> 
  ); 
}