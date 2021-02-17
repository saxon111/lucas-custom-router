import React from "react";
import { Link } from "./";
import { __RouterContext as RouterContext, matchPath } from "../react-router";

function NavLink(props) {
  const context = React.useContext(RouterContext);
  const { pathname } = context.location;
  const {
    activeClassName = "active",
    activeStyle = {},
    className: classNameProp = "",
    exact,
    style: styleProp = {},
    to,
    children,
  } = props;
  let isActive = matchPath(pathname, { path: to, exact });
  let className = isActive
    ? joinClassNames(classNameProp, activeClassName)
    : classNameProp;
  let style = isActive ? { ...styleProp, ...activeStyle } : {};
  let linkProps = { to, style, className, children };
  return <Link {...linkProps}></Link>;
}

function joinClassNames(...classNames) {
  return classNames.filter((c) => c).join(" ");
}


export default NavLink