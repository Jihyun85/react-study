import TodoContainer from "./containers/TodoContainer";
import TodoProvider from "./TodoProvider";

function App() {
  return (
    <TodoProvider>
      <TodoContainer />
    </TodoProvider>
  );
}

export default App;
