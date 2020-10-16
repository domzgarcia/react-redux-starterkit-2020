import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <div className="signature">
                    <div className="-app-width">
                        <span className="rocket-emoji">📚</span>
                        <strong>@DOMSGARCIA</strong>
                    </div>
                    
                </div>
                <header className="main-header sticky">
                    <div className="app-header -app-width">
                        <ul>
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/docs" >Documentation</Link></li>
                            {/* <li><Link to="/about" >About</Link></li> */}
                            {/* <li><Link to="/contact-us" >Contac Us</Link></li> */}
                        </ul>
                    </div>
                </header>
            </>
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
