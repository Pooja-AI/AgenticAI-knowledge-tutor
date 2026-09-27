import CookbookApp from "../components/CookbookApp"; 

import MultiAgentArchitecture from "../assets/docs/MultiAgent/MultiAgentArchitecture.md?raw";
import CoordinatorAgent from "../assets/docs/MultiAgent/CoordinatorAgent.md?raw";
import WorkerAgents from "../assets/docs/MultiAgent/WorkerAgents.md?raw";
import SupervisorAgent from "../assets/docs/MultiAgent/SupervisorAgent.md?raw";
import HierarchicalAgents from "../assets/docs/MultiAgent/HierarchicalAgents.md?raw";
import SwarmAgents from "../assets/docs/MultiAgent/SwarmAgents.md?raw";
import PeerToPeerAgents from "../assets/docs/MultiAgent/PeerToPeerAgents.md?raw";
import AgentCollaboration from "../assets/docs/MultiAgent/AgentCollaboration.md?raw";
import AgentNegotiation from "../assets/docs/MultiAgent/AgentNegotiation.md?raw";
import AgentConsensus from "../assets/docs/MultiAgent/AgentConsensus.md?raw";

const MultiAgent=[
    {
  id: "multi-agent-architecture",
  category: "Multi-Agent Systems",
  title: "Multi-Agent Architecture",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how multiple AI agents collaborate, communicate, and coordinate to solve complex tasks efficiently.",

  tags: [
    "multi agent",
    "architecture",
    "coordination",
    "agent systems",
    "collaboration"
  ],

  concept: MultiAgentArchitecture,

  steps: [
    {
      label: "Define Agents",
      icon: "🤖",
      detail: "Identify specialized agents for different responsibilities."
    },
    {
      label: "Communication",
      icon: "📡",
      detail: "Enable information exchange between agents."
    },
    {
      label: "Coordination",
      icon: "🎯",
      detail: "Assign tasks and synchronize execution."
    },
    {
      label: "Execution",
      icon: "⚙️",
      detail: "Agents perform assigned tasks independently."
    },
    {
      label: "Aggregation",
      icon: "📊",
      detail: "Combine outputs into a final solution."
    }
  ],

  code: ""
},

{
  id: "coordinator-agent",
  category: "Multi-Agent Systems",
  title: "Coordinator Agent",
  difficulty: "Beginner",
  time: "~12 min",
  description:
    "Understand how a Coordinator Agent distributes work, manages communication, and orchestrates multiple AI agents.",

  tags: [
    "coordinator",
    "orchestration",
    "task allocation",
    "workflow",
    "agents"
  ],

  concept: CoordinatorAgent,

  steps: [
    {
      label: "Receive Task",
      icon: "📥",
      detail: "Accept the user's request."
    },
    {
      label: "Split Tasks",
      icon: "🧩",
      detail: "Break work into smaller subtasks."
    },
    {
      label: "Assign Agents",
      icon: "🤝",
      detail: "Allocate subtasks to specialized agents."
    },
    {
      label: "Monitor",
      icon: "👀",
      detail: "Track execution progress."
    },
    {
      label: "Merge Results",
      icon: "📄",
      detail: "Combine outputs into one response."
    }
  ],

  code: ""
},

{
  id: "worker-agents",
  category: "Multi-Agent Systems",
  title: "Worker Agents",
  difficulty: "Beginner",
  time: "~10 min",
  description:
    "Learn how Worker Agents execute specialized tasks assigned by a coordinator or supervisor.",

  tags: [
    "worker agents",
    "execution",
    "specialization",
    "tasks",
    "multi-agent"
  ],

  concept: WorkerAgents,

  steps: [
    {
      label: "Receive Task",
      icon: "📩",
      detail: "Accept assigned work."
    },
    {
      label: "Process",
      icon: "⚙️",
      detail: "Perform specialized reasoning or tool execution."
    },
    {
      label: "Validate",
      icon: "✅",
      detail: "Verify task completion."
    },
    {
      label: "Return Result",
      icon: "📤",
      detail: "Send output back to coordinator."
    },
    {
      label: "Wait",
      icon: "⏳",
      detail: "Remain idle until the next assignment."
    }
  ],

  code: ""
},

{
  id: "supervisor-agent",
  category: "Multi-Agent Systems",
  title: "Supervisor Agent",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Explore how Supervisor Agents oversee execution, validate outputs, and maintain workflow quality.",

  tags: [
    "supervisor",
    "quality control",
    "validation",
    "monitoring",
    "agents"
  ],

  concept: SupervisorAgent,

  steps: [
    {
      label: "Observe",
      icon: "👁️",
      detail: "Monitor worker agent execution."
    },
    {
      label: "Review",
      icon: "📋",
      detail: "Evaluate generated outputs."
    },
    {
      label: "Detect Issues",
      icon: "⚠️",
      detail: "Identify failures or inconsistencies."
    },
    {
      label: "Correct",
      icon: "🔄",
      detail: "Trigger retries or improvements."
    },
    {
      label: "Approve",
      icon: "✔️",
      detail: "Approve final results."
    }
  ],

  code: ""
},

{
  id: "hierarchical-agents",
  category: "Multi-Agent Systems",
  title: "Hierarchical Agents",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Understand hierarchical agent structures where higher-level agents coordinate lower-level specialized agents.",

  tags: [
    "hierarchy",
    "manager",
    "worker",
    "coordination",
    "agents"
  ],

  concept: HierarchicalAgents,

  steps: [
    {
      label: "Top-Level Goal",
      icon: "🎯",
      detail: "Manager agent receives the objective."
    },
    {
      label: "Delegate",
      icon: "📤",
      detail: "Assign work to subordinate agents."
    },
    {
      label: "Execute",
      icon: "⚙️",
      detail: "Worker agents complete assigned tasks."
    },
    {
      label: "Review",
      icon: "📊",
      detail: "Manager evaluates outputs."
    },
    {
      label: "Deliver",
      icon: "📦",
      detail: "Return the integrated result."
    }
  ],

  code: ""
},

{
  id: "swarm-agents",
  category: "Multi-Agent Systems",
  title: "Swarm Agents",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Learn how decentralized AI agents cooperate collectively without a central controller.",

  tags: [
    "swarm",
    "distributed",
    "collective",
    "coordination",
    "agents"
  ],

  concept: SwarmAgents,

  steps: [
    {
      label: "Shared Goal",
      icon: "🎯",
      detail: "All agents pursue a common objective."
    },
    {
      label: "Local Decisions",
      icon: "🧠",
      detail: "Each agent acts independently."
    },
    {
      label: "Communication",
      icon: "📡",
      detail: "Exchange local information."
    },
    {
      label: "Collective Behavior",
      icon: "🐝",
      detail: "Global intelligence emerges."
    },
    {
      label: "Goal Achieved",
      icon: "🏆",
      detail: "Complete the shared objective."
    }
  ],

  code: ""
},

{
  id: "peer-to-peer-agents",
  category: "Multi-Agent Systems",
  title: "Peer-to-Peer Agents",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Explore decentralized agent communication where every agent communicates as an equal without central control.",

  tags: [
    "peer to peer",
    "distributed",
    "communication",
    "decentralized",
    "agents"
  ],

  concept: PeerToPeerAgents,

  steps: [
    {
      label: "Discover Peers",
      icon: "🔍",
      detail: "Identify available agents."
    },
    {
      label: "Exchange Messages",
      icon: "💬",
      detail: "Communicate directly."
    },
    {
      label: "Share Knowledge",
      icon: "📚",
      detail: "Exchange intermediate results."
    },
    {
      label: "Coordinate",
      icon: "🤝",
      detail: "Collaboratively solve the task."
    },
    {
      label: "Finalize",
      icon: "✅",
      detail: "Produce the final outcome."
    }
  ],

  code: ""
},

{
  id: "agent-collaboration",
  category: "Multi-Agent Systems",
  title: "Agent Collaboration",
  difficulty: "Intermediate",
  time: "~12 min",
  description:
    "Learn how AI agents cooperate, exchange knowledge, and jointly solve complex tasks.",

  tags: [
    "collaboration",
    "teamwork",
    "agents",
    "coordination",
    "communication"
  ],

  concept: AgentCollaboration,

  steps: [
    {
      label: "Share Goal",
      icon: "🎯",
      detail: "Establish a common objective."
    },
    {
      label: "Assign Roles",
      icon: "👥",
      detail: "Define responsibilities."
    },
    {
      label: "Communicate",
      icon: "📨",
      detail: "Exchange information."
    },
    {
      label: "Integrate",
      icon: "🧩",
      detail: "Combine intermediate outputs."
    },
    {
      label: "Deliver",
      icon: "🚀",
      detail: "Return the collaborative solution."
    }
  ],

  code: ""
},
{
  id: "agent-negotiation",
  category: "Multi-Agent Systems",
  title: "Agent Negotiation",
  difficulty: "Advanced",
  time: "~15 min",
  description:
    "Understand how AI agents negotiate resources, priorities, and decisions to achieve shared objectives.",

  tags: [
    "negotiation",
    "decision making",
    "coordination",
    "multi-agent",
    "consensus"
  ],

  concept: AgentNegotiation,

  steps: [
    {
      label: "Propose",
      icon: "💡",
      detail: "Suggest possible solutions."
    },
    {
      label: "Evaluate",
      icon: "⚖️",
      detail: "Assess proposals."
    },
    {
      label: "Negotiate",
      icon: "🤝",
      detail: "Resolve conflicts."
    },
    {
      label: "Agree",
      icon: "✅",
      detail: "Reach mutual agreement."
    },
    {
      label: "Execute",
      icon: "🚀",
      detail: "Implement the negotiated plan."
    }
  ],

  code: ""
},
{
  id: "agent-consensus",
  category: "Multi-Agent Systems",
  title: "Agent Consensus",
  difficulty: "Advanced",
  time: "~15 min",
  description:
    "Learn how multiple AI agents reach a common decision through voting, agreement, or consensus algorithms.",

  tags: [
    "consensus",
    "voting",
    "agreement",
    "decision",
    "multi-agent"
  ],

  concept: AgentConsensus,

  steps: [
    {
      label: "Collect Opinions",
      icon: "📝",
      detail: "Gather responses from all agents."
    },
    {
      label: "Compare",
      icon: "📊",
      detail: "Evaluate different viewpoints."
    },
    {
      label: "Vote",
      icon: "🗳️",
      detail: "Determine the preferred solution."
    },
    {
      label: "Consensus",
      icon: "🤝",
      detail: "Reach a common agreement."
    },
    {
      label: "Finalize",
      icon: "🏁",
      detail: "Publish the agreed result."
    }
  ],

  code: ""
},

];

export default function CWDPage() { 
  return ( 
    <CookbookApp 
      data={MultiAgent}
      title="MultiAgent Cookbook" 
      subtitle="Complete Workflow Design" 
      icon="🧩" 
      patternLabel="Topics" 
    /> 
  ); 
}