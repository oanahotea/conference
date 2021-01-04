import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SessionList = (props) => {
  const { sessions, onDelete } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Speaker</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {sessions.map((session) => {
          return (
            <tr key={session.session_id}>
              <td>{session.session_name}</td>
              <td>{session.session_description}</td>
              <td>
                {session.speaker.first_name + " " + session.speaker.last_name}
              </td>
              <td>{session.session_length}</td>
              <td>
                <Link to={"/session/" + session.session_id}>
                  <a className="btn btn-ligth">Edit</a>
                </Link>
              </td>
              <td>
                <a className="btn btn-danger" onClick={onDelete}>
                  Delete
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

SessionList.propTypes = {
  sessions: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default SessionList;
