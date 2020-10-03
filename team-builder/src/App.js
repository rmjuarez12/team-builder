import React, { useState } from "react";

// Import Components
import UserList from "./components/user/UserList";
import UserForm from "./components/user/UserForm";

// Import Assets
import "./assets/css/App.css";

const dummyData = {
  name: "Richard Rodriguez",
  email: "richard@ilovereact.com",
  role: "Frontend Engineer",
};

function App() {
  // Set the state that will save the user list
  const [users, setUsers] = useState([dummyData]);

  // Function to add a new user
  const addNewUser = (user) => {
    const newUser = {
      id: Date.now(),
      name: user.name,
      email: user.email,
      role: user.role,
      "date-added": new Date(),
    };

    setUsers([...users, newUser]);
  };

  return (
    <div className="App">
      <UserForm addNewUser={addNewUser} />

      <UserList users={users} />
    </div>
  );
}

export default App;
