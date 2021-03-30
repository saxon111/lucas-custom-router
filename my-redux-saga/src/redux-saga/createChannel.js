function createChannel() {
  let currentTakers = []; // 当前监听者
  /**
   * 开始监听某个动作
   * @param {*} actionType 动作类型ASYNC_ADD
   * @param {*} taker 监听者
   */
  function take(actionType, taker) {
    taker.actionType = actionType;
    taker.cancel = () => {
      currentTakers = currentTakers.filter((item) => item !== taker);
    };
    currentTakers.push(taker);
  }

  /**
   *触发takers数组中的函数执行，但是要匹配动作，类型
   * @param {*} action
   */
  function channelPut(action) {
    currentTakers.forEach((taker) => {
      if (taker.actionType === action.type) {
        taker.cancel();
        taker(action);
      }
    });
  }
  return { take, channelPut };
}

export default createChannel;
