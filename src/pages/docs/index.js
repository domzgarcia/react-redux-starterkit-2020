import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import asyncRoute from 'Utilities/asyncRoute';

const Dashboard    = asyncRoute(() => import('./views/dashboard'));
const Other    = asyncRoute(() => import('./views/other'));

class DocsRoute extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Switch>
                <Route exact path='/docs/other' component={Other}/>
                <Route exact path='/docs' component={Dashboard}/>
            </Switch>
        )
    }
}

export default DocsRoute;