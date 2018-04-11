import { combineReducers } from 'redux';
import { homeReducer } from './home.reducer/reducer.home';

export const rootReducer = combineReducers({ homeReducer });
