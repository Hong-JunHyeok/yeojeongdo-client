import { takeLatest } from "redux-saga/effects";
import {
  JOIN_REQUEST,
  LOAD_MY_INFO_REQUEST,
  LOG_IN_REQUEST,
} from "store/reducers/authReducer/actions";
import { handleJoin, handleLoadMyInfo, handleLogin } from "./handlers";

export function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, handleLogin);
}
export function* watchJoin() {
  yield takeLatest(JOIN_REQUEST, handleJoin); // JOIN_REQUEST액션이 수행되고 있다면 중단(취소) 하고 handleJoin함수를 수행함
}
export function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, handleLoadMyInfo);
}
