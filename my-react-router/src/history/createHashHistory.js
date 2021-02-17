/**
 * 1. state的处理 自己维护state
 * 2. 历史栈的处理 自己维护一个栈
 *
 * @returns
 */
function createHashHistory() {
  let action;
  let listeners = [];
  let historyStack = [];
  let historyIndex = -1;
  let state;
  function listen(listener) {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  const hashChange = () => {

    let pathname = window.location.hash.slice(1);
    Object.assign(history, { action, location: { pathname, state } });
    if (!action || action === "PUSH") {
      historyStack[++historyIndex] = history.location;
      //   action = undefined
    } else if (action === "REPLACE") {
      historyStack[historyIndex] = history.location;
    }
    listeners.forEach((listener) => listener(history.location));
  };
  window.addEventListener("hashchange", hashChange);

  function push(pathname, nextState) {
    // 给hash值赋值不需要加‘#‘
    // debugger;
    action = "PUSH";
    // historyStack[++historyIndex] = history.location
    if (typeof pathname === "object") {
      state = pathname.state;
      pathname = pathname.pathname;
    } else {
      state = nextState;
    }

    window.location.hash = pathname;
  }

  function replace(pathname, nextState) {
    // 给hash值赋值不需要加‘#‘
    // debugger;
    action = "REPLACE";
    // historyStack[++historyIndex] = history.location
    if (typeof pathname === "object") {
      state = pathname.state;
      pathname = pathname.pathname;
    } else {
      state = nextState;
    }
    window.location.hash = pathname;
  }

  function go(n) {
    action = "POP";
    historyIndex += n;

    const nextLocation = historyStack[historyIndex];
    if (nextLocation) {
      state = nextLocation.state;
      window.location.hash = nextLocation.pathname;
    } else {
      historyIndex -= n;
    }

    // window.history.go(n)
  }
  function goBack() {

    go(-1);
  }
  function goForward() {
    go(1);
  }

  // 在这里我们这个history跟window.history 没有关系
  // window.history 是html5的一个api，有兼容性问题，但是hash完全兼容
  const history = {
    action, // 当前最后一个动作是什么动作
    location: {
      pathname: "/",
      state: undefined,
    },
    go,
    push,
    replace,
    goBack,
    goForward,
    listen,
  };

  if (window.location.hash) {
      hashChange()
  }else {
    window.location.hash = '/'
  }

//   window.location.hash = window.location.hash
//     ? window.location.hash.slice(1)
//     : "/";
//   if (!action) {
//     historyStack[++historyIndex] = history.location;
//   }
 
  return history;
}

export default createHashHistory;
