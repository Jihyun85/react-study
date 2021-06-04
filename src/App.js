import Users from "./Users";
import { UsersProider } from "./UserContext";

function App() {
  return (
    <UsersProider>
      <Users />
    </UsersProider>
  );
}

export default App;
