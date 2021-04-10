import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Hello name="React" isSpecial={true} />
        <Hello color="blue" />
      </Wrapper>
    </div>
  );
}

export default App;
