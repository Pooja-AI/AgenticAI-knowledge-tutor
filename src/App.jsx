import { HashRouter, Routes, Route } from "react-router-dom";
import AgenticAICookbook from "./pages/AgenticAICookbook";
import Navbar from "./components/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AgenticAICookbook />} />
      </Routes>
    </HashRouter>
  );
}

export default App;