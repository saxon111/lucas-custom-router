import  { useContext } from "react";
import matchPath from "./matchPath";
import RouterContext from "./RouterContext";

export const useParams = () => {
  const match = useContext(RouterContext).match;
  return match ? match.params : {};
};

export const useHistory = () => {
  return useContext(RouterContext).history;
};

export const useLocation = () => {

  return useContext(RouterContext).location;
};

export const useRouteMatch = (path) => {
    const location = useLocation();
    const match = useContext(RouterContext).match;
    return path ? matchPath(location.pathname, path) : match

};
