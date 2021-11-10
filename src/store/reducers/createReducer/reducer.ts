import {
  SET_MARKER,
  CREATE_ALBUM_FAILURE,
  CREATE_ALBUM_REQUEST,
  CREATE_ALBUM_SUCCESS,
  SELECT_MARKER,
} from "./actions";
import produce from "immer";
import { CreateState } from "./types";
import { createReducer } from "typesafe-actions";

const initalState: CreateState = {
  LatLng: { lat: 35.9077340803244, lng: 128.61327008465764 },

  selectedMarker: undefined,

  createAlbumLoading: false,
  createAlbumError: null,
  createAlbumDone: false,
};

export default createReducer<CreateState>(initalState, {
  [SET_MARKER]: (state, action) =>
    produce(state, draft => {
      draft.LatLng = action.payload;
    }),
  [SELECT_MARKER]: (state, action) =>
    produce(state, draft => {
      draft.selectedMarker = action.payload;
    }),
  [CREATE_ALBUM_REQUEST]: (state, action) =>
    produce(state, draft => {
      draft.createAlbumLoading = true;
      draft.createAlbumDone = false;
      draft.createAlbumError = null;
    }),
  [CREATE_ALBUM_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.createAlbumLoading = false;
      draft.createAlbumDone = true;
      draft.createAlbumError = null;
    }),
  [CREATE_ALBUM_FAILURE]: (state, action) =>
    produce(state, draft => {
      draft.createAlbumLoading = false;
      draft.createAlbumDone = false;
      draft.createAlbumError = action.payload;
    }),
});
