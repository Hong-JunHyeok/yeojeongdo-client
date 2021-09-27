import { combineReducers } from "redux";
import { createSelectorHook } from "react-redux";
import counterReducer from "./counterReducer/reducer";
import { CounterState } from "./counterReducer/types";
import authReducer from "./authReducer/reducer";
import { AuthState } from "./authReducer/types";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

export interface RootState {
  counter: CounterState;
  auth: AuthState;
}

export const useTypedSelector = createSelectorHook<RootState>();

export default persistReducer(persistConfig, rootReducer);
