import CookbookApp from "../components/CookbookApp"; 

import MCP from "../assets/docs/communication/MCP.md?raw";
import A2A from "../assets/docs/communication/A2A.md?raw";
import ACP from "../assets/docs/communication/ACP.md?raw";
import OpenAPI from "../assets/docs/communication/OpenAPI.md?raw";
import JSONRPC from "../assets/docs/communication/JSONRPC.md?raw";
import REST from "../assets/docs/communication/REST.md?raw";
import GRPC from "../assets/docs/communication/gRPC.md?raw";
import WebSockets from "../assets/docs/communication/WebSockets.md?raw";
import EventStreaming from "../assets/docs/communication/EventStreaming.md?raw";
import MessageQueues from "../assets/docs/communication/MessageQueues.md?raw";

const AgentCommunication = [
    {
  id: "mcp",
  category: "Communication Protocols",
  title: "Model Context Protocol (MCP)",
  difficulty: "Intermediate",
  time: "~20 min",
  description:
    "Learn how Model Context Protocol (MCP) enables AI agents to securely discover, access, and interact with external tools, resources, and enterprise systems through a standardized communication protocol.",

  tags: [
    "mcp",
    "model context protocol",
    "communication",
    "tools",
    "agent",
    "protocol"
  ],

  concept: MCP,

  steps: [
    {
      label: "Receive Request",
      icon: "👤",
      detail: "The AI agent receives a user request requiring external capabilities."
    },
    {
      label: "Discover Tools",
      icon: "🔍",
      detail: "The MCP client discovers available tools and resources from connected MCP servers."
    },
    {
      label: "Select Tool",
      icon: "🛠️",
      detail: "The agent selects the most appropriate tool based on the user's request."
    },
    {
      label: "Execute Tool",
      icon: "⚙️",
      detail: "The MCP server executes the requested operation and retrieves the required information."
    },
    {
      label: "Generate Response",
      icon: "✅",
      detail: "The AI agent uses the tool output to generate an accurate response."
    }
  ],

  code: ""
},
{
  id: "a2a",
  category: "Communication Protocols",
  title: "Agent-to-Agent (A2A)",
  difficulty: "Intermediate",
  time: "~20 min",
  description:
    "Learn how the Agent-to-Agent (A2A) protocol enables multiple AI agents to communicate, collaborate, delegate tasks, and solve complex problems through structured interactions.",

  tags: [
    "a2a",
    "agent communication",
    "multi-agent",
    "collaboration",
    "protocol",
    "coordination"
  ],

  concept: A2A,

  steps: [
    {
      label: "Receive Task",
      icon: "👤",
      detail: "A coordinator agent receives the user's request and analyzes the required work."
    },
    {
      label: "Delegate Tasks",
      icon: "📤",
      detail: "The coordinator distributes subtasks to specialized worker agents."
    },
    {
      label: "Agent Collaboration",
      icon: "🤝",
      detail: "Worker agents communicate, exchange information, and execute their assigned tasks."
    },
    {
      label: "Collect Results",
      icon: "📥",
      detail: "The coordinator gathers outputs from all participating agents."
    },
    {
      label: "Generate Response",
      icon: "✅",
      detail: "The coordinator combines the results into a complete response for the user."
    }
  ],

  code: ""
},
{
  id: "acp",
  category: "Communication Protocols",
  title: "Agent Communication Protocol (ACP)",
  difficulty: "Intermediate",
  time: "~20 min",
  description:
    "Learn how Agent Communication Protocol (ACP) standardizes message exchange between AI agents, enabling reliable, secure, and interoperable communication in multi-agent systems.",

  tags: [
    "acp",
    "agent communication",
    "multi-agent",
    "messaging",
    "protocol",
    "coordination"
  ],

  concept: ACP,

  steps: [
    {
      label: "Create Message",
      icon: "✉️",
      detail: "The sending agent creates a structured communication message containing the task or request."
    },
    {
      label: "Transmit Message",
      icon: "📡",
      detail: "The message is transmitted through the ACP communication layer to the target agent."
    },
    {
      label: "Process Request",
      icon: "⚙️",
      detail: "The receiving agent validates the message and executes the requested task."
    },
    {
      label: "Send Response",
      icon: "📤",
      detail: "The receiving agent returns the execution result or status to the sender."
    },
    {
      label: "Complete Collaboration",
      icon: "✅",
      detail: "The initiating agent processes the response and continues the workflow or delivers the final result."
    }
  ],

  code: ""
},
{
  id: "openapi",
  category: "Communication Protocols",
  title: "OpenAPI",
  difficulty: "Beginner",
  time: "~20 min",
  description:
    "Learn how OpenAPI provides a standardized specification for REST APIs, enabling AI agents to automatically discover API endpoints, understand request and response formats, and integrate with external services.",

  tags: [
    "openapi",
    "api",
    "rest",
    "api specification",
    "communication",
    "integration"
  ],

  concept: OpenAPI,

  steps: [
    {
      label: "Read API Specification",
      icon: "📖",
      detail: "The AI agent reads the OpenAPI specification to understand available endpoints and operations."
    },
    {
      label: "Discover Endpoint",
      icon: "🔍",
      detail: "The agent identifies the appropriate API endpoint based on the user's request."
    },
    {
      label: "Build Request",
      icon: "📝",
      detail: "The required parameters, headers, and request body are prepared according to the specification."
    },
    {
      label: "Call API",
      icon: "🌐",
      detail: "The agent sends the HTTP request to the REST API and receives the response."
    },
    {
      label: "Generate Response",
      icon: "✅",
      detail: "The returned API data is processed and presented as a user-friendly response."
    }
  ],

  code: ""
},
{
  id: "json-rpc",
  category: "Communication Protocols",
  title: "JSON-RPC",
  difficulty: "Intermediate",
  time: "~20 min",
  description:
    "Learn how JSON-RPC enables AI agents and distributed applications to invoke remote methods using lightweight JSON-based request and response messages.",

  tags: [
    "json-rpc",
    "rpc",
    "remote procedure call",
    "json",
    "communication",
    "api"
  ],

  concept: JSONRPC,

  steps: [
    {
      label: "Create Request",
      icon: "📝",
      detail: "The client prepares a JSON-RPC request containing the method name, parameters, and request ID."
    },
    {
      label: "Send Request",
      icon: "📤",
      detail: "The JSON-RPC request is transmitted to the remote server over HTTP or another supported transport."
    },
    {
      label: "Execute Method",
      icon: "⚙️",
      detail: "The server identifies the requested method, validates the parameters, and executes the remote procedure."
    },
    {
      label: "Return Response",
      icon: "📥",
      detail: "The server sends a structured JSON-RPC response containing the result or an error message."
    },
    {
      label: "Process Result",
      icon: "✅",
      detail: "The client receives the response and presents the final output to the user."
    }
  ],

  code: ""
},
{
  id: "rest",
  category: "Communication Protocols",
  title: "REST (Representational State Transfer)",
  difficulty: "Beginner",
  time: "~20 min",
  description:
    "Learn how REST APIs enable AI agents and applications to communicate with external services using standard HTTP methods to access and manipulate resources.",

  tags: [
    "rest",
    "http",
    "api",
    "communication",
    "web services",
    "integration"
  ],

  concept: REST,

  steps: [
    {
      label: "Identify Resource",
      icon: "🎯",
      detail: "The AI agent determines which resource or endpoint is required to fulfill the user's request."
    },
    {
      label: "Create HTTP Request",
      icon: "📝",
      detail: "The agent constructs an HTTP request using methods like GET, POST, PUT, PATCH, or DELETE."
    },
    {
      label: "Call REST API",
      icon: "🌐",
      detail: "The request is sent to the REST server, which processes the requested operation."
    },
    {
      label: "Receive Response",
      icon: "📥",
      detail: "The server returns a structured response, typically in JSON format, along with an HTTP status code."
    },
    {
      label: "Generate Answer",
      icon: "✅",
      detail: "The AI agent interprets the API response and presents a meaningful result to the user."
    }
  ],

  code: ""
},
{
  id: "grpc",
  category: "Communication Protocols",
  title: "gRPC (Google Remote Procedure Call)",
  difficulty: "Intermediate",
  time: "~20 min",
  description:
    "Learn how gRPC enables high-performance communication between AI agents, microservices, and distributed systems using Protocol Buffers and HTTP/2.",

  tags: [
    "grpc",
    "rpc",
    "protobuf",
    "http2",
    "communication",
    "microservices"
  ],

  concept: GRPC,

  steps: [
    {
      label: "Define Service",
      icon: "📄",
      detail: "The service and message schemas are defined using Protocol Buffers (.proto files)."
    },
    {
      label: "Generate Client & Server",
      icon: "⚙️",
      detail: "gRPC automatically generates client and server code from the Protocol Buffer definitions."
    },
    {
      label: "Invoke Remote Method",
      icon: "📤",
      detail: "The client sends a strongly typed request to invoke a remote procedure on the server."
    },
    {
      label: "Process Request",
      icon: "🔄",
      detail: "The server executes the requested method and returns a compact binary response over HTTP/2."
    },
    {
      label: "Return Result",
      icon: "✅",
      detail: "The client receives the response, deserializes it, and presents the final result to the user."
    }
  ],

  code: ""
},
{
  id: "websockets",
  category: "Communication Protocols",
  title: "WebSockets",
  difficulty: "Intermediate",
  time: "~20 min",
  description:
    "Learn how WebSockets enable persistent, full-duplex communication between AI agents, applications, and servers for real-time data exchange and low-latency interactions.",

  tags: [
    "websockets",
    "real-time",
    "communication",
    "streaming",
    "full duplex",
    "networking"
  ],

  concept: WebSockets,

  steps: [
    {
      label: "Establish Connection",
      icon: "🤝",
      detail: "The client initiates a WebSocket handshake to establish a persistent connection with the server."
    },
    {
      label: "Maintain Connection",
      icon: "🔗",
      detail: "A continuous bidirectional communication channel remains open between the client and server."
    },
    {
      label: "Exchange Messages",
      icon: "💬",
      detail: "Both the client and server can send and receive messages independently in real time."
    },
    {
      label: "Process Events",
      icon: "⚡",
      detail: "Incoming messages are processed immediately, enabling live updates and event-driven communication."
    },
    {
      label: "Close Connection",
      icon: "✅",
      detail: "The connection is gracefully closed after communication is complete or when either side disconnects."
    }
  ],

  code: ""
},
{
  id: "event-streaming",
  category: "Communication Protocols",
  title: "Event Streaming",
  difficulty: "Intermediate",
  time: "~20 min",
  description:
    "Learn how Event Streaming enables AI agents and distributed systems to process continuous streams of events in real time using event-driven architectures and message brokers.",

  tags: [
    "event streaming",
    "events",
    "kafka",
    "real-time",
    "communication",
    "pub-sub"
  ],

  concept: EventStreaming,

  steps: [
    {
      label: "Generate Event",
      icon: "📢",
      detail: "A producer creates an event whenever an important business action or system activity occurs."
    },
    {
      label: "Publish Event",
      icon: "📤",
      detail: "The event is published to an event broker such as Kafka, Pulsar, or Event Hubs."
    },
    {
      label: "Distribute Events",
      icon: "📡",
      detail: "The broker distributes the event to all subscribed consumers in real time."
    },
    {
      label: "Process Event",
      icon: "⚙️",
      detail: "Consumers independently process the event and perform their respective tasks."
    },
    {
      label: "Trigger Workflows",
      icon: "✅",
      detail: "Processed events initiate downstream actions, analytics, notifications, or AI workflows."
    }
  ],

  code: ""
},
{
  id: "message-queues",
  category: "Communication Protocols",
  title: "Message Queues",
  difficulty: "Intermediate",
  time: "~20 min",
  description:
    "Learn how Message Queues enable reliable asynchronous communication between AI agents, applications, and distributed services by decoupling message producers from consumers.",

  tags: [
    "message queue",
    "rabbitmq",
    "sqs",
    "asynchronous",
    "messaging",
    "communication"
  ],

  concept: MessageQueues,

  steps: [
    {
      label: "Produce Message",
      icon: "📤",
      detail: "A producer creates a task or event and places it into the message queue."
    },
    {
      label: "Store Message",
      icon: "📦",
      detail: "The message queue safely stores the message until a consumer is ready to process it."
    },
    {
      label: "Consume Message",
      icon: "📥",
      detail: "A consumer retrieves the message from the queue and begins processing the assigned task."
    },
    {
      label: "Acknowledge Processing",
      icon: "✔️",
      detail: "After successful execution, the consumer sends an acknowledgment to remove the message from the queue."
    },
    {
      label: "Complete Workflow",
      icon: "✅",
      detail: "The processed result is delivered to downstream services or returned to the AI agent for further actions."
    }
  ],

  code: ""
},


];

export default function CWDPage() { 
  return ( 
    <CookbookApp 
      data={AgentCommunication}
      title="AgentCommunication Cookbook" 
      subtitle="Complete Workflow Design" 
      icon="🧩" 
      patternLabel="Topics" 
    /> 
  ); 
}