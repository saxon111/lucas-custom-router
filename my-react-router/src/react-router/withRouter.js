import React from "react";
import RouterContext from "./RouterContext";

function withRouter(OldComponent) {
  return (props) => {
    console.log(">>>withRouter", props);
    return (
      <RouterContext.Consumer>
        {(value) => {
          return <OldComponent {...props} {...value} />;
        }}
      </RouterContext.Consumer>
    );
  };
}

export default withRouter
