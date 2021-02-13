import React from "react";
import RouterContext from "./RouterContext";

class Router extends React.Component {
  static computeRootMatch(pathname) {
    return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
  }
  constructor(props) {
    super(props);
    this.state = {
      location: props.history.location,
    };
    // 监听历史对象中的路径变化，当路径发生变化后执行回调函数
    this.unlisten = props.history.listen((location) => {
      this.setState({ location });
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    let value = {
      location: this.state.location, // 用来传递给Route, 判断路径是否匹配
      history: this.props.history, // 用来让组件跳转路径
      match: Router.computeRootMatch(this.state.location.pathname),
    };
    return (
      <RouterContext.Provider value={value}>
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}

export default Router;
