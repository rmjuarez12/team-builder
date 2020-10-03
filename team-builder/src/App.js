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
  id: "124578",
  name: "Richard Rodriguez",
  email: "richard@ilovereact.com",
  role: "Frontend Engineer",
  date: new Date(),
};

function App() {
  // Set the state that will save the user list
  const [users, setUsers] = useState([dummyData]);

  // Set a state when we are editing a user
  const [memberToEdit, setMemberToEdit] = useState(null);

  // Function to add a new user
  const addNewUser = (user) => {
    // Create an object for the new user to be inserted
    const newUser = {
      id: Date.now(),
      name: user.name,
      email: user.email,
      role: user.role,
      date: new Date(),
    };

    // Set the new user
    setUsers([...users, newUser]);
  };

  // Function to edit user
  const editUser = (user) => {
    // Create an object for the new user to be inserted
    const userToEdit = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      date: user.date,
    };

    // Reset state for memberToEdit
    setMemberToEdit(null);

    console.log(userToEdit);
  };

  // Function to delete user
  const deleteUser = (user, event) => {
    // Remove user
    const userList = users.filter((item) => item.id !== user.id);

    // Do a little animation
    const elm = event.target.closest(".user-row");
    gsap.to(elm, { x: "-100vw", duration: 1 });

    // Set the new list after animation finishes
    setTimeout(() => {
      setUsers(userList);
    }, 1000);
  };

  // Function to bring in form
  const openForm = (user) => {
    if (user !== undefined) {
      setMemberToEdit(user);
    } else {
      setMemberToEdit(null);
    }

    // Animations for the overlay and form
    gsap.to("#user-form", { y: 0, duration: 1 });
    gsap.to("#overlay", { opacity: 1, display: "block", duration: 1 });
  };

  // Function to close form
  const closeForm = (e) => {
    // Animations for the overlay and form
    gsap.to("#user-form", { y: "100vh", duration: 1 });
    gsap.to("#overlay", { opacity: 0, display: "none", duration: 1 });
  };

  return (
    <div className="App">
      <UserList users={users} openForm={openForm} deleteUser={deleteUser} />

      <UserForm
        addNewUser={addNewUser}
        closeForm={closeForm}
        memberToEdit={memberToEdit}
        editUser={editUser}
      />

      <div id="overlay"></div>
    </div>
  );
}

export default App;
