import React from "react";
import ReactReduxContext from "./ReactReduxContext";
import { bindActionCreators } from "../redux";

// 函数组件版
// mapDispatchToProps 可能是对象也可能是函数
function connect(mapStateToProps, mapDispatchToProps) {
  // HOC接受一个老组件，返回新组件
  return function (OldComponent) {
    return function (props) {
      const { store } = React.useContext(ReactReduxContext);
      console.log(store);
      const { getState, dispatch, subscribe } = store;
      const prevState = getState(); // 获取store的state

      const stateProps = React.useMemo(() => mapStateToProps(prevState), [
        prevState,
      ]);

      console.log(">>>>>>>>>stateProps", stateProps);
      const dispatchProps = React.useMemo(() => {
        let dispatchProps;
        if (typeof mapDispatchToProps === "object") {
          dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
        } else if (typeof mapDispatchToProps === "function") {
          dispatchProps = mapDispatchToProps(dispatch);
        } else {
          dispatchProps = { dispatch };
        }
        return dispatchProps;
      }, [dispatch]);
      const [, forceUpdate] = React.useReducer((x) => x + 100, 0);
      React.useLayoutEffect(() => {
        return subscribe(forceUpdate);
      }, [store]);
      return <OldComponent {...stateProps} {...props} {...dispatchProps} />;
    };
  };
}

export default connect;

// function connectClass(mapStateToProps, mapDispatchToProps) {
//   // HOC接受一个老组件，返回新组件
//   return function (OldComponent) {
//     return class extends React.Component {
//       render() {
//         return <OldComponent {...this.props} />;
//       }
//     };
//   };
// }
