import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "store/reducers";
import {
  GET_USER_ALBUMS_REQUEST,
  GET_USER_INFO_ALL_REQUEST,
  INIT_USER_FOLLOW,
  INIT_USER_FOLLOW_REQUEST,
  USER_FOLLOW,
} from "store/reducers/userReducer/actions";

const useUser = () => {
  const dispatch = useDispatch();
  const userState = useTypedSelector(state => state.user);

  const getUserInfoAll = useCallback(
    (userIdx: number) => {
      dispatch({
        type: GET_USER_INFO_ALL_REQUEST,
        payload: userIdx,
      });
    },
    [dispatch]
  );

  const userFollow = useCallback(
    (userIdx: number) => {
      dispatch({
        type: USER_FOLLOW,
        payload: { userIdx },
      });
    },
    [dispatch]
  );

  const getIsFollow = useCallback(
    (userIdx: number) => {
      dispatch({
        type: INIT_USER_FOLLOW_REQUEST,
        payload: userIdx,
      });
    },
    [dispatch]
  );

  const getUserAlbums = useCallback(
    (userIdx: number, lastIdx: number) => {
      dispatch({
        type: GET_USER_ALBUMS_REQUEST,
        payload: { userIdx, lastIdx },
      });
    },
    [dispatch]
  );

  return { userState, getUserInfoAll, userFollow, getIsFollow, getUserAlbums };
};

export default useUser;
