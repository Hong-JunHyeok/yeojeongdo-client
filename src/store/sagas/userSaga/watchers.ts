import { takeLatest } from "@redux-saga/core/effects";
import { GET_USER_INFO_ALL_REQUEST } from "store/reducers/userReducer/actions";
import { handleGetUserInfoAll } from "./handlers";

export function* watchGetUserInfo() {
  yield takeLatest(GET_USER_INFO_ALL_REQUEST, handleGetUserInfoAll);
}
