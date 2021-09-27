import { AxiosError, AxiosResponse } from "axios";
import { createAction, createAsyncAction } from "typesafe-actions";

export const LOG_IN_REQUEST = "auth/LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "auth/LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "auth/LOG_IN_FAILURE";

export const loginAsyncAction = createAsyncAction(
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const LOAD_MY_INFO_REQUEST = "auth/LOAD_MY_INFO_REQUEST";
export const LOAD_MY_INFO_SUCCESS = "auth/LOAD_MY_INFO_SUCCESS";
export const LOAD_MY_INFO_FAILURE = "auth/LOAD_MY_INFO_FAILURE";

export const loadMyInfoAsyncAction = createAsyncAction(
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const LOG_OUT = "auth/LOG_OUT";
export const logoutAction = createAction(LOG_OUT)();
