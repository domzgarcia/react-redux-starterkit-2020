import React, {Component} from 'react';
import {connect} from 'react-redux';
import {commonHandleAddCounter} from '../../common/actions/action';

class About extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <h1>About</h1>
                <button
                onClick={this.props.commonHandleAddCounter}
                >Redux: Add Counter</button>
            </>
        )
    }
}

const mapDispatchToProps = {
    commonHandleAddCounter,
}

export default connect(
    null, 
    mapDispatchToProps
)(About);