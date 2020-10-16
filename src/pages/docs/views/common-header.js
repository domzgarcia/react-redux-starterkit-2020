import React from 'react';
import {Link} from 'react-router-dom';

const DocsNav = () => (
    <div className="app-header">
        <ul>
            <li><Link to="/docs" >./</Link></li>
            <li><Link to="/docs/other" >Other</Link></li>
        </ul>
    </div>
)

export default DocsNav;