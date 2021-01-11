import React from 'react';
import {Link} from 'react-router-dom';

const DocsNav = () => (
    <div className="sidenav-wrapper">
        <div className="category"># HELIUM</div>
        <ul>
            <li><Link to="/docs/he-docker-setup" >Docker setup</Link></li>
            <li><Link to="/docs/he-worklogs" >Worklogs</Link></li>
            <li><Link to="/docs/he-my-approval-page" >My Approval Page</Link></li>
            <li><Link to="/docs/he-mta-report" >MTA Report</Link></li>
            <li><Link to="/docs/he-awol-report" >AWOL Report</Link></li>
            <li><Link to="/docs/he-projects-pagination" >Projects Pagination</Link></li>
        </ul>
        <div className="category"># CEREBRUM</div>
        <ul>
            <li><Link to="/docs/ce-projects" >Docker Setup</Link></li>
            <li><Link to="/docs/ce-projects" >Custom Style Compiller</Link></li>
            <li><Link to="/docs/ce-my-approval-page" >Helium Ce's sync</Link></li>
            <li><Link to="/docs/ce-worklogs" >Ratecards Pagination</Link></li>
        </ul>
    </div>
)

export default DocsNav;