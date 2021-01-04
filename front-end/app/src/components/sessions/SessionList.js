import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SessionList = (props) => {
  const { sessions, onDeleteClick } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Speaker</th>
          <th>Duration</th>
          <th />
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
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDeleteClick(session)}
                >
                  Delete
                </button>
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
  onDeleteClick: PropTypes.func.isRequired,
};

export default SessionList;
