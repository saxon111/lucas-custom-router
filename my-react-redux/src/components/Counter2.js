import React from "react";

import { ADD2, MINUS2 } from "../store/action-type";
import { connect } from "../react-redux";

// actionCreator
function add2(event, args) {
  console.log(args);
  return { type: ADD2, ...args };
}
function minus2() {
  console.log("here");
  return { type: MINUS2 };
}

const actions = { add2, minus2 };

class Counter2 extends React.Component {
  //   state = { number: store.getState().counter2.number };

  //   componentDidMount() {
  //     this.unsubscribe = store.subscribe(() => {
  //       this.setState({ number: store.getState().counter2.number });
  //     });
  //   }

  //   componentWillUnmount() {
  //     this.unsubscribe();
  //   }

  handleAdd = () => {
    console.log("props>>>>>>>>>>counter222", this.props);
    return this.props.add2();
  };
  handleMinus = () => {
    return this.props.minus2();
  };
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleMinus}>-</button>
      </div>
    );
  }
}

// 这是一个映射函数，可以把store里的state映射出分状态，分状态会成为组件属性的对象

const mapStateToProps = (state) => state.counter2;

// action也会进行绑定，成为组件属性对象

export default connect(mapStateToProps, actions)(Counter2);
