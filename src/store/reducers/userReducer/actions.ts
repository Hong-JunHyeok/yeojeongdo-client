import { AxiosError, AxiosResponse } from "axios";
import { createAction, createAsyncAction } from "typesafe-actions";

export const GET_USER_INFO_ALL_REQUEST =
  "user/GET_USER_INFO_ALL_REQUEST" as const;

export const GET_USER_INFO_REQUEST = "user/GET_USER_INFO_REQUEST" as const;
export const GET_USER_INFO_SUCCESS = "user/GET_USER_INFO_SUCCESS" as const;
export const GET_USER_INFO_FAILURE = "user/GET_USER_INFO_FAILURE" as const;

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

export const getUserInfoAllAction = createAction(GET_USER_INFO_ALL_REQUEST)();

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
