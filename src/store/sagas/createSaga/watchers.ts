import { takeLatest } from "redux-saga/effects";
import { CREATE_ALBUM_REQUEST } from "store/reducers/createReducer/actions";
import { handleCreateAlbum } from "./handlers";

export function* watchCreateAlbum() {
  yield takeLatest(CREATE_ALBUM_REQUEST, handleCreateAlbum);
}
