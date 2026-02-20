import { Contact } from "./components/contact/contact";
import { EducationHeader } from "./components/education/educationHeader";
import { EducationTimeline } from "./components/education/educationTimeline";
import { Footer } from "./components/footer/footer";
import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/hero/navbar";
import { Screen } from "./components/terminal/screen";

function App() {
  return (
    <div>
      <div className="transition-all duration-300 ease-in-out fixed-bg fixed top-0 left-0 -z-1 h-screen w-full bg-(--background-color)"></div>
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
