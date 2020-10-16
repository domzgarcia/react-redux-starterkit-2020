import React from 'react';
import {Link} from 'react-router-dom';

const DocsNav = () => (
    <div className="sidenav-wrapper">
        <div className="category"># HELIUM</div>
        <ul>
            <li><Link to="/docs/docker-setup" >Docker setup</Link></li>
            <li><Link to="/docs/worklogs" >Worklogs</Link></li>
            <li><Link to="/docs/my-approval-page" >My Approval Page</Link></li>
            <li><Link to="/docs/mta-report" >MTA Report</Link></li>
            <li><Link to="/docs/awol-report" >AWOL Report</Link></li>
            <li><Link to="/docs/projects" >Projects</Link></li>
        </ul>
        <div className="category"># CEREBRUM</div>
        <ul>
            <li><Link to="/docs/projects" >Docker Setup</Link></li>
            <li><Link to="/docs/projects" >Custom Style Compiller</Link></li>
            <li><Link to="/docs/my-approval-page" >Helium Ce's sync</Link></li>
            <li><Link to="/docs/worklogs" >Ratecards Pagination</Link></li>
            <li><Link to="/docs/projects">Projects</Link></li>
        </ul>
    </div>
)

export default DocsNav;