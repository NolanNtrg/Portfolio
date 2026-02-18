import { Mail } from "./components/contact/mail";
import { EducationContainer } from "./components/education/educationContainer";
import { EducationHeader } from "./components/education/educationHeader";
import { Hero } from "./components/hero/hero";
import { Screen } from "./components/terminal/screen";

function App() {
  return (
    <div>
      <Hero />
      <Screen />
      <EducationHeader />
      <EducationContainer />
      <Mail />
    </div>
  );
}

export default App;
