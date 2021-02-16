import { ADD2, MINUS2 } from "../action-type";


let initialState = {number:10}
const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case ADD2:
      return { number: oldState.number + 2 };
    case MINUS2:
      return { number: oldState.number - 2 };
    default:
      return oldState;
  }
};

export default reducer;
