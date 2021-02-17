import React from "react";
import RouterContext from "./RouterContext";
import matchPath from "./matchPath";

class Switch extends React.Component {
  static contextType = RouterContext;
  render() {
    const { location, match: contextMatch } = this.context;
    let element, match;
    React.Children.forEach(this.props.children, (child) => {
      if (!match && React.isValidElement(child)) {
        match = child.props.path
          ? matchPath(location.pathname, child.props)
          : contextMatch;
 
        element = child;
      }
    });
    
    return match ? React.cloneElement(element, {computedMatch:match}) : null;
  }
}

export default Switch;
