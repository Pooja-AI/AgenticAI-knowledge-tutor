import CookbookApp from "../components/CookbookApp"; 
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
export default function CWDPage() { 
  return ( 
    <CookbookApp 
      data={AgentReasoingTechniques}
      title="AgentReasoingTechniques Cookbook" 
      subtitle="Complete Workflow Design" 
      icon="🧩" 
      patternLabel="Topics" 
    /> 
  ); 
}