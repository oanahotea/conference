import * as types from "../actions/actionTypes";

export default function sessionReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_SESSION_SUCCESS:
      return [...state, { ...action.session }];
    case types.UPDATE_SESSION_SUCCESS:
      return state.map((session) =>
        session.id === action.session.id ? action.session : session
      );
    case types.LOAD_SESSIONS_SUCCESS:
      return action.sessions;
    default:
      return state;
  }
}
