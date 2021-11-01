import { AxiosError, AxiosResponse } from "axios";
import { createAction, createAsyncAction } from "typesafe-actions";

export const RESET_ALBUMS = "album/RESET_ALBUMS";

export const GET_ALBUMS_REQUEST = "album/GET_ALBUMS_REQUEST";
export const GET_ALBUMS_SUCCESS = "album/GET_ALBUMS_SUCCESS";
export const GET_ALBUMS_FAILURE = "album/GET_ALBUMS_FAILURE";

export const GET_COMMENTS_REQUEST = "album/GET_COMMENTS_REQUEST";
export const GET_COMMENTS_SUCCESS = "album/GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILURE = "album/GET_COMMENTS_FAILURE";

export const CREATE_COMMENT_REQUEST = "album/CREATE_COMMENT_REQUEST";
export const CREATE_COMMENT_SUCCESS = "album/CREATE_COMMENT_SUCCESS";
export const CREATE_COMMENT_FAILURE = "album/CREATE_COMMENT_FAILURE";

export const DELETE_COMMENT_REQUEST = "album/DELETE_COMMENT_REQUEST";
export const DELETE_COMMENT_SUCCESS = "album/DELETE_COMMENT_SUCCESS";
export const DELETE_COMMENT_FAILURE = "album/DELETE_COMMENT_FAILURE";

export const EDIT_COMMENT_REQUEST = "album/EDIT_COMMENT_REQUEST";
export const EDIT_COMMENT_SUCCESS = "album/EDIT_COMMENT_SUCCESS";
export const EDIT_COMMENT_FAILURE = "album/EDIT_COMMENT_FAILURE";

export const GET_ALBUM_REQUEST = "album/GET_ALBUM_REQUEST";
export const GET_ALBUM_SUCCESS = "album/GET_ALBUM_SUCCESS";
export const GET_ALBUM_FAILURE = "album/GET_ALBUM_FAILURE";

export const LIKE_ALBUM_REQUEST = "album/LIKE_ALBUM_REQUEST";
export const LIKE_ALBUM_SUCCESS = "album/LIKE_ALBUM_SUCCESS";
export const LIKE_ALBUM_FAILURE = "album/LIKE_ALBUM_FAILURE";

export const LIKE_INCREMENT = "album/LIKE_INCREMENT";
export const LIKE_DECREMENT = "album/LIKE_DECREMENT";

export const OPEN_ALBUM = "album/OPEN_ALBUM";
export const CLOSE_ALBUM = "album/CLOSE_ALBUM";

export const getAlbumsAsyncAction = createAsyncAction(
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const getCommentsAsyncAction = createAsyncAction(
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const createCommentAsyncAction = createAsyncAction(
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const deleteCommentAsyncAction = createAsyncAction(
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const editCommentAsyncAction = createAsyncAction(
  EDIT_COMMENT_REQUEST,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const getAlbumAsyncAction = createAsyncAction(
  GET_ALBUM_REQUEST,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const likeAlbumAsyncAction = createAsyncAction(
  LIKE_ALBUM_REQUEST,
  LIKE_ALBUM_SUCCESS,
  LIKE_ALBUM_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const openAlbum = createAction(OPEN_ALBUM)();
export const closeAlbum = createAction(CLOSE_ALBUM)();
export const likeIncrement = createAction(LIKE_INCREMENT)();
export const likeDecrement = createAction(LIKE_DECREMENT)();
export const resetAlbums = createAction(RESET_ALBUMS)();
