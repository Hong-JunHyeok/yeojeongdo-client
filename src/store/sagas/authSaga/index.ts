import { all, fork } from "redux-saga/effects";
import { watchJoin, watchLoadMyInfo, watchLogin } from "./watchers";

export default function* authSaga() {
  yield all([fork(watchLogin), fork(watchJoin), fork(watchLoadMyInfo)]); //배열안에 있는 함수가 모두 동시에 시작되고 모두 수행되기를 기다린다
}
