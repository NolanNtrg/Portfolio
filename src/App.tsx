import { Mail } from "./components/contact/mail";
import { Hero } from "./components/hero/hero";
import { Screen } from "./components/terminal/screen";

function App() {
  return (
    <div className="w-full">
      <div className="min-h-[85vh] flex justify-center items-center pt-30">
        <Hero />
      </div>
      <Screen />
      <Mail />
    </div>
  );
}

export default App;
