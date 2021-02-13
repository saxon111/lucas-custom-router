import React from "react";
import RouterContext from "./RouterContext";
import matchPath from "./matchPath";

/**
 * 1. 获取context中的值
 * 2. 匹配路由规则里的path，渲染组件
 *
 * @class Route
 * @extends {React.Component}
 */
class Route extends React.Component {
  static contextType = RouterContext;

  render() {
    const { history, location } = this.context;
    console.log('>>>>>>>>context',this.context)
    const { component: RouteComponent, computedMatch } = this.props;
    console.log(">>>>>>>", location);
    const match = computedMatch
      ? computedMatch
      : matchPath(location.pathname, this.props);
    console.log(">>>>match", match);
    let renderElement = null;
    const routeProps = { history, location, match };
    if (match) {
      routeProps.match = match;
      renderElement = <RouteComponent {...routeProps} />;
    }
    return renderElement;
  }
}

export default Route;
