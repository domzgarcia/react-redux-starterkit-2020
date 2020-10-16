import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import asyncRoute from 'Utilities/asyncRoute';

const HeaderComponent = asyncRoute(() => import('Layouts/header.component'));
const FooterComponent = asyncRoute(() => import('Layouts/footer.component'));
const Home    = asyncRoute(() => import('Pages/home'));
const About   = asyncRoute(() => import('Pages/about'));
const Contact = asyncRoute(() => import('Pages/contact'));
const DocsRoute    = asyncRoute(() => import('Pages/docs'));

class App extends Component {
    constructor(props){
        super(props);
    }

    randomizer(){
        const rand = Math.floor(Math.random() * 9999) + 101;
        return true ? 'disabled' : rand;
    }

    render() {
        return (
            <div className={`App-${this.randomizer()}`}>
                <HeaderComponent />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/contact-us' component={Contact}/>
                    
                    {/* Nested */}
                    <Route path='/docs' component={DocsRoute}/>
                </Switch>
                <FooterComponent />
            </div>
        )
    }
}

export default App;