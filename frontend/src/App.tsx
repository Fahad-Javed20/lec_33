import CounterComponent from "./components/CounterComponent";
import LanguageComponent from "./components/LanguageComponent";
import Button from "./ui/Button";


function App() {
  return (
    <>
    <div className="flex flex-col gap-10 items-center mt-20">
      <Button />
      <CounterComponent />
      <LanguageComponent />
    </div>
    </>
  );
}

export default App;
