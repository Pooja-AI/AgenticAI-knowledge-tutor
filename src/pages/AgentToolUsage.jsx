import CookbookApp from "../components/CookbookApp"; 

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

export default function CWDPage() { 
  return ( 
    <CookbookApp 
      data={AgentToolUsage}
      title="AgentToolUsage Cookbook" 
      subtitle="Complete Workflow Design" 
      icon="🧩" 
      patternLabel="Topics" 
    /> 
  ); 
}