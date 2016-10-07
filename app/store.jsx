import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/user';

const reducers = combineReducers({
  userReducer: userReducer
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
