import React, {Component, Fragment} from 'react';
import DocsNav from './common-header';

class AWOLReport extends Component {
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
                        <h1>404<span className="sub-headline">Page not found.</span></h1>
                    </div>
                    <div className="dg-content">
                        You found a glitch!
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AWOLReport;