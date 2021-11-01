import { takeLatest } from "redux-saga/effects";
import {
  CREATE_COMMENT_REQUEST,
  DELETE_COMMENT_REQUEST,
  EDIT_COMMENT_REQUEST,
  GET_ALBUMS_REQUEST,
  GET_ALBUM_REQUEST,
  GET_COMMENTS_REQUEST,
  LIKE_ALBUM_REQUEST,
} from "store/reducers/albumReducer/actions";
import {
  handleCreateComment,
  handleDeleteComment,
  handleEditComment,
  handleGetAlbum,
  handleGetAlbums,
  handleGetComments,
  handleLikeAlbum,
} from "./handlers";

export function* watchGetAlbums() {
  yield takeLatest(GET_ALBUMS_REQUEST, handleGetAlbums);
}

export function* watchGetAlbum() {
  yield takeLatest(GET_ALBUM_REQUEST, handleGetAlbum);
}

export function* watchGetComments() {
  yield takeLatest(GET_COMMENTS_REQUEST, handleGetComments);
}

export function* watchCreateComment() {
  yield takeLatest(CREATE_COMMENT_REQUEST, handleCreateComment);
}

export function* watchDeleteComment() {
  yield takeLatest(DELETE_COMMENT_REQUEST, handleDeleteComment);
}

export function* watchEditComment() {
  yield takeLatest(EDIT_COMMENT_REQUEST, handleEditComment);
}

export function* watchLikeAlbum() {
  yield takeLatest(LIKE_ALBUM_REQUEST, handleLikeAlbum);
}
