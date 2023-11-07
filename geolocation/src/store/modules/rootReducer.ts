import {combineReducers} from 'redux';
import {homeReducer, statusReducer} from './reducers';
import store from '../createStore';

export type RootState = ReturnType<typeof store.getState>;
export default combineReducers({
  homeReducer,
  statusReducer,
});
