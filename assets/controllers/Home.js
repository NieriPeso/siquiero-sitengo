import '../styles/home.scss';

import React, { Component } from 'react';
import { Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';
import {
    Tabs,
    Tab
} from 'react-bootstrap';

import FeaturedPurchases from "../components/FeaturedPurchases";
import FeaturedSales from '../components/FeaturedSales';

class Home extends Component {

    render() {
        return (
            <main className={`container`}>
                <section>

                    <div className="jumbotron">
                        <h1 className="display-4">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-4" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </p>
                    </div>

                    <Tabs defaultActiveKey="siquiero" id="tabs-ss" className="m-0 mb-3 featured-tabs">
                        <Tab eventKey="siquiero" title="Siquiero">
                            <FeaturedPurchases />
                        </Tab>
                        <Tab eventKey="sitengo" title="Sitengo">
                            <FeaturedSales />
                        </Tab>
                    </Tabs>
                </section>
            </main>
        )
    }
}

export default Home;