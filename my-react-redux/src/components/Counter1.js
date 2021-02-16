import React from "react";

import { ADD1, MINUS1 } from "../store/action-type";
import { connect, useDispatch, useSelector } from "../react-redux";

// actionCreator
function add() {
  //   console.log(args);

  return { type: ADD1 };
}
function minus() {
  return { type: MINUS1 };
}

const actions = { add, minus };

// class Counter1 extends React.Component {
//   //   state = { number: store.getState().counter1.number };

//   //   componentDidMount() {
//   //     this.unsubscribe = store.subscribe(() => {

//   //       this.setState({ number: store.getState().counter1.number });
//   //     });
//   //   }

//   //   componentWillUnmount() {
//   //     this.unsubscribe();
//   //   }

//   handleAdd = (event) => {
//     console.log("props>>>>>>>>>>counter1", this.props);
//     return this.props.dispatch(add());
//   };
//   handleMinus = () => {
//     return this.props.dispatch(minus());
//   };

//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <p>{this.props.number}</p>
//         <button onClick={this.handleAdd}>+</button>
//         <button onClick={this.handleMinus}>-</button>
//       </div>
//     );
//   }
// }

function Counter1() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter1.number);

  const handleAdd = (event) => {
    return dispatch((dic) => dic((dicc) => dicc(add())));
  };
  const handleMinus = () => {
    return dispatch(minus());
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}

export default Counter1;
