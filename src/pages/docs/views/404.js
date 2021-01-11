import React, {Component, Fragment} from 'react';
import DocsNav from '../common-sidenav';
import CodeViewer from 'Common/codeviewer';

class AWOLReport extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const codeBlock = 
`
version: "3.2"

services:
    helium-app-mac:
    build:
        context: ./docker-config-app
        labels:
        maintainer: "maintainer@email.com"
    image: helium-app-mac:latest
    environment:
        - NODE_ENV=development
    container_name: helium-app-mac
    ports: 
        - "9999:9999"
        - "8888:8888"
        - "3000:3000"
        - "3001:3001"
        - "3002:3002"
    volumes:
        - \${LOCAL_PATH}:/var/www/vhost/app/products/helium
    networks:
        static-ip:
            ipv4_address: \${APP_IP}

    tty: true
    stdin_open: true
    extra_hosts:
        - "heliumdev.com:\${APP_IP}"
        - "host.docker.internal:\${APP_IP}"
    
    depends_on:
        - helium-db-mac

    helium-db-mac:   
    image: 'helium-db-mac:3.2'
    ports:
        - "27017:27017"

    build:
        context: ./docker-config-mongo-3.2
        labels:
        maintainer:  "maintainer@email.com"
    container_name: helium-db-mac
    networks:
        static-ip:
        ipv4_address: \${DB_IP}

    tty: true
    stdin_open: true
volumes:
    mongodb_data:
    driver: local
networks:
    static-ip:
    external: 
        name: \${EXTERNAL_NETWORK}
`.trim();

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
                        <CodeViewer codeBlock={codeBlock} lang={'yml'}/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AWOLReport;