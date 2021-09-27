import { AnyAction } from "redux";
import { ADD_COUNT, REMOVE_COUNT } from "./actions";
import { CounterState } from "./types";

const initialState: CounterState = {
  number: 0,
};

function counterReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        number: state.number + 1,
      };
    case REMOVE_COUNT:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counterReducer;
