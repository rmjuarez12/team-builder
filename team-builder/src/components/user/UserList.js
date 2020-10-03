import React from "react";

export default function UserList(props) {
  const { users } = props;

  return (
    <div className="user-list">
      <div id="page-title">
        <h1>Team Member List</h1>
        <button onClick={() => props.openForm("add-new")}>Add New</button>
      </div>

      {users.map((user, index) => {
        return (
          <div className="user-card" key={index}>
            <div className="name">{user.name}</div>
            <div className="email">{user.email}</div>
            <div className="role">{user.role}</div>
          </div>
        );
      })}
    </div>
  );
}
