import { fork, all } from "redux-saga/effects";
import { watchCreateAlbum } from "./watchers";

export default function* createSaga() {
  yield all([fork(watchCreateAlbum)]);
}
