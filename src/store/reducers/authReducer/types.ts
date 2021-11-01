import { ActionType } from "typesafe-actions";
import { AxiosError } from "axios";
import * as authActions from "./actions";

export type AuthActions = ActionType<typeof authActions>;

export interface AuthState {
  loginDone: boolean;
  loginError: AxiosError | null;
  loginLoading: boolean;

  joinDone: boolean;
  joinError: AxiosError | null;
  joinLoading: boolean;

  loadMyInfoDone: boolean;
  loadMyInfoError: AxiosError | null;
  loadMyInfoLoading: boolean;

  myInfo: null | User;
}
