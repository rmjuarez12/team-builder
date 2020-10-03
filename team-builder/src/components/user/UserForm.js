import React, { useState } from "react";

export default function UserForm() {
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value };
    setUser(newUser);

    console.log(newUser);
  };

  return (
    <div>
      <form>
        <p>
          <label htmlFor="user-name">Name</label>
          <input type="text" name="name" id="user-name" placeholder="Enter Name" onChange={handleChange} />
        </p>

        <p>
          <label htmlFor="user-email">Email</label>
          <input
            type="email"
            name="email"
            id="user-email"
            placeholder="Enter Email"
            onChange={handleChange}
          />
        </p>

        <p>
          <label htmlFor="user-role">Role</label>
          <select name="role" id="user-role" onChange={handleChange}>
            <option value="0">Choose one</option>
            <option value="Project Manager">Project Manager</option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="UX/UI Designer">UX/UI Designer</option>
          </select>
        </p>

        <input type="submit" value="Add User" />
      </form>
    </div>
  );
}
