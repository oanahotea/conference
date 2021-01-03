import React from "react";
import PropTypes from "prop-types";

const SpeakerList = (props) => {
  const { speakers } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {speakers.map((speaker) => {
          return (
            <tr key={speaker.speaker_id}>
              <td>{speaker.first_name + " " + speaker.last_name}</td>
              <td>{speaker.title}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

SpeakerList.propTypes = {
  speakers: PropTypes.array.isRequired,
};

export default SpeakerList;
