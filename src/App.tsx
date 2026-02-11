import "./App.css";
import { Hero } from "./components/hero/hero";
import { Screen } from "./components/terminal/screen";

function App() {
  return (
    <>
      <Hero />
      <div className="absolute top-full left-0 flex items-center justify-center w-screen">
        <Screen />
      </div>
    </>
  );
}

export default App;
