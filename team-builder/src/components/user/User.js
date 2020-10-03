import React from "react";

// Import Dependencies
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function User(props) {
  // Format the saved date
  const dateAdded = format(new Date(props.user.date), "MM/dd/yyyy");

  return (
    <div className="user-row">
      <div className="id">{props.user.id}</div>
      <div className="name">{props.user.name}</div>
      <div className="email">{props.user.email}</div>
      <div className="role">{props.user.role}</div>
      <div className="date">{dateAdded}</div>
      <div className="buttons">
        <button
          onClick={() => {
            props.openForm(props.user);
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={(e) => props.deleteUser(props.user, e)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
}
