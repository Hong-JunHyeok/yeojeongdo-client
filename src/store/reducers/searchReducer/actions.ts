import { createAction } from "typesafe-actions";

export const SEARCH_MAP = "search/SEARCH_MAP";
export const SET_CENTER_SEARCHING = "search/SET_CENTER_SEARCHING";
export const SET_SEARCH_MODAL = "search/SET_SEARCH_MODAL";

export const SEARCH_ATUOMATIC = "search/SEARCH_ATUOMATIC";

export const searchMap = createAction(SEARCH_MAP);
export const setCenterSearching = createAction(SET_CENTER_SEARCHING);
export const setSearchModal = createAction(SET_SEARCH_MODAL);
