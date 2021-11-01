import { all, fork } from "redux-saga/effects";
import albumSaga from "./albumSaga";
import authSaga from "./authSaga";
import createSaga from "./createSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(albumSaga),
    fork(createSaga),
    fork(userSaga),
  ]);
}
