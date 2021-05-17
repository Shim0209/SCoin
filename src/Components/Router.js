import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Header from './Header';
import Coins from '../Screens/Coins';
import Exchanges from '../Screens/Exchanges';
import Prices from '../Screens/Prices';
import Detail from '../Screens/Detail';
import DetailExchanges from '../Screens/DetailExchanges';
import DetailMarkets from '../Screens/DetailMarkets';

export default () => (
    <Router>
        <>
            <Header />
            <Route path="/" exact component={Prices} />
            <Route path="/exchanges" exact component={Exchanges} />       
            <Route path="/coins" exact component={Coins} />
            <Route path="/coins/:id" component={Detail} />
            <Route path="/coins/:id/exchanges"   component={DetailExchanges} />
            <Route path="/coins/:id/markets" component={DetailMarkets} />
            <Redirect from="*" to="/" />
        </>
    </Router>
)