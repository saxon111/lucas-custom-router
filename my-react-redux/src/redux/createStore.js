function createStore(reducer, preloadedState) {
  let state = preloadedState;
  const INIT = '@@INIT'
  let listeners = [];
  function getState() {
      console.log('>>>>>>>>ssss',state)
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      let index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }
  function dispatch(action) {
    if (typeof action ===  "function") {
      throw new Error("function error");
    }
    state = reducer(state, action);
    console.log(state, listeners);
    listeners.forEach((listener) => listener());
    return action;
  }

  dispatch({type: INIT})
  console.log(state)

  const store = {
    getState,
    subscribe,
    dispatch,
  };

  return store;
}

export default createStore;
