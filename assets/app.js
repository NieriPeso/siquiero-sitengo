import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Header from './controllers/Header';
import Home from './controllers/Home';

import './styles/app.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <Header></Header>
                <Switch>
                    {/* <Redirect from="/" to="/inicio" /> */}
                    <Route path="/" component={Home} />
                    <Route path="/inicio" component={Home} />
                </Switch>
            </Router>
        );
    }
}
ReactDOM.render(<App />, root);