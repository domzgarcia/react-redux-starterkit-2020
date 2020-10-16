import React, {Component, Fragment} from 'react';
import DocsNav from './common-header';

class MyApprovalPage extends Component {
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
                        <h1>He<span className="sub-headline">My Approval Page</span></h1>
                    </div>
                    <div className="dg-content">
                        content
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MyApprovalPage;