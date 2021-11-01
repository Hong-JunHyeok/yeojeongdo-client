import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "store/reducers";
import {
  CREATE_ALBUM_REQUEST,
  SELECT_MARKER,
  SET_MARKER,
} from "store/reducers/createReducer/actions";

const useCreate = () => {
  const dispatch = useDispatch();

  const markerState = useTypedSelector((state) => state.create);

  const setMarker = useCallback(
    (latLng) => {
      dispatch({
        type: SET_MARKER,
        payload: latLng,
      });
    },
    [dispatch]
  );

  const selectMarker = useCallback(
    (data) => {
      dispatch({
        type: SELECT_MARKER,
        payload: data,
      });
    },
    [dispatch]
  );

  const createAlbum = useCallback(
    (data: any) => {
      dispatch({
        type: CREATE_ALBUM_REQUEST,
        payload: data,
      });
    },
    [dispatch]
  );

  return { markerState, setMarker, selectMarker, createAlbum };
};

export default useCreate;
