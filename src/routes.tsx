import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Landing from './pages/Landing';
import Cv from './pages/Cv';


function Routes() {
    return (
        <BrowserRouter>
            <Switch >
                <Route path="/" exact component={Landing}/>
                <Route path="/cv" component={Cv}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;