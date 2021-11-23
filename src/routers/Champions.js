import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ChampionByIdScreen } from '../components/ChampionById/ChampionByIdScreen';
import { ChampionsListScreen } from '../components/ChampionsList/ChampionsListScreen';

export const Champions = () => {
    return (
        <div className="championWarp">
            <Switch>
                <Route
                exact
                path="/champions"
                component={ ChampionsListScreen } />
                <Route
                exact
                path="/champions/:id"
                component={ ChampionByIdScreen } />

                <Redirect to="/summonerSearch" />
            </Switch>
        </div>
    )
}
