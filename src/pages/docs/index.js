import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import asyncRoute from 'Utilities/asyncRoute';
import './views/styles/docs.styles.scss';

const Dashboard = asyncRoute(() => import('./views/dashboard'));
const Worklogs = asyncRoute(() => import('./views/worklogs'));
const MyApprovalPage = asyncRoute(() => import('./views/myapprovalpage'));
const MTAReport = asyncRoute(() => import('./views/mtareport'));
const AWOLReport = asyncRoute(() => import('./views/awolreport'));
const Docs404 = asyncRoute(() => import('./views/404'));

class DocsRoute extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="dg-main-docs -app-width">
            <Switch>
                <Route exact path='/docs/worklogs' component={Worklogs}/>
                <Route exact path='/docs/my-approval-page' component={MyApprovalPage}/>
                <Route exact path='/docs/mta-report' component={MTAReport}/>
                <Route exact path='/docs/awol-report' component={AWOLReport}/>
                <Route exact path='/docs' component={Dashboard}/>
                <Route component={Docs404}/>
            </Switch>
            </div>
        )
    }
}

export default DocsRoute;