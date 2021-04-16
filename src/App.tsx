import Counter from "./Counter";
import Greetings from "./Greeting";
import MyForm from "./myForm";
import ReducerSample from "./ReducerSample";

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return <ReducerSample />;
}

export default App;
