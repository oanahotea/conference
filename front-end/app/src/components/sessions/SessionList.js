import React from "react";
import PropTypes from "prop-types";

const SessionList = (props) => {
  const { sessions } = props;
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
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

SessionList.propTypes = {
  sessions: PropTypes.array.isRequired,
};

export default SessionList;
