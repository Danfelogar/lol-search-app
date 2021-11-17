import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { SummonerStatsScreen } from '../components/SummonerData/SummonerStatsScreen';
import { SummonerSearchScreen } from '../components/SummonerSearch/SummonerSearchScreen';

export const SummonerSearch = () => {
    return (
        <div>
            <Switch>
                <Route
                exact
                path="/summonerSearch"
                component={ SummonerSearchScreen } />
                <Route
                exact
                path="/summonerSearch/stats"
                component={ SummonerStatsScreen } />

                <Redirect to="/summonerSearch" />
            </Switch>
        </div>
    )
}
