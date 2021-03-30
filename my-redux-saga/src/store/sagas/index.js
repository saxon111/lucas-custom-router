import watcher_add from "./counter";
import { all } from "redux-saga/effects";


// all的意思是同时启动多个saga
function *rootSaga() {
  yield all([watcher_add()]);
}

export default rootSaga;
