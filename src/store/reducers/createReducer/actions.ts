import { AxiosError, AxiosResponse } from "axios";
import { createAction, createAsyncAction } from "typesafe-actions";

export const SET_MARKER = "create/SET_MARKER";
export const SELECT_MARKER = "create/SELECT_MARKER";

export const CREATE_ALBUM_REQUEST = "create/CREATE_ALBUM_REQUEST";
export const CREATE_ALBUM_SUCCESS = "create/CREATE_ALBUM_SUCCESS";
export const CREATE_ALBUM_FAILURE = "create/CREATE_ALBUM_FAILURE";

export const getAlbumAsyncAction = createAsyncAction(
  CREATE_ALBUM_REQUEST,
  CREATE_ALBUM_SUCCESS,
  CREATE_ALBUM_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const setMarker = createAction(SET_MARKER);
export const selectMarker = createAction(SELECT_MARKER);
