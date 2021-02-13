import React from "react";
import { __RouterContext as RouterContext } from "../react-router";
class Link extends React.Component {
  static contextType = RouterContext;
  render() {
    return (
      <a
      
        {...this.props}
        onClick={(event) => {
          event.preventDefault();
          this.context.history.push(this.props.to);
        }}
      >
        {this.props.children}
      </a>
    );
  }
}

export default Link;
