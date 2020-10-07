import React from "react";

// Import Components
import User from "./User";

export default function UserList(props) {
  const { users } = props;

  return (
    <div className="user-list">
      <div id="page-title">
        <h2>Team Member List</h2>
        <button onClick={() => props.openForm()}>Add New</button>
      </div>

      {props.response !== null && <div className="response">{props.response}</div>}

      <div className="user-row row-names">
        <div className="id">Id</div>
        <div className="name">Name</div>
        <div className="email">Email</div>
        <div className="role">Role</div>
        <div className="date">Date Added</div>
        <div className="buttons"></div>
      </div>

      {users.length > 0 &&
        users.map((user, index) => {
          return <User key={index} user={user} openForm={props.openForm} deleteUser={props.deleteUser} />;
        })}

      {users.length < 1 && <div className="no-results">No Users Found</div>}
    </div>
  );
}
