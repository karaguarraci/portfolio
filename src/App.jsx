import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/aboutme" element={<AboutMe />} /> */}
        {/* <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
