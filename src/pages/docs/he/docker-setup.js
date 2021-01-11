import React, {Component, Fragment} from 'react';
import DocsNav from '../common-sidenav';
import CodeViewer from 'Common/codeviewer';
import DocHeadline from 'Common/components/documentation.headline.js';

const codeBlock = require('../codeblock/he.dockerSetup.codeblocks');

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
                            <p>We, the next team handled this project decided to create a docker configuration, MERN stack is a tedious work during setup and demands lots of attention in both BE and FE. These will save time and effort and helps the future developers to make the application up and running quick and easy. These include a docker network for BE and FE, database setup, commands, and data samples to get started.</p>

                            <strong># Screenshots</strong>

                            <p className="disabled-text">No screenshot applicable in this content.</p>

                            <strong># Code Reference</strong>
                            <p>You may find docker setup on a separate repository called heliumdocker.git. This docker .yml created to support MacOS, some portion not be applicable when using other linux OS.</p>

                            <CodeViewer codeBlock={codeBlock} lang={'yml'}/>

                            <strong># Steps / How it works</strong>
                            <ul className="steps">
                                <li>Find or create your own .env file and set values in "APP_IP", "DB_IP", and "EXTERNAL_NETWORK".</li>
                                <li>You should be familiarized and atleast and a has basic knowledge using docker; Create your own docker network in your local machine.</li>
                                <li>To create docker network run this code snippet within your docker CLI: 
                                    <br />
                                    <code>
                                        docker network create \
                                        --driver=bridge \
                                        --subnet=128.0.0.0/16 \
                                        global-app-bridge
                                    </code>
                                </li>
                                <li>Within the same folder called heliumdocker open your CLI and run a command "docker-compose up -d".</li>
                                <li>Use commands, docker-compose start, docker exec -it &lt;pid&gt; bash</li>
                                <li>Aside from it automatically prepare all node dependencies and server files, it also seeds/filled the default data needed copied from Helium DB.</li>
                            </ul>
                            <strong># Database Dependencies</strong>
                            <p><em>heliumdocker/docker-config-mongo-3.2/dump</em></p>
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
                            <li>Using docker is essential in developing a project with many developers involved.</li>
                            <li>It saves time and effort for future developers to get up and running quick and easy.</li>
                        </ul>
                    </div>

                </div>
            </Fragment>
        )
    }
}

export default DockerSetup;