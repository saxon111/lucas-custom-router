import { takeEvery, put } from "redux-saga/effects";
import * as types from "../action-type";

function* worker_add() {
  yield put({ type: types.ADD });
}

function* watcher_add() {
  yield takeEvery(types.ASYNC_ADD, worker_add);
}

export default watcher_add;
