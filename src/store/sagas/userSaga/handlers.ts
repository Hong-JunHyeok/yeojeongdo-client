import { call, put } from "@redux-saga/core/effects";
import { userAlbumsAPI } from "apis/albumAPI";
import {
  followNumberAPI,
  getFollowState,
  requestFollowAPI,
  userInfoAPI,
} from "apis/userAPI";
import { AnyAction } from "redux";
import {
  GET_USER_ALBUMS_FAILURE,
  GET_USER_ALBUMS_SUCCESS,
  GET_USER_FOLLOW_NUMBER_FAILURE,
  GET_USER_FOLLOW_NUMBER_SUCCESS,
  GET_USER_INFO_FAILURE,
  GET_USER_INFO_SUCCESS,
  INIT_USER_FOLLOW,
  USER_FOLLOW_FAILURE,
  USER_FOLLOW_SUCCESS,
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

export function* handleUserFollow(action: AnyAction): any {
  try {
    const status = yield call(getFollowState, action.payload);
    yield call(requestFollowAPI, action.payload);

    if (status.data.data) {
      // UNFOLLOW
      yield put({
        type: USER_FOLLOW_SUCCESS,
        payload: {
          change: -1,
          isFollow: false,
        },
      });
    } else {
      // FOLLOW
      yield put({
        type: USER_FOLLOW_SUCCESS,
        payload: {
          change: 1,
          isFollow: true,
        },
      });
    }
  } catch (error) {
    yield put({
      type: USER_FOLLOW_FAILURE,
      payload: action.payload,
    });
  }
}

export function* handleInitUserFollow(action: AnyAction): any {
  const isFollow = yield call(getFollowState, action.payload);
  console.log(isFollow);

  yield put({
    type: INIT_USER_FOLLOW,
    payload: isFollow.data.data,
  });
}

export function* handleGetUserAlbums(action: AnyAction): any {
  try {
    const userAlbums = yield call(
      userAlbumsAPI,
      action.payload.userIdx,
      action.payload.lastIdx
    );
    console.log(userAlbums);

    yield put({
      type: GET_USER_ALBUMS_SUCCESS,
      payload: userAlbums.data.data,
    });
  } catch (error: any) {
    yield put({
      type: GET_USER_ALBUMS_FAILURE,
      payload: error.response.data,
    });
  }
}
