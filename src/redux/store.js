import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './rootReducer'

const store=createStore(rootReducer,applyMiddleware(thunkMiddleware))

export default store