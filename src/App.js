import { Route } from "react-router";
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
