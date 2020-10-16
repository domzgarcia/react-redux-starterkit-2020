import React, {Component, Fragment} from 'react';
import DocsNav from './common-header';

class Dashboard extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <div className="dg-side-nav">
                <DocsNav />
                </div>
                <div className="dg-content">
                    <h1>Dashboard</h1>
                </div>
            </Fragment>
        )
    }
}

export default Dashboard;