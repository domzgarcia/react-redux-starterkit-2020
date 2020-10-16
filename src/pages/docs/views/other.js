import React, {Component} from 'react';
import DocsNav from './common-header';

class Other extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <DocsNav />
                Other
            </div>
        )
    }
}

export default Other;