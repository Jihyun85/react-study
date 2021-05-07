import Counter from "./Counter";
import { CounterProvider } from "./contexts/CounterProvider";

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
