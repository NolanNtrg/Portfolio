import { Mail } from "./components/contact/mail";
import { EducationHeader } from "./components/education/educationHeader";
import { EducationTimeline } from "./components/education/educationTimeline";
import { Hero } from "./components/hero/hero";
import { Screen } from "./components/terminal/screen";

function App() {
  return (
    <div>
      <div className="transition-all duration-300 ease-in-out fixed-bg fixed top-0 left-0 -z-1 h-screen w-full bg-(--background-color)"></div>
      <Hero />
      <Screen />
      <EducationHeader />
      <EducationTimeline />
      <Mail />
    </div>
  );
}

export default App;
