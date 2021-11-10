import { fork, all } from "redux-saga/effects";
import {
  watchGetUserInfo,
  watchUserFollow,
  watchInitUserFollow,
  watchGetUserAlbums,
} from "./watchers";

export default function* userSaga() {
  yield all([
    fork(watchGetUserInfo),
    fork(watchUserFollow),
    fork(watchInitUserFollow),
    fork(watchGetUserAlbums),
  ]);
}
