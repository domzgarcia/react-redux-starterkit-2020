import React, {Component, Fragment} from 'react';
import DocsNav from '../common-sidenav';
import CodeViewer from 'Common/codeviewer';

// const codeBlock = require('./codeblock/worklogs.codeblock');

class MTAReport extends Component {
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
                    
                    <div>
                        <div className="dg-header">
                            <h1>He<span className="sub-headline">Monthly Time and Attendance Report</span></h1>
                        </div>
                        <div className="dg-box">
                            <strong># Short description</strong>
                            <p> --- </p>

                            <strong># Screenshots</strong>

                            <div className="screenshot-wrapper">
                                <div className="thumbnail-placeholder">
                                    <div className="outer-light">
                                        <div className="inner-dark">
                                            <span>Thumb1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <strong># Code Reference</strong>
                            <p> --- </p>

                            <CodeViewer codeBlock={`sample.js`} lang={'js'}/>

                            <strong># Steps / How it works</strong>
                            <ul className="steps">
                                <li>Step #1</li>
                                <li>Step #2</li>
                                <li>Step #3</li>
                            </ul>

                            <strong># Database Dependencies</strong>
                            <p>There is no database dependencies attached to this module.</p>
                        </div>
                    </div>

                    <div className="dg-box">
                        <strong># Technologies</strong>
                        <ul className="steps">
                            <li>Javascript</li>
                        </ul>
                    </div>

                    <div className="dg-box">
                        <strong># Key takeaways</strong>
                        <ul className="steps">
                            <li> takeaways #1</li>
                        </ul>
                    </div>

                </div>
            </Fragment>
        )
    }
}

export default MTAReport;