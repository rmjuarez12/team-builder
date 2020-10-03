import React, { useEffect, useState } from "react";

// Import Dependencies
import { gsap } from "gsap";

export default function UserForm(props) {
  // Setup state that will save the data entered in the fields
  const [user, setUser] = useState({ name: "", email: "", role: "0" });

  console.log("user", user);

  // Set a useEffect so, if we are editing a user, it sets the user to that data
  useEffect(() => {
    if (props.memberToEdit !== null) {
      setUser(props.memberToEdit);
    } else {
      resetForm();
    }
  }, [props.memberToEdit]);

  // Function to handle the input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Function to reset form
  const resetForm = () => {
    setUser({ name: "", email: "", role: "0" });
  };

  // Function to handle the form submission
  const handleSubmission = (e) => {
    // Prevent form from reloading page
    e.preventDefault();

    // Get errors, if any
    const errors = formValidation();

    // Check for errors. If you get any, alert them
    if (errors !== "") {
      alert(errors);
      return;
    }

    // Check wether this is to update a user or add a new one
    if (user.id !== undefined) {
      props.editUser(user);
    } else {
      props.addNewUser(user);
    }

    props.addNewUser(user);

    // Close the form after
    props.closeForm();

    // Reset the form
    resetForm();
  };

  // Function to handle some validation
  const formValidation = () => {
    // Do a bit of validation
    let error = "";

    // Check if the fields are empty
    if (user.name === "" || user.name === undefined) {
      error += `Please enter a name. ${"\n"}`;
    }

    if (user.email === "" || user.email === undefined) {
      error += `Please enter an email. ${"\n"}`;
    }

    if (user.role === "0" || user.role === undefined) {
      error += `Please choose a role. ${"\n"}`;
    }

    // Return the error
    return error;
  };

  return (
    <div id="user-form">
      <button className="close-form" onClick={props.closeForm}>
        x
      </button>

      <h3>{user.id !== undefined ? "Edit User" : "Add User"}</h3>

      <form onSubmit={handleSubmission}>
        <input
          type="text"
          name="name"
          id="user-name"
          placeholder="Enter Name"
          className="form-field"
          onChange={handleChange}
          value={user.name}
        />

        <input
          type="email"
          name="email"
          id="user-email"
          placeholder="Enter Email"
          className="form-field"
          onChange={handleChange}
          value={user.email}
        />

        <select name="role" id="user-role" className="form-field" onChange={handleChange}>
          <option value="0">Choose one</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Backend Engineer">Backend Engineer</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
          <option value="UX/UI Designer">UX/UI Designer</option>
        </select>

        <input type="submit" value={user.id !== undefined ? "Save User" : "Add User"} className="button" />
      </form>
    </div>
  );
}
