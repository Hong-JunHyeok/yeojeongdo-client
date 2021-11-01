import { call, put } from "redux-saga/effects";
import { joinAPI, loadMyInfoAPI, loginAPI } from "apis/authAPI";
import { Token } from "lib/Token";
import { toast } from "react-toastify";
import { AnyAction } from "redux";
import {
  JOIN_FAILURE,
  JOIN_SUCCESS,
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

export function* handleJoin(action: AnyAction): any {
  try {
    yield call(joinAPI, action.payload); // joinAPI(action.payload)
    yield put({
      type: JOIN_SUCCESS,
    }); //action: JOIN_SUCCESS 을 dispath 함
  } catch (error: any) {
    toast.error(error.response.data.message);
    yield put({
      type: JOIN_FAILURE,
    }); //action: JOIN_FAILURE 을 dispath 함
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
    console.error(error.response.data.message);
    Token.removeToken();
    yield put({
      type: LOAD_MY_INFO_FAILURE,
    });
  }
}
