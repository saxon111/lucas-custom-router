import React from "react";

class Login extends React.Component {

  handleLogin = () => {
    localStorage.setItem("login", true);
    let to;
    if (this.props.location.state) {
        to = this.props.location.state.from || '/'
    }
    this.props.history.push(to)
  };
  render() {
    return <button onClick={this.handleLogin}>登陆</button>;
  }
}

export default Login;
