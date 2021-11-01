import { combineReducers } from "redux";
import { createSelectorHook } from "react-redux";

import { CounterState } from "./counterReducer/types";
import { AuthState } from "./authReducer/types";
import { AlbumState } from "./albumReducer/types";
import { CreateState } from "./createReducer/types";
import { SearchState } from "./searchReducer/types";
import { UserState } from "./userReducer/types";

import albumReducer from "./albumReducer/reducer";
import authReducer from "./authReducer/reducer";
import counterReducer from "./counterReducer/reducer";
import createReducer from "./createReducer/reducer";
import searchReducer from "./searchReducer/reducer";
import userReducer from "./userReducer/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  album: albumReducer,
  create: createReducer,
  search: searchReducer,
  user: userReducer,
});

export interface RootState {
  counter: CounterState;
  auth: AuthState;
  album: AlbumState;
  create: CreateState;
  search: SearchState;
  user: UserState;
}

export const useTypedSelector = createSelectorHook<RootState>();

export default rootReducer;
