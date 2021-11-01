import { call, put } from "redux-saga/effects";
import { AnyAction } from "redux";
import {
  CREATE_ALBUM_SUCCESS,
  CREATE_ALBUM_FAILURE,
} from "store/reducers/createReducer/actions";
import { createAlbum } from "apis/createAPI";

export function* handleCreateAlbum(action: AnyAction) {
  try {
    yield call(createAlbum, action.payload);
    yield put({
      type: CREATE_ALBUM_SUCCESS,
    });
  } catch (error: any) {
    yield put({
      type: CREATE_ALBUM_FAILURE,
      payload: error.response.data,
    });
  }
}
