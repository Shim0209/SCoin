import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Header from './Header';
import Coins from '../Screens/Coins';
import Exchanges from '../Screens/Exchanges';
import Prices from '../Screens/Prices';

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Prices} />
                <Route path="/exchanges" component={Exchanges} />
                <Route path="/coins" component={Coins} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
)