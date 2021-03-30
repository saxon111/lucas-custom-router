import * as types from "../action-type";

function counter(oldState = { number: 0 }, action) {
  // 在reducer里只处理同步action ADD，异步在saga中间件里处理
  switch (action.type) {
    case types.ADD:
      return { number: oldState.number + 1 };
    default:
      return oldState;
  }
}

export default counter;
