import { all, fork } from "redux-saga/effects";
import { watchLoadMyInfo, watchLogin } from "./watchers";

export default function* authSaga() {
  yield all([fork(watchLogin), fork(watchLoadMyInfo)]);
}
