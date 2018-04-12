import { combineReducers } from 'redux';
import { homeReducer } from './home.reducer/reducer.home';
import { movieReducer } from './mobile.reducer/reducer.mobile';

export const rootReducer = combineReducers({
    homeReducer, movieReducer
});
