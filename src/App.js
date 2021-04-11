import "./App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import TechSkills from "./components/TechSkills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <TechSkills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
