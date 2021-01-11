import React, {Component, Fragment} from 'react';
import DocsNav from '../common-sidenav';
import CodeViewer from 'Common/codeviewer';
import DocHeadline from 'Common/components/documentation.headline';

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
                        <DocHeadline iconLetter={"He"} description={"Worklogs"}/>
                        <div className="dg-box">
                            <strong># Short description</strong>
                            <p>This module presents the number of hours for certain projects/tasks rendered within a day. 
                                An employee may log multiple tasks in an hour but shouldn't be overlapping with each other tasks.
                            </p>

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
                                <li>User may select a project or directly click one of the time blocks shown by hours.</li>
                                <li>A small popup will appear, the user may set <em>FROM and TO</em>.</li>
                                <li>Users may select certain Projects and Tasks.</li>
                                <li>The app has a drag and drop functionality, upon setting the time, it is smart enough to 
                                detect the overlap tasks and inform/prompt user right away.</li>
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
                            <li>It's a bit confusing when you have a lot of variables that have been declared. 
                                It is not easy to figure out right away the source of error. 
                                Lesson learned, try to minimize the number of moving parts/variables, 
                                the fewer variables have been declared the easier to debug.</li>
                            <li>It's not good that this library returns different types of results, 
                                it would be better if it returns a STATUS instead to avoid boolean which is only having limited options.</li>
                        </ul>
                    </div>

                </div>
            </Fragment>
        )
    }
}

export default Worklogs;