import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="education" element={<Education />} />
      </Routes>
    </div>
  );
}

export default App;
