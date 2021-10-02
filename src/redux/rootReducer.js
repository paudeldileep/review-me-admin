import { combineReducers } from 'redux'

import adminReducer from "./adminSlice";
//import productReducer from '../redux/productSlice';


const rootReducer=combineReducers({
    admin:adminReducer,
})

export default rootReducer