function compose(...fns) {
  return fns.reduce((a, b) => (...args) => a(b(...args)));
}
function applyMiddleware(...middlewares) {
  return function (createStore) {
    return function (reducer) {
      let store = createStore(reducer); //先创建老仓库
      let dispatch; //指向改造后的dispatch方法
      let middlewareAPI = {
        getState: store.getState,
        dispatch: (action) => {
          console.log(">>>>>>>>>hhhhhhhhh", dispatch);
          dispatch(action);
        },
        //永远指向undefined
      };
      console.log(">>>>>>>>>", dispatch, (action) => dispatch(action));
      let chain = middlewares.map((middleware) => middleware(middlewareAPI));
      //let [promise,thunk,logger] = chain;
      //dispatch=promise(thunk(logger(store.dispatch)));
      dispatch = compose(...chain)(store.dispatch);
      //dispatch = middleware(middlewareAPI)(store.dispatch);
      return {
        ...store,
        dispatch,
      };
    };
  };
}

export default applyMiddleware
