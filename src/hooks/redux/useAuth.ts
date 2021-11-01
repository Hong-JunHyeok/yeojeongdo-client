import { Token } from "lib/Token";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useTypedSelector } from "store/reducers";
import {
  JOIN_REQUEST,
  LOAD_MY_INFO_REQUEST,
  LOG_IN_REQUEST,
  LOG_OUT,
} from "store/reducers/authReducer/actions";

const useAuth = () => {
  const dispatch = useDispatch();
  const authState = useTypedSelector((state) => state.auth);

  const login = useCallback(
    (loginData: any) => {
      dispatch({
        type: LOG_IN_REQUEST,
        payload: loginData,
      });
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    dispatch({
      type: LOG_OUT,
    });
    Token.removeToken();
  }, [dispatch]);

  const join = useCallback(
    (joinData: any) => {
      dispatch({
        type: JOIN_REQUEST,
        payload: joinData,
      });
    },
    [dispatch]
  );

  const loadMyInfo = useCallback(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  }, [dispatch]);

  return { authState, login, logout, join, loadMyInfo };
};

export default useAuth;
