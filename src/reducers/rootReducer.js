import { combineReducers } from 'redux';

import { championsReducer } from './championsReducer';
import { summonerReducer } from './summonerReducer';

export const rootReducer = combineReducers({
    champions: championsReducer,
    summoner: summonerReducer,
});