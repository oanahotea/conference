import React, { Component } from "react";
import { connect } from "react-redux";
import * as sessionAction from "../../redux/actions/sessionAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import SessionList from "./SessionList";
import { Redirect } from "react-router-dom";

class SessionPage extends Component {
  state = {
    redirectToAddSessionPage: false,
  };

  componentDidMount() {
    const { sessions, actions } = this.props;

    if (sessions.length === 0) {
      actions.loadSessions().catch((error) => {
        alert("Loading sessions failed" + error);
      });
    }
  }

  handleDeleteSession = async (session) => {
    debugger;
    console.log("Course deleted");
    try {
      await this.props.actions.deleteSession(session);
    } catch (error) {
      console.log("Delete failed. " + error.message);
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddSessionPage && <Redirect to="/session" />}
        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-session"
          onClick={() => this.setState({ redirectToAddSessionPage: true })}
        >
          Add a session
        </button>
        <SessionList
          onDeleteClick={this.handleDeleteSession}
          sessions={this.props.sessions}
        />
      </>
    );
  }
}

SessionPage.propTypes = {
  sessions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  handleDeleteSession: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    sessions: state.sessions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadSessions: bindActionCreators(sessionAction.loadSessions, dispatch),
      deleteSession: bindActionCreators(sessionAction.deleteSession, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionPage);
