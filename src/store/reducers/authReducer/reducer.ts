import produce from "immer";
import { createReducer } from "typesafe-actions";
import {
  LOAD_MY_INFO_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT,
} from "./actions";
import { AuthActions, AuthState } from "./types";

const initialState: AuthState = {
  loginDone: false,
  loginError: null,
  loginLoading: false,

  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadMyInfoLoading: false,

  myInfo: null,
};

export default createReducer<AuthState, AuthActions>(initialState, {
  [LOG_IN_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.loginDone = false;
      draft.loginError = null;
      draft.loginLoading = true;
    }),
  [LOG_IN_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.loginLoading = false;
      draft.loginDone = true;
    }),
  [LOG_IN_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.loginLoading = false;
      draft.loginError = action.payload;
      draft.loginDone = false;
    }),
  [LOAD_MY_INFO_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.loadMyInfoDone = false;
      draft.loadMyInfoError = null;
      draft.loadMyInfoLoading = true;
    }),
  [LOAD_MY_INFO_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoDone = true;

      draft.loginDone = true;
      draft.myInfo = action.payload.data.data;
    }),
  [LOAD_MY_INFO_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.payload;
      draft.loadMyInfoDone = false;
    }),
  [LOG_OUT]: (state) =>
    produce(state, (draft) => {
      draft.loginDone = false;
      draft.myInfo = null;
    }),
});

// function authReducer(state = initialState, action: AnyAction) {
//   switch (action.type) {
//     case LOG_IN:
//       return {
//         ...state,
//         isLoggedIn: true,
//       };
//     case LOG_OUT:
//       return {
//         ...state,
//         isLoggedIn: false,
//       };
//     default:
//       return state;
//   }
// }

// export default authReducer;
