import React from "react";
import { userApi } from "../utils";
import { Prompt } from "../react-router-dom";
class UserAdd extends React.Component {
  state = { isBlocking: false }; // 阻止跳转的意思
  usernameRef = React.createRef();
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isBlocking: false });
    console.log(">>>>state1", this.state.isBlocking);
    let name = this.usernameRef.current.value;
    userApi.add({ id: Date.now() + "", name });
    setTimeout(() => {
      console.log(">>>>state2", this.state.isBlocking);
      console.log(">>>>>>this", this);
      this.props.history.push("/user/list");
    }, 500);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Prompt
          when={this.state.isBlocking}
          message={(location) =>
            `Are you sure you want to go to ${location.pathname}?`
          }
        />
        <input
          ref={this.usernameRef}
          onChange={(event) => {
            this.setState({ isBlocking: event.target.value.length > 0 });
          }}
        />
        <button type="submit">提交</button>
      </form>
    );
  }
}

export default UserAdd;
