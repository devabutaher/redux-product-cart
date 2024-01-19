import { combineReducers } from "redux";
import productReducer from "./product/reducer";

const rootReducer = combineReducers({
  productStore: productReducer,
});

export default rootReducer;
