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
  id: 124578,
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

  // Add a response message
  const [response, setResponse] = useState(null);

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

    // Set the response message
    setResponse(`New User Added Successfully`);
  };

  // Function to edit user
  const editUser = (user) => {
    // Create an object for the new user to be inserted
    const editedUserList = users.map((item) => {
      // New user data
      const userToEdit = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        date: user.date,
      };

      if (item.id === user.id) {
        return userToEdit;
      } else {
        return item;
      }
    });

    // Reset state for memberToEdit
    setMemberToEdit(null);

    // Set the new user list
    setUsers(editedUserList);

    // Set the response
    setResponse(`User ${user.name} has been edited`);
  };

  // Function to delete user
  const deleteUser = (user, event) => {
    // Remove user
    const userList = users.filter((item) => item.id !== user.id);

    // Clear response first
    setResponse(null);

    // Do a little animation
    const elm = event.target.closest(".user-row");
    gsap.to(elm, { scale: 0.8, opacity: 0.5, duration: 0.3 });
    gsap.to(elm, { x: "-100vw", duration: 1, delay: 0.3 });

    // Set the new list after animation finishes
    setTimeout(() => {
      gsap.to(".user-row", { scale: 1, opacity: 1, x: 0, duration: 0 });
      setUsers(userList);

      setResponse(`User ${user.name} has been deleted`);
    }, 1350);
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
      <UserList users={users} openForm={openForm} deleteUser={deleteUser} response={response} />

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
