import { createStore, applyMiddleware } from "../redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduers from "./reducers";
// import thunk from "redux-thunk";

// function compose(...fns) {
//     return fns.reduce((a, b) => (...args) => a(b(...args)))
// }
// function applyMiddleware(...middlewares) {
//   return function (createStore) {
//     return function (reducer) {
//       let store = createStore(reducer); //先创建老仓库
//       let dispatch; //指向改造后的dispatch方法
//       let middlewareAPI = {
//         getState: store.getState,
//         dispatch: (action) => {
//           console.log(">>>>>>>>>hhhhhhhhh", dispatch);
//           dispatch(action);
//         },
//         //永远指向undefined
//       };
//       console.log(">>>>>>>>>", dispatch, (action) => dispatch(action));
//       let chain = middlewares.map((middleware) => middleware(middlewareAPI));
//       //let [promise,thunk,logger] = chain;
//       //dispatch=promise(thunk(logger(store.dispatch)));
//       dispatch = compose(...chain)(store.dispatch);
//       //dispatch = middleware(middlewareAPI)(store.dispatch);
//       return {
//         ...store,
//         dispatch,
//       };
//     };
//   };
// }

// logger(thunk(store.dispatch))

// 日志中间件的真正实现
function logger(middlewareAPI) {
  const { dispatch, getState } = middlewareAPI;
  return function (next) {
    return function (action) {
      console.log("prev state", getState(), action, next);
      next(action);
      console.log("next state", getState());
    };
  };
}

function thunk(middlewareAPI) {
  const { dispatch, getState } = middlewareAPI;
  console.log(">>>>>>>>>>>>>>thunthunkkkkkk>>", dispatch);
  return function (next) {
    return function (action) {
      if (typeof action === "function") {
        return action(dispatch, getState);
      } else {
        return next(action);
      }
    };
  };
}

function promise(middlewareAPI) {
  const { dispatch, getState } = middlewareAPI;
  return function(next) {
      return function(action) {
          if (typeof action.then === 'function') {
              return action.then(newAction => dispatch(newAction)) 
          }else {
              return next(action)
          }
      }
  }
}

const store = applyMiddleware(thunk, logger)(createStore)(reduers);
// const store = createStore(reduers, applyMiddleware(thunk));

export default store;

// /**
//  * 实现一个中间件，状态改变前和改变后打印日志
//  *
//  */
// let dispatch = store.dispatch;
// // store.dispatch = function (action) {
// //   console.log("prev state,", store.getState());
// //   dispatch(action);
// //   console.log("next state,", store.getState());
// // };

// store.dispatch = function(action){
//     setTimeout(() => {
//         dispatch(action)
//     },3000)
// }
// console.log(store);

function add(c) {
  return () => c.action();
}
function a() {
  let b = 0;
  const c = {
    action: () => {
      return b;
    },
  };
  const v = add(c);
  return () => {
    b = b + 1;
    return v();
  };
}
