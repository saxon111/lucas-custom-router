// import { userApi } from "../utils";
import UserAdd from "./UserAdd";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import { Link, Route, Redirect, Switch } from "../react-router-dom";
export default function User(props) {
 
  return (
    <div>
      <ul>
        <Link to="/user/list">用户列表</Link>
        <Link to="/user/add">添加用户</Link>
      </ul>
      <Switch>
        <Route path="/user/list" component={UserList} />
        <Route path="/user/add" component={UserAdd} />
        <Route path="/user/detail/:id" component={UserDetail} />
        <Redirect to="/user" />
      </Switch>
      <button onClick={() => props.history.push("/profile")}>
        goto profile
      </button>
      <button onClick={() => props.history.go(-1)}>goto -1</button>
      User
    </div>
  );
}
