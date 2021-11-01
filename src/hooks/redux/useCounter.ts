import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "store/reducers";
import { ADD_COUNT, REMOVE_COUNT } from "store/reducers/counterReducer/actions";

const useCounter = () => {
  const dispatch = useDispatch();
  const { number } = useTypedSelector(state => state.counter);

  const increase = useCallback(() => {
    dispatch({ type: ADD_COUNT });
  }, [dispatch]);
  const decrease = useCallback(() => {
    dispatch({
      type: REMOVE_COUNT,
    });
  }, [dispatch]);

  return { number, increase, decrease };
};

export default useCounter;
