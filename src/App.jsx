import "./App.css";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import NameHeader from "./NameHeader";
import Languages from "./Languages";

function App() {
  return (
    <>
      <NameHeader />
      <hr className="mt-10" />
      <Education />
      <Projects />
      <Skills />
      <Languages />

      <p className="text-center mt-24 mb-1 read-the-docs font-black">
        © 2024 Delaram Janfarsa
      </p>
    </>
  );
}

export default App;
