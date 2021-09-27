import { call, put } from "@redux-saga/core/effects";
import { loadMyInfoAPI, loginAPI } from "apis/authAPI";
import { Token } from "lib/Token";
import { toast } from "react-toastify";
import { AnyAction } from "redux";
import {
  LOAD_MY_INFO_FAILURE,
  LOAD_MY_INFO_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
} from "store/reducers/authReducer/actions";

export function* handleLogin(action: AnyAction): any {
  try {
    const response = yield call(loginAPI, action.payload);
    Token.setToken(response.data.data);
    yield put({
      type: LOG_IN_SUCCESS,
    });
  } catch (error: any) {
    toast.error(error.response.data.message);
    Token.removeToken();
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

export function* handleLoadMyInfo(): any {
  try {
    const response = yield call(loadMyInfoAPI);
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      payload: response,
    });
  } catch (error: any) {
    toast.error(error.response.data.message);
    yield put({
      type: LOAD_MY_INFO_FAILURE,
    });
  }
}
