import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import Portifolio from './pages/Portifolio';
import About from './pages/About';

function Routes() {
    return (
        <BrowserRouter>
            <Switch >
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/portfolio" component={Portifolio}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;