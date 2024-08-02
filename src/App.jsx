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
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Education />
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Projects />
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> <Skills />
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />{" "}
      <Languages />
      <p className="text-center mt-24 mb-1 read-the-docs font-black">
        © 2024 Delaram Janfarsa
      </p>
    </>
  );
}

export default App;
