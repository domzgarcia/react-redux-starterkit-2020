import React, {Component, Fragment} from 'react';
import DocsNav from './common-header';

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
                        <div className="dg-content">
                            <strong># Short description</strong>
                            <p>This module records the rendered hours per project/tasks an employee did within 
                            the day. An employee may logs multiple tasks within 1 hour but shouldn't be overlapping
                            each other tasks.</p>

                            <strong># Illustrations</strong>

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
                            </div>

                            <strong># Code Reference</strong>
                            <p>You may find the code in this directory <em>app/modules/worklogs</em>. 
                            Worklogs version 1 doesn't have a task overlaps checker that's why I created a validator called <em>LogChecker.js</em>,
                            &nbsp;what it does is it avoids tasks overlaps within an hour and before or after hour respectedly.</p>

                            <strong># Steps / How it works</strong>
                            <ul className="steps">
                                <li>Click dashboard calendar, a popup will appear and then click <em>ADD/EDIT WORKLOG</em>.</li>
                                <li>User may select project or directly click one of the time slot divided by hours.</li>
                                <li>A small popup will appears, user may set <em>FROM and TO</em>.</li>
                                <li>User may select certain Project and Tasks.</li>
                                <li>The app have drag and drop functionality, upon setting time the app is smart enought to avoid overlapping of tasks like the description said above.</li>
                            </ul>

                            <strong># Database Dependencies</strong>
                            <p>There is no database dependencies attached to this module.</p>
                        </div>
                    </div>

                    <div className="dg-content">
                        <strong># Key takeaways</strong>

                        <p>Lorem ipsum dolor amet</p>
                    </div>


                </div>
            </Fragment>
        )
    }
}

export default Worklogs;