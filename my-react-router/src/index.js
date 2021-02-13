import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect,
  Link,
} from "./react-router-dom";
import Home from "./component/Home";
import User from "./component/User";
import Profile from "./component/Profile";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ul>
        <Link to="/user">用户管理</Link>
        <a href="/user">123</a>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/profile" component={Profile} />
        <Redirect to="/user" />
      </Switch>
      {/* <Route path="/404" component={() => <h1>404</h1>} /> */}
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
