

function combineReducers(reducerMap) {
  const reducerKeys = Object.keys(reducerMap);
  const finalReducers = {};

  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if (typeof reducerMap[key] === "function") {
      finalReducers[key] = reducerMap[key];
    }
  }
  const finalReducersKeys = Object.keys(finalReducers);

  return (state = {}, action) => {
    const nextState = {};
    let hasChanged = false;
    for (let i = 0; i < finalReducersKeys.length; i++) {
      const key = finalReducersKeys[i];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducersKeys !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

export default combineReducers
