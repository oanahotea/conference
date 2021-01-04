import * as types from "../actions/actionTypes";

export default function speakerReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_SPEAKER_SUCCESS:
      return [...state, { ...action.speaker }];
    case types.UPDATE_SPEAKER_SUCCESS:
      return state.map((speaker) =>
        speaker.speaker_id === action.speaker.speaker_id
          ? action.speaker
          : speaker
      );
    case types.LOAD_SPEAKERS_SUCCESS:
      return action.speakers;
    default:
      return state;
  }
}
