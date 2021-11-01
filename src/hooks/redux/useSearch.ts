import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "store/reducers";
import {
  SEARCH_ATUOMATIC,
  SEARCH_MAP,
  SET_CENTER_SEARCHING,
  SET_SEARCH_MODAL,
} from "store/reducers/searchReducer/actions";

const useSearch = () => {
  const dispatch = useDispatch();

  const searchMapListState = useTypedSelector(state => state.search);

  const searchMap = useCallback(
    (data, searchValue: string) => {
      dispatch({
        type: SEARCH_MAP,
        payload: { data, searchValue },
      });
    },
    [dispatch]
  );

  const setCenterSearching = useCallback(
    data => {
      dispatch({
        type: SET_CENTER_SEARCHING,
        payload: data,
      });
    },
    [dispatch]
  );

  const setSearchModal = useCallback(
    (data: boolean) => {
      dispatch({
        type: SET_SEARCH_MODAL,
        payload: data,
      });
    },
    [dispatch]
  );

  const searchAutomatic = useCallback(
    data => {
      dispatch({
        type: SEARCH_ATUOMATIC,
        payload: data,
      });
    },
    [dispatch]
  );

  return {
    searchMap,
    setCenterSearching,
    setSearchModal,
    searchAutomatic,
    searchMapListState,
  };
};

export default useSearch;
