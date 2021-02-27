import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';
import About from './About';


const Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/home" exact component={Home} >

                </Route>
                <Route path="/menu" exact component={Menu} >

                </Route>
                <Route path="/contact" exact component={Contact} >

                </Route>
                <Route path="/about" exact component={About} >

                </Route>
                <Redirect from="/" to="/home"></Redirect>
            </Switch>
        </div>
    );
};

export default Body;