import { Contact } from "./components/contact/Contact";
import { EducationHeader } from "./components/education/EducationHeader";
import { EducationTimeline } from "./components/education/EducationTimeline";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/hero/Navbar";
import { Screen } from "./components/terminal/Screen";

function App() {
  return (
    <div>
      <div className="fixed-bg fixed top-0 left-0 -z-1 h-screen w-full bg-(--background-color)"></div>
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
