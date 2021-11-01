import { combineReducers } from 'redux'

import adminReducer from "./adminSlice";
import productReducer from "./productSlice";

//import productReducer from '../redux/productSlice';


const rootReducer=combineReducers({
    admin:adminReducer,
    product:productReducer,
   
})

export default rootReducer