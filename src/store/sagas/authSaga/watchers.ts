import { takeLatest } from "@redux-saga/core/effects";
import {
  LOAD_MY_INFO_REQUEST,
  LOG_IN_REQUEST,
} from "store/reducers/authReducer/actions";
import { handleLoadMyInfo, handleLogin } from "./handlers";

export function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, handleLogin);
}
export function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, handleLoadMyInfo);
}
