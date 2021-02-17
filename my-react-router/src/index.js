import React, {useContext} from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect,
  Link,
  NavLink,
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,

} from "react-router-dom";
import {__RouterContext as RouterContext} from "react-router"

function Home() {
  console.log(">>>>>>>>home", useContext(RouterContext));
  return <div>Home</div>;
}

function UserDetail() {
  let params = useParams();
  console.log("params", params);
  let location = useLocation();
  console.log("location", location);
  let history = useHistory();
  console.log("history", history);
  console.log(">>>>>>>>user", useContext(RouterContext));
  return (
    <div>
      id:{params.id} name:{location.state.name}
    </div>
  );
}

function Post() {
  // debugger;
  
  let match = useRouteMatch();
  console.log(">>>>>>>>post", match, useContext(RouterContext));
  return match ? <div>id:{match.params.id}</div> : <div>Not found</div>;
}
ReactDOM.render(
  <BrowserRouter>
    <ul>
      <li>
        <Link to="/">首页</Link>
      </li>
      <li>
        <Link to={{ pathname: `/user/detail/1`, state: { id: 1, name: "xu" } }}>
          用户详情
        </Link>
      </li>
      <li>
        <Link to="/post/1">帖子</Link>
      </li>
    </ul>
    <Route exact path="/" component={Home} />
    <Route path="/user/detail/:id" component={UserDetail} />
    <Route path="/post/:id" component={Post} />
  </BrowserRouter>,
  document.getElementById("root")
);

// 不用hooks

// import Home from "./component/Home";
// import UserDetail from "./component/UserDetail";
// import Home from "./component/Home";
// import User from "./component/User";
// import Profile from "./component/Profile";
// import Projected from "./component/Projected";
// import Login from "./component/Login";
// import NavBar from "./component/NavBar";

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <NavBar title="返回首页" />
//       <ul>
//         <li>
//           <NavLink
//             to="/"
//             activeClassName="strong"
//             activeStyle={{ color: "red" }}
//             style={{ textDecoration: "line-through" }}
//             exact
//           >
//             首页
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/user"
//             activeClassName="strong"
//             activeStyle={{ color: "red" }}
//             style={{ textDecoration: "line-through" }}
//             exact
//           >
//             用户管理
//           </NavLink>
//         </li>
//       </ul>
//       {/* <Switch> */}
//       <Route exact path="/" component={10 > 2 ? Home : null} />

//       <Route path="/user" component={User} />
//       <Route path="/login" component={Login} />
//       <Projected path="/profile" component={Profile} />
//       {/* <Redirect to="/user" /> */}
//       {/* </Switch> */}
//       {/* <Route path="/404" component={() => <h1>404</h1>} /> */}
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
