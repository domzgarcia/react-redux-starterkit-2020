import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import asyncRoute from 'Utilities/asyncRoute';
import './views/styles/docs.styles.scss';

// # Docs pages
const DockerSetup = asyncRoute(() => import('./he/docker-setup'));
const Worklogs = asyncRoute(() => import('./views/worklogs'));


const Dashboard = asyncRoute(() => import('./views/dashboard'));
const MyApprovalPage = asyncRoute(() => import('./views/myapprovalpage'));
const MTAReport = asyncRoute(() => import('./views/mtareport'));
const AWOLReport = asyncRoute(() => import('./views/awolreport'));
const ProjectsPagination = asyncRoute(() => import('./views/projects-pagination'));

const Docs404 = asyncRoute(() => import('./views/404'));

class DocsRoute extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="dg-main-docs -app-width">
            <Switch>
                <Route exact path='/docs/he-docker-setup' component={DockerSetup}/>
                <Route exact path='/docs/he-worklogs' component={Worklogs}/>
                <Route exact path='/docs/he-my-approval-page' component={MyApprovalPage}/>
                <Route exact path='/docs/he-mta-report' component={MTAReport}/>
                <Route exact path='/docs/he-awol-report' component={AWOLReport}/>
                <Route exact path='/docs/he-projects-pagination' component={ProjectsPagination}/>

                <Route exact path='/docs' component={Dashboard}/>
                <Route component={Docs404}/>
            </Switch>
            </div>
        )
    }
}

export default DocsRoute;