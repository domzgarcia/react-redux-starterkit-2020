import React, {Component, Fragment} from 'react';
import DocsNav from '../common-sidenav';

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
                <div className="dg-dynamic">
                    <div className="dg-header">
                        <h1>Welcome!</h1>
                    </div>
                    <div className="dg-content">
                        content
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Dashboard;