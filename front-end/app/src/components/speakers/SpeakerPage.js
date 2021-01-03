import React, { Component } from "react";
import { connect } from "react-redux";
import * as speakerAction from "../../redux/actions/speakerAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import SpeakerList from "./SpeakerList";

class SpeakerPage extends Component {
  componentDidMount() {
    const { speakers, actions } = this.props;

    if (speakers.length === 0) {
      actions.loadSpeakers().catch((error) => {
        alert("Loading speakers failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <SpeakerList speakers={this.props.speakers} />
      </>
    );
  }
}

SpeakerPage.propTypes = {
  speakers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    speakers: state.speakers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadSpeakers: bindActionCreators(speakerAction.loadSpeakers, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeakerPage);
