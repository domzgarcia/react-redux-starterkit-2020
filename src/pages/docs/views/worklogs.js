import React, {Component, Fragment} from 'react';
import DocsNav from './common-header';
import CodeViewer from 'Common/codeviewer';

const codeBlock = require('./codeblock/worklogs.codeblock');

class Worklogs extends Component {
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
                            <h1>He<span className="sub-headline">Worklogs</span></h1>
                        </div>
                        <div className="dg-box">
                            <strong># Short description</strong>
                            <p>This module records the rendered hours per project/task an employee did within the day. An employee may log multiple tasks within an hour but shouldn't be overlapping each other tasks</p>

                            <strong># Screenshots</strong>

                            <div className="screenshot-wrapper">
                                <div className="thumbnail-placeholder">
                                    <div className="outer-light">
                                        <div className="inner-dark">
                                            <span>Thumb1</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumbnail-placeholder">
                                    <div className="outer-light">
                                        <div className="inner-dark">
                                            <span>Thumb2</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumbnail-placeholder">
                                    <div className="outer-light">
                                        <div className="inner-dark">
                                            <span>Thumb3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumbnail-placeholder">
                                    <div className="outer-light">
                                        <div className="inner-dark">
                                            <span>Thumb4</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumbnail-placeholder">
                                    <div className="outer-light">
                                        <div className="inner-dark">
                                            <span>Thumb5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <strong># Code Reference</strong>
                            <p>You may find the code in this directory <em>app/modules/worklogs</em>. 
                            Worklogs version 1 doesn't have a task overlaps checker that's why I created a validator called <em className="highlight">LogChecker.js</em>,
                            &nbsp;what it does is it avoids tasks overlap within an hour and before or after an hour respectively.</p>

                            <CodeViewer codeBlock={codeBlock} lang={'js'}/>

                            <strong># Steps / How it works</strong>
                            <ul className="steps">
                                <li>Click dashboard calendar, a popup will appear and then click <em>ADD/EDIT WORKLOG</em>.</li>
                                <li>User may select project or directly click one of the time slot shown by hours.</li>
                                <li>A small popup will appears, user may set <em>FROM and TO</em>.</li>
                                <li>User may select certain Project and Tasks.</li>
                                <li>The app has a drag and drop functionality, upon setting the time, it is smart enough to 
                                detect the overlap tasks and inform the user using right away.</li>
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
                            <li>Its a bit confusing when you have a lot of variables that has been declared. 
                            It is not easy to figure out right away the source of error. 
                            Lesson learned, try to minimize the number of moving parts/variable. So that
                            the less variable have been declared the easier to debug.</li>
                            <li>It's not good that this library returns different types of result, it would be better 
                            if it return a status instead to avoid boolean which is only limited to true or false.
                            </li>
                            {/* <li>Sharing is caring, find time to teach junior developers whenever they needed, 
                            at the end of the day it's not just your colleague but a friend.</li> */}
                        </ul>
                    </div>

                </div>
            </Fragment>
        )
    }
}

export default Worklogs;