import Counter from "./Counter";
import CounterContext from "./contexts/sample";


function App() {
  return (
    <div className="App">
      <CounterContext.Provider>
        <Counter />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
