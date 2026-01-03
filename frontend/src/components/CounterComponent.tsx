import useCounterStore from "../stores/useCounterStore";
import useLanguageStore from "../stores/useLanguageStore";

const CounterComponent = () => {
  const { count, increment, decrement, reset } = useCounterStore();
  const {language,setLanguage} = useLanguageStore();

  return (
    <div className="flex flex-col gap-5 items-center mt-10">
      <div>Count: {count}</div>
      <div className="flex gap-2">
        <button
          className="px-3 bg-green-500 py-1 text-white font-bold"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="px-3 bg-red-500 py-1 text-white font-bold"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="px-3 bg-gray-500 py-1 text-white font-bold"
          onClick={reset}
        >
          Reset
        </button>

    </div>

    <div>Language: {language}</div>
        <div className=" flex gap-2">
          <button
            className="px-3 bg-blue-500 py-1 text-white font-bold"
            onClick={() => setLanguage("en")}
          >
            English
          </button>
          <button
            className="px-3 bg-blue-500 py-1 text-white font-bold"
            onClick={() => setLanguage("fr")}
          >
            French
          </button>
        </div>
      </div>
  );
};

export default CounterComponent;
