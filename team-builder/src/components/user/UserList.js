import React from "react";

export default function UserList(props) {
  const { users } = props;

  return (
    <div>
      {users.map((user) => {
        return (
          <div className="user-card">
            <div className="name">{user.name}</div>
            <div className="email">{user.email}</div>
            <div className="role">{user.role}</div>
          </div>
        );
      })}
    </div>
  );
}
