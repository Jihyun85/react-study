// import Counter from "./components/Counter";
import { TodoProvider } from "./contexts/TodoProvider";
import TodoContainer from "./containers/TodoContainer";

function App() {
  return (
    <TodoProvider>
      {/* <Counter /> */}
      <TodoContainer />
    </TodoProvider>
  );
}

export default App;
