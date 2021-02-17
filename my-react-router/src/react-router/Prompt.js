import React from "react";
import RouterContext from "./RouterContext";
import LifeCycle from "./LifeCycle";

function Prompt(props) {
  const { when, message } = props;

  return (
    <RouterContext.Consumer>
      {(context) => {
   
        const block = context.history.block;
        if (!when) {
          block();
          return null;
        }

        return (
          <LifeCycle
            onMount={(self) => {
              console.log("self", self);
              self.release = block(message);
            }}
            onUnMount={(self) => {
              self.release();
            }}
          />
        );
      }}
    </RouterContext.Consumer>
  );
}

export default Prompt;
