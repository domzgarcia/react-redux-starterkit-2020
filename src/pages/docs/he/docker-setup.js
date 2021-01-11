import React, {Component, Fragment} from 'react';
import DocsNav from '../common-sidenav';
import CodeViewer from 'Common/codeviewer';
import DocHeadline from 'Common/components/documentation.headline.js';

class DockerSetup extends Component {
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
                        <DocHeadline iconLetter="He" description="Docker Setup"/>

                        <div className="dg-box">
                            <strong># Short description</strong>
                            <p>Thinking ahead of time, the team decided to create a docker configuration, MERN stack is tedious work during setup that demands lots of attention in both BE and FE. These will save time and effort and helps the future developers to make the application up and running smooth and easy. These include a docker network for BE and FE, database setup, commands, and data samples to get started.</p>

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
                            <li>Docker / Docker CLI</li>
                            <li>Nodejs server</li>
                            <li>MongoDB</li>
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

export default DockerSetup;