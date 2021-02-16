import React from "react";
import ReactReduxContext from "./ReactReduxContext";

function Provider(props) {
  const value = { store: props.store };

  return (
    <ReactReduxContext.Provider value={value}>
      {props.children}
    </ReactReduxContext.Provider>
  );
}

export default Provider;
