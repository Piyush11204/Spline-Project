
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Homepage";
import Rocket from "./components/Rocket";
import Globe from "./components/Globe";
import Computer from "./components/Computer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Globe />} />
        <Route path="/rocket" element={<Rocket />} />
        <Route path="/globe" element={<Home />} />
        <Route path="/computer" element={<Computer/>} />
      </Routes>
    </Router>
  );
}

export default App;
