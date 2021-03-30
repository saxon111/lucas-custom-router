import * as types from "../action-type";

const actions = {
  add() {
    return {
      type: types.ADD,
    };
  },
  asyncAdd() {
    return {
      type: types.ASYNC_ADD,
    };
  },
};

export default actions;
