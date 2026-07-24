import { HashRouter, Routes, Route } from "react-router-dom";

import AgentComponents from "./pages/AgentComponents"
import AgenticAICookbook from "./pages/AgenticAICookbook";
import AgenticAIPlanning from "./pages/AgenticAIPlanning"
import AgenticAIMemory from "./pages/AgenticAIMemory"
import AgentToolUsage from "./pages/AgentToolUsage"
import AgentReasoingTechniques from "./pages/AgentReasoningTechniques"
import AgentCommunication from "./pages/AgentCommunication"
import AgentContextEngineering from "./pages/AgentContextEngineering"
import MultiAgent from "./pages/MultiAgent"
import Navbar from "./components/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AgentComponents />} />
        <Route path="/AgenticAICookbook" element={<AgenticAICookbook />} />
        <Route path="/AgenticAIPlanning" element={<AgenticAIPlanning/>} />
        <Route path="/AgenticAIMemory" element={<AgenticAIMemory/>} />
        <Route path="/AgentToolUsage" element={<AgentToolUsage/>} />
        <Route path="/AgentReasoingTechniques" element={<AgentReasoingTechniques/>} />
        <Route path="/AgentCommunication" element={<AgentCommunication/>} />
        <Route path="/AgentContextEngineering" element={<AgentContextEngineering/>} />   
        <Route path="/MultiAgent" element={<MultiAgent />} />

         

        
      </Routes>
    </HashRouter>
  );
}

export default App;