import React, { useState } from "react";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [showLanding, setShowLanding] = useState(true);

  const handleStartClick = () => {
    setShowLanding(false);
    setTimeout(() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="App">
      {showLanding && <Landing onStartClick={handleStartClick} />}
      {!showLanding && (
        <>
          <About />
          <Projects />
          <Experience />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
