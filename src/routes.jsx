import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import Portifolio from './pages/Portifolio';



function Routes() {
    return (
        <BrowserRouter>
            <Switch >
                <Route path="/" exact component={Home}/>
                <Route path="/portifolio" component={Portifolio}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;