import React, {Component} from 'react';
import DocsNav from './common-header';

class Dashboard extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <DocsNav />
                <h1>Dashboard</h1>
            </div>
        )
    }
}

export default Dashboard;