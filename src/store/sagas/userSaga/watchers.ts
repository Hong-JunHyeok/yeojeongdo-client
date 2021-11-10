import { takeLatest } from "redux-saga/effects";
import {
  GET_USER_ALBUMS_REQUEST,
  GET_USER_INFO_ALL_REQUEST,
  INIT_USER_FOLLOW_REQUEST,
  USER_FOLLOW,
} from "store/reducers/userReducer/actions";
import {
  handleGetUserAlbums,
  handleGetUserInfoAll,
  handleInitUserFollow,
  handleUserFollow,
} from "./handlers";

export function* watchGetUserInfo() {
  yield takeLatest(GET_USER_INFO_ALL_REQUEST, handleGetUserInfoAll);
}

export function* watchUserFollow() {
  yield takeLatest(USER_FOLLOW, handleUserFollow);
}

export function* watchInitUserFollow() {
  yield takeLatest(INIT_USER_FOLLOW_REQUEST, handleInitUserFollow);
}

export function* watchGetUserAlbums() {
  yield takeLatest(GET_USER_ALBUMS_REQUEST, handleGetUserAlbums);
}
