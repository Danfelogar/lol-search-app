import { combineReducers } from 'redux';

import { championsReducer } from './championsReducer';

export const rootReducer = combineReducers({
    champions: championsReducer,
});