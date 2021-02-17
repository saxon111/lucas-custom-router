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
    console.log(">>>>>>>>>>>ccccc", this.context);

    const {
      component: RouteComponent,
      computedMatch,
      render,
      children,
    } = this.props;

    const match = computedMatch
      ? computedMatch
      : matchPath(location.pathname, this.props);
    console.log(">>>>match", match);
    let renderElement = null;
    const routeProps = { history, location, match };
    if (match) {
      this.context.match = match;
      routeProps.match = match;
      if (RouteComponent) {
        renderElement = <RouteComponent {...routeProps} />;
      } else if (render) {
        renderElement = render(routeProps);
      } else if (children) {
        renderElement = children(routeProps);
      }
    } else {
      if (children) {
        renderElement = children(routeProps);
      }
    }
    return renderElement;
  }
}

export default Route;
