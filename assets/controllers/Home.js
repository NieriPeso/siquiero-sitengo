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
                        <h1 className="display-4">Proyecto Siquiero Sitengo (PSS)</h1>
                        <p className="lead">
                            Buscamos ser una plataforma p2p que ofrece otro metodo de intercambio de valores, donde cualquier Ñeri pueda crear anuncios de sus necesidades, para que luego, otro usuario de la comunidad pueda ofertar su mejor propuesta.
                        </p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="#sobre-el-proyecto" role="button">Sobre el proyecto</a>
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