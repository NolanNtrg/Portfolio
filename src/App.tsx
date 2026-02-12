import "./App.css";
import { Mail } from "./components/contact/mail";
import { Hero } from "./components/hero/hero";
import { Screen } from "./components/terminal/screen";

function App() {
  return (
    <div className="w-full">
      <div className="min-h-screen flex justify-center items-center">
        <Hero />
      </div>
      <Screen />
      <Mail />
    </div>
  );
}

export default App;
