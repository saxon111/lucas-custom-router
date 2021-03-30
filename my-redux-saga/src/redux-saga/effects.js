import * as effectTypes from "./effectTypes";
function take(actionType) {
  return {
    type: effectTypes.TAKE,
    actionType,
  };
}

function put(action) {
  return {
    type: effectTypes.PUT,
    action,
  };
}

function fork(saga) {
  return {
    type: effectTypes.FORK,
    saga,
  };
}

/** 等待每一次的actionType 派发，然后以单独子进程去调用saga**/

function takeEvery(actionType, saga) {
  function* takeEveryHelper() {
    while (true) {
      yield take(actionType);
      yield fork(saga);
    }
  }
  return fork(takeEveryHelper);
}

export { take, put, fork, takeEvery };
