import runSaga from "./runSaga";
import createChannel from "./createChannel";

function createSagaMiddleware() {
  let boundRunSaga;
  const channel = createChannel();
  function sagaMiddleware({ getState, dispatch }) {
    return function (next) {
      // 下一个中间件的dispatch
      boundRunSaga = runSaga.bind(null, { getState, dispatch, channel });

      // 改造后的dispatch方法
      return function (action) {
        // 自己的dispatch方法
        let result = next(action);
        channel.channelPut(action);
        return result;
      };
    };
  }
  sagaMiddleware.run = function (saga) {
    boundRunSaga(saga);
  };
  return sagaMiddleware;
}

export default createSagaMiddleware;
