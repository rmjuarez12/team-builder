import React from "react";

export default function UserForm() {
  return (
    <div>
      <form>
        <p>
          <label htmlFor="user-name">Name</label>
          <input type="text" name="user-name" id="user-name" placeholder="Enter Name" />
        </p>

        <p>
          <label htmlFor="user-email">Email</label>
          <input type="email" name="user-email" id="user-email" placeholder="Enter Email" />
        </p>

        <p>
          <label htmlFor="user-role">Role</label>
          <select name="user-role" id="user-role">
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
