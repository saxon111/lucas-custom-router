function createBrowserHistory() {
  console.log(">>>>>>create");
  const globalHistory = window.history;

  const listeners = [];
  let state;
  let action;

  function go(n) {
    globalHistory.go(n);
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }

  function notify(newState) {
    Object.assign(history, newState);
    listeners.forEach((listener) => listener(history.location));
  }

  function push(pathname, nextState) {
    action = "PUSH";
    // historyStack[++historyIndex] = history.location
    if (typeof pathname === "object") {
      state = pathname.state;
      pathname = pathname.pathname;
    } else {
      state = nextState;
    }
    console.log(">>>>>>>>", pathname);
    globalHistory.pushState(state, null, pathname);
    let location = { pathname, state };
    notify({ location, state });
  }
  function listen(listener) {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  // 当调用pushState时，会执行这个回调函数，不是自带的，需要自己实现
  window.onpushstate = (event) => {
    console.log(event);
  };

  // 浏览器自带，回退或前进时会触发
  window.onpopstate = (event) => {
    action = "POP";
    console.log("pop", event);
    notify({
      action: "POP",
      location: {
        pathname: window.location.pathname || "/",
        state: globalHistory.state,
      },
    });
  };
  const history = {
    get action() {
      return action;
    }, // 当前最后一个动作是什么动作
    location: {
      pathname: window.location.pathname || "/",
      state: globalHistory.state,
    },
    go,
    push,
    goBack,
    goForward,
    listen,
  };
  return history;
}

export default createBrowserHistory;
