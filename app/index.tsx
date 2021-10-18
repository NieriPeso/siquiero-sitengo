import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Header, Home, Profile } from './controllers';

import './styles/app.scss';

import fontawesome from '@fortawesome/fontawesome-free'
import fas from '@fortawesome/fontawesome-free-solid'
import far from '@fortawesome/fontawesome-free-regular'
import fab from '@fortawesome/fontawesome-free-brands'

// Add all icons to the library so you can use it in your page
fontawesome.library.add(fas, far, fab)

const App: React.FC = () => {
    return (
        <Router>
            <Header></Header>
            <Switch>
                <Route exact path={["/", "/inicio", "/home"]} >
                    <Home></Home>
                </Route>
                <Route path={["/perfil", "/profile"]}>
                    <Profile />
                </Route>
            </Switch>
        </Router>
    )
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);