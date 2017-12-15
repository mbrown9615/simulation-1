import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Ashelf from './components/shelf_A';
import Bshelf from './components/shelf_B';
import Cshelf from './components/shelf_C';
import Dshelf from './components/shelf_D';
import { BADFAMILY } from 'dns';

//42F
export default (
    <Switch>
        
        <Route path='/A' component={Ashelf}/>
        <Route path='/B' component={Bshelf}/>
        <Route path='/C' component={Cshelf}/>
        <Route path='/D' component={Dshelf}/>
    </Switch>
)