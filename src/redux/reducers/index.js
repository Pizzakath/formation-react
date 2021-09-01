import { combineReducers } from "redux";
import tachesReducer from "./tachesReducer";

export const reducers = combineReducers ({
  toutesLesTaches: tachesReducer
}) 