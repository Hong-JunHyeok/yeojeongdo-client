import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "store/reducers";
import { GET_USER_INFO_ALL_REQUEST } from "store/reducers/userReducer/actions";

const useUser = () => {
  const dispatch = useDispatch();
  const userState = useTypedSelector((state) => state.user);

  const getUserInfoAll = useCallback(
    (userIdx: number) => {
      dispatch({
        type: GET_USER_INFO_ALL_REQUEST,
        payload: userIdx,
      });
    },
    [dispatch]
  );

  return { userState, getUserInfoAll };
};

export default useUser;
