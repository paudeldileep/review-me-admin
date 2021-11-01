import { combineReducers } from "redux";

import adminReducer from "./adminSlice";
import productReducer from "./productSlice";
import userReducer from "./userSlice";
//import productReducer from '../redux/productSlice';

const rootReducer = combineReducers({
  admin: adminReducer,
  product: productReducer,
  user: userReducer,
});

export default rootReducer;
