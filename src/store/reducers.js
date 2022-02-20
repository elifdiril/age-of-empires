import { combineReducers } from "redux";

import UnitReducer from "./units/reducers";

const rootReducer = combineReducers({
  UnitReducer,
});

export default rootReducer;
