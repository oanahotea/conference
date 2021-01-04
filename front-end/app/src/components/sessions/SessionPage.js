import React, { Component } from "react";
import { connect } from "react-redux";
import * as sessionAction from "../../redux/actions/sessionAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import SessionList from "./SessionList";
import { Redirect } from "react-router-dom";
import { deleteSession } from "../../api/sessionApi";

class SessionPage extends Component {
  state = {
    redirectToAddSessionPage: false,
  };

  componentDidMount() {
    const { session, sessions, actions } = this.props;

    if (sessions.length === 0) {
      actions.loadSessions().catch((error) => {
        alert("Loading sessions failed" + error);
      });
    }
  }

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
          sessions={this.props.sessions}
          onDelete={this.handleClick}
        />
      </>
    );
  }
}

SessionPage.propTypes = {
  sessions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
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
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionPage);
