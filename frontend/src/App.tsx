import CounterComponent from "./components/CounterComponent";
import LanguageComponent from "./components/LanguageComponent";

function App() {
  return (
    <>
    <div className="flex flex-col gap-10 items-center">

      <CounterComponent />
      <LanguageComponent />
    </div>
    </>
  );
}

export default App;
