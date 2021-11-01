import produce from "immer";
import { createReducer } from "typesafe-actions";
import {
  SEARCH_MAP,
  SET_CENTER_SEARCHING,
  SET_SEARCH_MODAL,
  SEARCH_ATUOMATIC,
} from "./actions";
import { SearchState } from "./types";

const initalState: SearchState = {
  searchMapList: [],
  automaticSearchList: [],
  searchValue: [""],
  centerSearching: { lat: 35.6632143, lng: 128.4140176 },
  isSearchModal: false,
};

export default createReducer<SearchState>(initalState, {
  [SEARCH_MAP]: (state, action) =>
    produce(state, (draft) => {
      draft.searchMapList = action.payload.data;
      const isOld =
        draft.searchValue.lastIndexOf(action.payload.searchValue) !== -1;
      draft.searchValue = [
        action.payload.searchValue,
        ...draft.searchValue.filter((value) => {
          return value !== action.payload.searchValue;
        }),
      ];
      console.log(
        isOld,
        draft.searchValue.lastIndexOf(action.payload.searchValue)
      );
    }),
  [SET_CENTER_SEARCHING]: (state, action) =>
    produce(state, (draft) => {
      draft.centerSearching = action.payload;
    }),
  [SET_SEARCH_MODAL]: (state, action) =>
    produce(state, (draft) => {
      draft.isSearchModal = action.payload;
    }),
  [SEARCH_ATUOMATIC]: (state, action) =>
    produce(state, (draft) => {
      draft.automaticSearchList = action.payload;
    }),
});
