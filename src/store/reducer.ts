import { combineReducers } from "redux";

import counterReducer from "./counter/reducer";

const reducer = combineReducers({
  counter: counterReducer,
});

export default reducer;
