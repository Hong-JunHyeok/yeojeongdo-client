import { call, put } from "redux-saga/effects";
import {
  albumDetailAPI,
  albumsAPI,
  commentsAPI,
  createCommentAPI,
  deleteCommentAPI,
  editCommentAPI,
  likeAlbumAPI,
} from "apis/albumAPI";
import {
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  DELETE_COMMENT_SUCCESS,
  EDIT_COMMENT_FAILURE,
  EDIT_COMMENT_SUCCESS,
  GET_ALBUMS_FAILURE,
  GET_ALBUMS_SUCCESS,
  GET_ALBUM_FAILURE,
  GET_ALBUM_SUCCESS,
  GET_COMMENTS_FAILURE,
  GET_COMMENTS_SUCCESS,
  LIKE_ALBUM_FAILURE,
  LIKE_ALBUM_SUCCESS,
} from "store/reducers/albumReducer/actions";
import { AnyAction } from "redux";

export function* handleGetAlbums(action: AnyAction): any {
  try {
    const response = yield call(albumsAPI, action.payload);
    yield put({
      type: GET_ALBUMS_SUCCESS,
      payload: response,
    });
  } catch (error: any) {
    yield put({
      type: GET_ALBUMS_FAILURE,
      payload: error.response.data,
    });
  }
}

export function* handleGetAlbum(action: AnyAction): any {
  try {
    const response = yield call(albumDetailAPI, action.payload);
    yield put({
      type: GET_ALBUM_SUCCESS,
      payload: response,
    });
  } catch (error: any) {
    yield put({
      type: GET_ALBUM_FAILURE,
      payload: error.response.data,
    });
  }
}

export function* handleGetComments(action: AnyAction): any {
  try {
    const response = yield call(commentsAPI, action.payload);
    yield put({
      type: GET_COMMENTS_SUCCESS,
      payload: response,
    });
  } catch (error: any) {
    yield put({
      type: GET_COMMENTS_FAILURE,
      payload: error.response.data,
    });
  }
}

export function* handleCreateComment(action: AnyAction): any {
  try {
    const response = yield call(createCommentAPI, action.payload);
    yield put({
      type: CREATE_COMMENT_SUCCESS,
      payload: response,
    });
  } catch (error: any) {
    yield put({
      type: CREATE_COMMENT_FAILURE,
      payload: error.response.data,
    });
  }
}

export function* handleDeleteComment(action: AnyAction): any {
  try {
    const response = yield call(deleteCommentAPI, action.payload);
    yield put({
      type: DELETE_COMMENT_SUCCESS,
      payload: response,
    });
  } catch (error: any) {
    yield put({
      type: DELETE_COMMENT_FAILURE,
      payload: error.response.data,
    });
  }
}

export function* handleEditComment(action: AnyAction): any {
  try {
    const response = yield call(editCommentAPI, action.payload);
    yield put({
      type: EDIT_COMMENT_SUCCESS,
      payload: response,
    });
  } catch (error: any) {
    yield put({
      type: EDIT_COMMENT_FAILURE,
      payload: error.response.data,
    });
  }
}

export function* handleLikeAlbum(action: AnyAction): any {
  try {
    const response = yield call(likeAlbumAPI, action.payload);
    yield put({
      type: LIKE_ALBUM_SUCCESS,
      payload: response,
    });
  } catch (error: any) {
    yield put({
      type: LIKE_ALBUM_FAILURE,
      payload: error.response.data,
    });
  }
}
