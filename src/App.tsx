import { useEffect } from "react";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import { Contact } from "./components/contact/Contact";
import { EducationHeader } from "./components/education/EducationHeader";
import { EducationTimeline } from "./components/education/EducationTimeline";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/hero/Navbar";
import { Screen } from "./components/terminal/Screen";

function App() {
  useEffect(() => {
    sal({
      threshold: 0.1,
      once: false,
      root: null,
    });
  }, []);

  return (
    <div>
      <div className="fixed-bg fixed inset-0 -z-1 bg-(--background-color)"></div>
      <Navbar />
      <Hero />
      <Screen />
      <EducationHeader />
      <EducationTimeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
