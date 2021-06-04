import Counter from "./Counter";
import Greetings from "./Greeting";
import MyForm from "./myForm";
import ReducerSample from "./ReducerSample";
import { SampleProvider } from "./SampleContext";

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
  );
}

export default App;
