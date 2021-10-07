import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Header from './controllers/Header';
import Home from './controllers/Home';

import './styles/app.scss';

const App: React.FC = () => {
    return (
        <Router>
            <Header></Header>
            <Switch>
                {/* <Redirect from="/" to="/inicio" /> */}
                <Route path="/" component={Home} />
                <Route path="/inicio" component={Home} />
            </Switch>
        </Router>
    )
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);