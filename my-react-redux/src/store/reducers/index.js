import counter1 from "./counter1";
import counter2 from "./counter2";
import { combineReducers } from "../../redux";

const reducers = combineReducers({ counter1, counter2 });
console.log(reducers)
export default reducers
