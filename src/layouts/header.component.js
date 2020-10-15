import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="app-header">
                <h1>Header</h1>
                {this.props.counter}
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contact-us" >Contac Us</Link></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    counter: state.common.counter,
});

export default connect(
    mapStateToProps, 
    null
)(Header);
