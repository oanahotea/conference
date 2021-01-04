import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadSessions, saveSession } from "../../redux/actions/sessionAction";
import { loadSpeakers } from "../../redux/actions/speakerAction";
import PropTypes from "prop-types";
import SessionForm from "./SessionForm";

function ManageSessionPage({
  sessions,
  speakers,
  loadSessions,
  loadSpeakers,
  saveSession,
  history,
  ...props
}) {
  const [session, setSession] = useState({ ...props.session });
  const [erros, setErros] = useState({});

  useEffect(() => {
    if (sessions.length === 0) {
      loadSessions().catch((error) => {
        alert("Loading sessions failed" + error);
      });
    } else {
      setSession({ ...props.session });
    }

    if (speakers.length === 0) {
      loadSpeakers().catch((error) => {
        alert("Loading speakers failed" + error);
      });
    }
  }, [props.session]);

  function getSpeakerById(id) {
    let filterSpeakers = speakers.filter((speaker) => speaker.speaker_id == id);
    return filterSpeakers[0];
  }

  function handleChange(event) {
    //this avoid the event getting garbage collected
    const { name, value } = event.target;
    setSession((prevsession) => ({
      ...prevsession,
      [name]: name === "speaker" ? getSpeakerById(value) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    saveSession(session).then(() => {
      history.push("/sessions");
    });
  }

  return (
    <>
      <SessionForm
        session={session}
        errors={erros}
        speakers={speakers}
        onChange={handleChange}
        onSave={handleSave}
      />
    </>
  );
}

ManageSessionPage.propTypes = {
  session: PropTypes.object.isRequired,
  speakers: PropTypes.array.isRequired,
  sessions: PropTypes.array.isRequired,
  loadSessions: PropTypes.func.isRequired,
  loadSpeakers: PropTypes.func.isRequired,
  saveSession: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

function getSessionById(sessions, session_id) {
  console.log(session_id + " Session Id!!!");
  return sessions.find((session) => session.session_id == session_id) || null;
}

function mapStateToProps(state, ownProps) {
  const session_id = ownProps.match.params.session_id;
  console.log(session_id);
  const session =
    session_id && state.sessions.length > 0
      ? getSessionById(state.sessions, session_id)
      : { session_length: 0, session_description: "", speaker: {} };
  console.log(session.session_id + " Session Id!!!");
  return {
    session,
    sessions: state.sessions,
    speakers: state.speakers,
  };
}

const mapDispatchToProps = {
  loadSessions,
  loadSpeakers,
  saveSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSessionPage);
