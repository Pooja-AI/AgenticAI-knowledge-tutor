import { HashRouter, Routes, Route } from "react-router-dom";
import AgenticAICookbook from "./pages/AgenticAICookbook";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AgenticAICookbook />} />
      </Routes>
    </HashRouter>
  );
}

export default App;