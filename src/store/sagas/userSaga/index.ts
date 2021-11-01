import { fork, all } from "redux-saga/effects";
import { watchGetUserInfo } from "./watchers";

export default function* userSaga() {
  yield all([fork(watchGetUserInfo)]);
}
