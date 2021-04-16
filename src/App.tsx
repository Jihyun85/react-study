import Greetings from "./Greeting";

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello!`);
  };
  return (
    <div className="App">
      <Greetings name="jihyun" optional="nice to meet you" onClick={onClick} />
    </div>
  );
}

export default App;
