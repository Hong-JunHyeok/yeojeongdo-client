import { call, put } from "@redux-saga/core/effects";
import { followNumberAPI, userInfoAPI } from "apis/userAPI";
import { AnyAction } from "redux";
import {
  GET_USER_FOLLOW_NUMBER_FAILURE,
  GET_USER_FOLLOW_NUMBER_SUCCESS,
  GET_USER_INFO_FAILURE,
  GET_USER_INFO_SUCCESS,
} from "store/reducers/userReducer/actions";

export function* handleGetUserInfoAll(action: AnyAction): any {
  try {
    const userInfoResponse = yield call(userInfoAPI, action.payload);
    const followsResposne = yield call(followNumberAPI, action.payload);

    yield put({
      type: GET_USER_INFO_SUCCESS,
      payload: userInfoResponse.data.data,
    });
    yield put({
      type: GET_USER_FOLLOW_NUMBER_SUCCESS,
      payload: followsResposne.data.data,
    });
  } catch (error: any) {
    yield put({
      type: GET_USER_INFO_FAILURE,
      payload: error.response.data,
    });
    yield put({
      type: GET_USER_FOLLOW_NUMBER_FAILURE,
      payload: error.response.data,
    });
  }
}
