import * as effectTypes from "./effectTypes";

/**
 *执行/启动 saga的方法
 *我们可能会获取仓库状态，有可能dispatch function，也可能监听动作
 */
function runSaga(env, saga) {
  const { getState, dispatch, channel } = env;
  const it = typeof saga === "function" ? saga() : saga;

  function next(value) {
    const { value: effect, done } = it.next(value);
    console.log("value>>>>>>>>>>", value);
    if (!done) {
      if (typeof effect[Symbol.iterator] === "function") {
        runSaga(env, effect);
        next();
      } else {
        switch (effect.type) {
          case effectTypes.TAKE: // 等待派发TAKE动作
            channel.take(effect.actionType, next);
            break;
          case effectTypes.PUT:
            dispatch(effect.action);
            next();
            break;
          case effectTypes.FORK:
            runSaga(env, effect.saga); // 开始一个新的子进程去运行saga
            next(); // 不会阻塞当前saga继续执行
            break;
          default:
            break;
        }
      }
    }
  }
  return next();
}

export default runSaga;
