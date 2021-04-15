import { Route } from "react-router";
import CounterContainer from "./containers/CounterContainer";
import PostsListContainer from "./containers/PostsListsContainer";
import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";

function App() {
  return (
    <>
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;
