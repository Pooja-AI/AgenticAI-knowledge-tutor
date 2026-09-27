import CookbookApp from "../components/CookbookApp"; 
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
    
    export default function CWDPage() { 
      return ( 
        <CookbookApp 
          data={AgenticAIPlanning}
          title="AgenticAIPlanning Cookbook" 
          subtitle="Complete Workflow Design" 
          icon="🧩" 
          patternLabel="Topics" 
        /> 
      ); 
    }