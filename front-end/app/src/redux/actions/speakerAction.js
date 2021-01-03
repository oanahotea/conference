import * as types from "./actionTypes";
import * as speakerApi from "../../api/speakerApi";

//this is an action function
export function loadSpeakersSuccess(speakers) {
  return { type: types.LOAD_SPEAKERS_SUCCESS, speakers: speakers };
}

export function createSpeakerSuccess(speaker) {
  return { type: types.CREATE_SPEAKER_SUCCESS, speaker };
}

export function updateSpeakerSuccess(speaker) {
  return { type: types.UPDATE_SPEAKER_SUCCESS, speaker };
}

//this is a thunk function, that return another function
//I'm using this for dispatch
export function loadSpeakers() {
  return function (dispatch) {
    return speakerApi
      .getSpeakers()
      .then((speakers) => {
        dispatch(loadSpeakersSuccess(speakers));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveSpeaker(speaker) {
  return function (dispatch) {
    return speakerApi
      .saveSpeaker(speaker)
      .then((savedSpeaker) => {
        speaker.id
          ? dispatch(createSpeakerSuccess(savedSpeaker))
          : dispatch(updateSpeakerSuccess(savedSpeaker));
      })
      .catch((error) => {
        throw error;
      });
  };
}
