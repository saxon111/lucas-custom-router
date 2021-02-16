import { ADD1, MINUS1 } from "../action-type";

let initialState = { number: 5 };
const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case ADD1:
      return { number: oldState.number + 1 };
    case MINUS1:
      return { number: oldState.number - 1 };
    default:
      return oldState;
  }
};

export default reducer;
