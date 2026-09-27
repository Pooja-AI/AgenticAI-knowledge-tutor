import CookbookApp from "../components/CookbookApp"; 

import Sequential from "../assets/docs/ExecutionPatterns/Sequential.md?raw";
import Parallel from "../assets/docs/ExecutionPatterns/Parallel.md?raw";
import Pipeline from "../assets/docs/ExecutionPatterns/Pipeline.md?raw";
import FanOutFanIn from "../assets/docs/ExecutionPatterns/FanOutFanIn.md?raw";
import MapReduce from "../assets/docs/ExecutionPatterns/MapReduce.md?raw";
import Router from "../assets/docs/ExecutionPatterns/Router.md?raw";
import ReflectionLoop from "../assets/docs/ExecutionPatterns/ReflectionLoop.md?raw";
import RetryPattern from "../assets/docs/ExecutionPatterns/RetryPattern.md?raw";
import FallbackPattern from "../assets/docs/ExecutionPatterns/FallbackPattern.md?raw";
import HumanInTheLoop from "../assets/docs/ExecutionPatterns/HumanInTheLoop.md?raw";

const ExecutionPatterns=[
    {
  id: "sequential",
  category: "Execution Patterns",
  title: "Sequential",
  difficulty: "Beginner",
  time: "~10 min",
  description:
    "Learn how AI agents execute tasks one after another in a predefined order.",

  tags: [
    "sequential",
    "workflow",
    "execution",
    "pipeline",
    "agent"
  ],

  concept: Sequential,

  steps: [
    {
      label: "Receive Task",
      icon: "📥",
      detail: "Accept the overall objective."
    },
    {
      label: "Execute Step 1",
      icon: "1️⃣",
      detail: "Complete the first task."
    },
    {
      label: "Execute Step 2",
      icon: "2️⃣",
      detail: "Proceed only after the previous step finishes."
    },
    {
      label: "Continue",
      icon: "➡️",
      detail: "Repeat until every task is completed."
    },
    {
      label: "Return Result",
      icon: "✅",
      detail: "Produce the final output."
    }
  ],

  code: ""
},
{
  id: "parallel",
  category: "Execution Patterns",
  title: "Parallel",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how AI agents execute multiple independent tasks simultaneously to reduce execution time.",

  tags: [
    "parallel",
    "concurrency",
    "execution",
    "multi-agent",
    "workflow"
  ],

  concept: Parallel,

  steps: [
    {
      label: "Split Tasks",
      icon: "🧩",
      detail: "Identify independent tasks."
    },
    {
      label: "Execute Concurrently",
      icon: "⚡",
      detail: "Run tasks simultaneously."
    },
    {
      label: "Monitor",
      icon: "👀",
      detail: "Track task completion."
    },
    {
      label: "Merge Results",
      icon: "📊",
      detail: "Collect outputs."
    },
    {
      label: "Return",
      icon: "🚀",
      detail: "Deliver the combined result."
    }
  ],

  code: ""
},
{
  id: "pipeline",
  category: "Execution Patterns",
  title: "Pipeline",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Understand pipeline execution where the output of one stage becomes the input of the next stage.",

  tags: [
    "pipeline",
    "workflow",
    "stages",
    "processing",
    "execution"
  ],

  concept: Pipeline,

  steps: [
    {
      label: "Input",
      icon: "📥",
      detail: "Receive raw input."
    },
    {
      label: "Stage Processing",
      icon: "⚙️",
      detail: "Execute each processing stage."
    },
    {
      label: "Transfer",
      icon: "➡️",
      detail: "Pass output to the next stage."
    },
    {
      label: "Validate",
      icon: "✔️",
      detail: "Ensure quality between stages."
    },
    {
      label: "Output",
      icon: "📤",
      detail: "Generate the final result."
    }
  ],

  code: ""
},
{
  id: "fan-out-fan-in",
  category: "Execution Patterns",
  title: "Fan-Out/Fan-In",
  difficulty: "Advanced",
  time: "~15 min",
  description:
    "Learn how tasks are distributed across multiple workers and later aggregated into one result.",

  tags: [
    "fan out",
    "fan in",
    "parallel",
    "aggregation",
    "agents"
  ],

  concept: FanOutFanIn,

  steps: [
    {
      label: "Receive Task",
      icon: "📥",
      detail: "Accept the overall request."
    },
    {
      label: "Fan-Out",
      icon: "🌐",
      detail: "Distribute subtasks to workers."
    },
    {
      label: "Parallel Execution",
      icon: "⚡",
      detail: "Workers execute independently."
    },
    {
      label: "Fan-In",
      icon: "🧩",
      detail: "Collect all outputs."
    },
    {
      label: "Finalize",
      icon: "✅",
      detail: "Return the merged result."
    }
  ],

  code: ""
},
{
  id: "map-reduce",
  category: "Execution Patterns",
  title: "Map Reduce",
  difficulty: "Advanced",
  time: "~15 min",
  description:
    "Understand how large workloads are divided into map tasks and combined using reduce operations.",

  tags: [
    "map reduce",
    "distributed",
    "parallel",
    "big data",
    "execution"
  ],

  concept: MapReduce,

  steps: [
    {
      label: "Split Data",
      icon: "📂",
      detail: "Partition the dataset."
    },
    {
      label: "Map",
      icon: "🗺️",
      detail: "Process each partition independently."
    },
    {
      label: "Shuffle",
      icon: "🔄",
      detail: "Group intermediate results."
    },
    {
      label: "Reduce",
      icon: "📊",
      detail: "Aggregate processed outputs."
    },
    {
      label: "Return",
      icon: "🏁",
      detail: "Produce the final result."
    }
  ],

  code: ""
},
{
  id: "router",
  category: "Execution Patterns",
  title: "Router",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how Router patterns direct requests to the most appropriate AI agent or workflow.",

  tags: [
    "router",
    "routing",
    "workflow",
    "agents",
    "decision"
  ],

  concept: Router,

  steps: [
    {
      label: "Receive Request",
      icon: "📩",
      detail: "Accept the incoming task."
    },
    {
      label: "Analyze",
      icon: "🔍",
      detail: "Determine task type."
    },
    {
      label: "Select Route",
      icon: "🧭",
      detail: "Choose the best agent."
    },
    {
      label: "Execute",
      icon: "⚙️",
      detail: "Run the selected workflow."
    },
    {
      label: "Respond",
      icon: "📤",
      detail: "Return the generated output."
    }
  ],

  code: ""
},
{
  id: "reflection-loop",
  category: "Execution Patterns",
  title: "Reflection Loop",
  difficulty: "Advanced",
  time: "~15 min",
  description:
    "Learn how AI agents repeatedly evaluate and improve their own outputs before producing the final response.",

  tags: [
    "reflection",
    "loop",
    "self review",
    "reasoning",
    "agents"
  ],

  concept: ReflectionLoop,

  steps: [
    {
      label: "Generate",
      icon: "✨",
      detail: "Produce an initial response."
    },
    {
      label: "Evaluate",
      icon: "🔍",
      detail: "Review the generated output."
    },
    {
      label: "Improve",
      icon: "🛠️",
      detail: "Correct identified issues."
    },
    {
      label: "Repeat",
      icon: "🔄",
      detail: "Continue until quality is acceptable."
    },
    {
      label: "Deliver",
      icon: "🚀",
      detail: "Return the refined result."
    }
  ],

  code: ""
},
{
  id: "retry-pattern",
  category: "Execution Patterns",
  title: "Retry Pattern",
  difficulty: "Intermediate",
  time: "~10 min",
  description:
    "Understand how AI agents automatically retry failed operations before reporting an error.",

  tags: [
    "retry",
    "resilience",
    "workflow",
    "fault tolerance",
    "execution"
  ],

  concept: RetryPattern,

  steps: [
    {
      label: "Execute",
      icon: "▶️",
      detail: "Perform the operation."
    },
    {
      label: "Failure?",
      icon: "❓",
      detail: "Detect execution failure."
    },
    {
      label: "Retry",
      icon: "🔄",
      detail: "Attempt execution again."
    },
    {
      label: "Success Check",
      icon: "✔️",
      detail: "Verify completion."
    },
    {
      label: "Complete",
      icon: "🏁",
      detail: "Return success or final error."
    }
  ],

  code: ""
},
{
  id: "fallback-pattern",
  category: "Execution Patterns",
  title: "Fallback Pattern",
  difficulty: "Intermediate",
  time: "~10 min",
  description:
    "Learn how AI systems switch to backup strategies when the primary execution path fails.",

  tags: [
    "fallback",
    "backup",
    "resilience",
    "workflow",
    "agents"
  ],

  concept: FallbackPattern,

  steps: [
    {
      label: "Primary Execution",
      icon: "🚀",
      detail: "Attempt the preferred solution."
    },
    {
      label: "Detect Failure",
      icon: "⚠️",
      detail: "Identify unsuccessful execution."
    },
    {
      label: "Fallback",
      icon: "🔁",
      detail: "Switch to an alternative strategy."
    },
    {
      label: "Validate",
      icon: "✔️",
      detail: "Verify fallback success."
    },
    {
      label: "Return",
      icon: "📤",
      detail: "Deliver the best available result."
    }
  ],

  code: ""
},
{
  id: "human-in-the-loop",
  category: "Execution Patterns",
  title: "Human-in-the-Loop",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how AI agents collaborate with humans by requesting approval, feedback, or decisions during execution.",

  tags: [
    "human in the loop",
    "approval",
    "feedback",
    "governance",
    "agents"
  ],

  concept: HumanInTheLoop,

  steps: [
    {
      label: "Generate Output",
      icon: "🤖",
      detail: "AI prepares a proposed solution."
    },
    {
      label: "Request Review",
      icon: "🙋",
      detail: "Send the result to a human reviewer."
    },
    {
      label: "Receive Feedback",
      icon: "💬",
      detail: "Collect approval or corrections."
    },
    {
      label: "Update",
      icon: "✏️",
      detail: "Modify the output if needed."
    },
    {
      label: "Finalize",
      icon: "✅",
      detail: "Deliver the approved result."
    }
  ],

  code: ""
},

];

export default function CWDPage() { 
  return ( 
    <CookbookApp 
      data={ExecutionPatterns}
      title="ExecutionPatterns Cookbook" 
      subtitle="Complete Workflow Design" 
      icon="🧩" 
      patternLabel="Topics" 
    /> 
  ); 
}