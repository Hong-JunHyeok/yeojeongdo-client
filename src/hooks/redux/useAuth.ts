import { Token } from "lib/Token";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "store/reducers";
import { LOG_IN_REQUEST, LOG_OUT } from "store/reducers/authReducer/actions";

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

  return { authState, login, logout };
};

export default useAuth;
