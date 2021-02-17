import React, { useLayoutEffect } from "react";
import { userApi } from "../utils";

class UserDetail extends React.Component {
  state = { user: {} };
  componentDidMount() {
    let user = this.props.location.state;
    if (!user) {
      user = userApi.find(this.props.match.params.id);
    }
    if (user) {
      this.setState({ user });
    }
  }
  render() {
    let { user } = this.state;
    return (
      <div>
        <p>ID:{user.id}</p>
        <p>name: {user.name}</p>
      </div>
    );
  }
}

export default UserDetail;
