import React, { useState } from "react";

// Import Dependencies
import { gsap } from "gsap";

export default function UserForm(props) {
  // Setup state that will save the data entered in the fields
  const [user, setUser] = useState({});

  // Function to handle the input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
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

    // Fire the add a user function
    props.addNewUser(user);
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

      <h3>Form Title</h3>

      <form onSubmit={handleSubmission}>
        <input
          type="text"
          name="name"
          id="user-name"
          placeholder="Enter Name"
          className="form-field"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          id="user-email"
          placeholder="Enter Email"
          className="form-field"
          onChange={handleChange}
        />

        <select name="role" id="user-role" className="form-field" onChange={handleChange}>
          <option value="0">Choose one</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Backend Engineer">Backend Engineer</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
          <option value="UX/UI Designer">UX/UI Designer</option>
        </select>

        <input type="submit" value="Add User" className="button" />
      </form>
    </div>
  );
}
