import React, { useLayoutEffect } from "react";
import { Link } from "../react-router-dom";
import { userApi } from "../utils";
class UserList extends React.Component {
  state = { users: [] };
  componentDidMount() {
    let users = userApi.list();
    this.setState({ users });
  }
  render() {
    return (
      <ul>
        {this.state.users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={{ pathname: `/user/detail/${user.id}`, state: user }}>
                {user.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default UserList;
