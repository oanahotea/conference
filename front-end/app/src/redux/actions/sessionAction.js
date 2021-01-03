import * as types from "./actionTypes";
import * as sessionApi from "../../api/sessionApi";

export function loadSessionSuccess(sessions) {
  return { type: types.LOAD_SESSIONS_SUCCESS, sessions };
}

export function createSessionSuccess(session) {
  return { type: types.CREATE_SESSION_SUCCESS, session };
}

export function updateSessionSuccess(session) {
  return { type: types.UPDATE_SESSION_SUCCESS, session };
}

export function loadSessions() {
  return function (dispatch) {
    return sessionApi
      .getSessions()
      .then((sessions) => {
        dispatch(loadSessionSuccess(sessions));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveSession(session) {
  return function (dispatch) {
    return sessionApi
      .saveSession(session)
      .then((savedSession) => {
        savedSession.session_id
          ? dispatch(createSessionSuccess(savedSession))
          : dispatch(updateSessionSuccess(savedSession));
      })
      .catch((error) => {
        throw error;
      });
  };
}
