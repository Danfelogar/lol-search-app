import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { Navbar } from '../components/Navbar/Navbar';
import { Champions } from './Champions';
import { SummonerSearch } from './SummonerSearch';



export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar/>
                    <Switch>
                        <Route
                        path="/summonerSearch"
                        component={ SummonerSearch }
                        />
                        <Route
                        path="/champions"
                        component={ Champions }
                        />
                        <Redirect to="/summonerSearch" />
                    </Switch>
            </div>
        </Router>
    )
}
