import React from "react";
import ReactReduxContext from "../ReactReduxContext";

function useSelectorWithStore(selector, store) {
  const { getState, subscribe } = store;
  const prevState = getState();
  const stateProps = React.useMemo(() => {
    return selector(prevState);
  }, [prevState]);

  const [, forceRender] = React.useReducer((s) => s + 1, 0);
  React.useLayoutEffect(() => {
    return subscribe(forceRender);
  }, [store]);

  return stateProps;
}

function useSelector(selector) {
  const { store } = React.useContext(ReactReduxContext);
  const selectedState = useSelectorWithStore(selector, store);
  return selectedState;
}

export default useSelector;
