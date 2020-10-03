import React, { useState } from "react";

// Import Components
import UserList from "./components/user/UserList";
import UserForm from "./components/user/UserForm";

// Import Assets
import "./assets/css/reset.css";
import "./assets/css/App.css";

// Import Dependencies
import { gsap } from "gsap";

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

  // Function to bring in form
  const openForm = (type) => {
    gsap.to("#user-form", { y: 0, duration: 1 });
    gsap.to("#overlay", { opacity: 1, display: "block", duration: 1 });
  };

  // Function to close form
  const closeForm = (e) => {
    gsap.to("#user-form", { y: "100vh", duration: 1 });
    gsap.to("#overlay", { opacity: 0, display: "none", duration: 1 });
  };

  return (
    <div className="App">
      <UserList users={users} openForm={openForm} />

      <UserForm addNewUser={addNewUser} closeForm={closeForm} />

      <div id="overlay"></div>
    </div>
  );
}

export default App;
