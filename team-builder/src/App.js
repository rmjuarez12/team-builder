import React, { useState } from "react";

// Import Components
import UserList from "./components/user/UserList";
import UserForm from "./components/user/UserForm";

// Import Assets
import "./assets/css/App.css";

function App() {
  // Set the state that will save the user list
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <UserForm />

      <UserList users={users} />
    </div>
  );
}

export default App;
