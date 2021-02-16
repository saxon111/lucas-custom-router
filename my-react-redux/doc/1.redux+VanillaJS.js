import { createStore } from "redux";

const ADD = "ADD";
const MINUS = "MINUS";

/**
 * reducer
 * @param {*} oldState  老状态
 * @param {*} action 动作
 */
const reducer = (oldState, action) => {
  switch (action.type) {
    case ADD:
      return { number: oldState.number + 1 };
    case MINUS:
      return { number: oldState.number - 1 };
    default:
      return oldState;
  }
};
const store = createStore(reducer, { number: 20 });

const addBtn = document.getElementById("add-button");
const minusBtn = document.getElementById("minus-button");
const counterValue = document.getElementById("counter-value");

function render() {
  console.log('here')
  counterValue.innerHTML = store.getState().number;
}

render()
store.subscribe(render)
addBtn.addEventListener("click", () => {
  store.dispatch({ type: ADD });
});

minusBtn.addEventListener("click", () => {
  store.dispatch({ type: MINUS });
});

console.log(store.getState());
