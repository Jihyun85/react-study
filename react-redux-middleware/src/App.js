import { Route } from "react-router";
import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";
import CounterContainer from "./containers/CounterContainer";

function App() {
  return (
    <>
      <CounterContainer />
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;
