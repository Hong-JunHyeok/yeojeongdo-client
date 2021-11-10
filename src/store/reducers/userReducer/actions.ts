import { AxiosError, AxiosResponse } from "axios";
import { createAction, createAsyncAction } from "typesafe-actions";

export const GET_USER_INFO_ALL_REQUEST =
  "user/GET_USER_INFO_ALL_REQUEST" as const;

export const GET_USER_INFO_REQUEST = "user/GET_USER_INFO_REQUEST" as const;
export const GET_USER_INFO_SUCCESS = "user/GET_USER_INFO_SUCCESS" as const;
export const GET_USER_INFO_FAILURE = "user/GET_USER_INFO_FAILURE" as const;

export const INIT_USER_FOLLOW_REQUEST =
  "user/INIT_USER_FOLLOW_REQUEST" as const;
export const INIT_USER_FOLLOW = "user/INIT_USER_FOLLOW" as const;

export const GET_USER_FOLLOW_NUMBER_REQUEST =
  "user/GET_USER_FOLLOW_NUMBER_REQUEST" as const;
export const GET_USER_FOLLOW_NUMBER_SUCCESS =
  "user/GET_USER_FOLLOW_NUMBER_SUCCESS" as const;
export const GET_USER_FOLLOW_NUMBER_FAILURE =
  "user/GET_USER_FOLLOW_NUMBER_FAILURE" as const;

export const GET_USER_FOLLOWERS_REQUEST =
  "user/GET_USER_FOLLOWERS_REQUEST" as const;
export const GET_USER_FOLLOWERS_SUCCESS =
  "user/GET_USER_FOLLOWERS_SUCCESS" as const;
export const GET_USER_FOLLOWERS_FAILURE =
  "user/GET_USER_FOLLOWERS_FAILURE" as const;

export const GET_USER_FOLLOWINGS_REQUEST =
  "user/GET_USER_FOLLOWINGS_REQUEST" as const;
export const GET_USER_FOLLOWINGS_SUCCESS =
  "user/GET_USER_FOLLOWINGS_SUCCESS" as const;
export const GET_USER_FOLLOWINGS_FAILURE =
  "user/GET_USER_FOLLOWINGS_FAILURE" as const;

export const GET_USER_ALBUMS_REQUEST = "user/GET_USER_ALBUMS_REQUEST" as const;
export const GET_USER_ALBUMS_SUCCESS = "user/GET_USER_ALBUMS_SUCCESS" as const;
export const GET_USER_ALBUMS_FAILURE = "user/GET_USER_ALBUMS_FAILURE" as const;

export const USER_FOLLOW = "user/USER_FOLLOW" as const;
export const USER_FOLLOW_SUCCESS = "user/USER_FOLLOW_SUCCESS" as const;
export const USER_FOLLOW_FAILURE = "user/USER_FOLLOW_FAILURE" as const;

export const CHANGE_PROFILE = "user/CHANGE_PROFILE" as const;
export const CHANGE_NAME = "user/CHANGE_NAME" as const;
export const CHANGE_BIRTH = "user/CHANGE_BIRTH" as const;

export const getUserInfoAllAction = createAction(GET_USER_INFO_ALL_REQUEST)();
export const initUserFollowRequestAction = createAction(
  INIT_USER_FOLLOW_REQUEST
)();
export const initUserFollow = createAction(INIT_USER_FOLLOW)();

export const getUserInfoAsyncAction = createAsyncAction(
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const getUserFollowNumberAsyncAction = createAsyncAction(
  GET_USER_FOLLOW_NUMBER_REQUEST,
  GET_USER_FOLLOW_NUMBER_SUCCESS,
  GET_USER_FOLLOW_NUMBER_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const getUserFollowersAsyncAction = createAsyncAction(
  GET_USER_FOLLOWERS_REQUEST,
  GET_USER_FOLLOWERS_SUCCESS,
  GET_USER_FOLLOWERS_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const getUserFollowingsAsyncAction = createAsyncAction(
  GET_USER_FOLLOWINGS_REQUEST,
  GET_USER_FOLLOWINGS_SUCCESS,
  GET_USER_FOLLOWINGS_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const userFollowAsyncAction = createAsyncAction(
  USER_FOLLOW,
  USER_FOLLOW_SUCCESS,
  USER_FOLLOW_FAILURE
)<any, AxiosResponse, AxiosError>();

export const getUserAlbumsAsynAction = createAsyncAction(
  GET_USER_ALBUMS_REQUEST,
  GET_USER_ALBUMS_SUCCESS,
  GET_USER_FOLLOWERS_FAILURE
)<any, AxiosResponse, AxiosError>();
