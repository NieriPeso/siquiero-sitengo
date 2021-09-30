
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <header id="header" role="banner">
                <nav className={`navbar navbar-expand-lg fixed-top navbar-dark bg-dark`} aria-label={`Main navigation`}>
                    <div className={`container-fluid`}>
                        <Link className={`navbar-brand`} to={`/inicio`}>Offcanvas navbar</Link>
                        <button className={`navbar-toggler p-0 border-0`} type={`button`} id="navbarSideCollapse" aria-label="Toggle navigation">
                            <span className={`navbar-toggler-icon`}></span>
                        </button>

                        <div className={`navbar-collapse offcanvas-collapse`} id="navbarsExampleDefault">
                            <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
                                <li className={`nav-item`}>
                                    <Link className={`nav-link active`} aria-current="page" to={`#`}>Dashboard</Link>
                                </li>
                                <li className={`nav-item`}>
                                    <Link className={`nav-link`} to={`#`}>Notifications</Link>
                                </li>
                                <li className={`nav-item`}>
                                    <Link className={`nav-link`} to={`#`}>Profile</Link>
                                </li>
                                <li className={`nav-item`}>
                                    <Link className={`nav-link`} to={`#`}>Switch account</Link>
                                </li>
                                <li className={`nav-item dropdown`}>
                                    <Link className={`nav-link dropdown-toggle`} to={`#`} id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Settings</Link>
                                    <ul className={`dropdown-menu`} aria-labelledby="dropdown01">
                                        <li>
                                            <Link className={`dropdown-item`} to={`#`}>Action</Link>
                                        </li>
                                        <li>
                                            <Link className={`dropdown-item`} to={`#`}>Another action</Link>
                                        </li>
                                        <li>
                                            <Link className={`dropdown-item`} to={`#`}>Something else here</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <form className={`d-flex`}>
                                <input className={`form-control me-2`} type={`search`} placeholder="Search" aria-label="Search" />
                                <button className={`btn btn-outline-success`} type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

                <div className={`nav-scroller bg-body shadow-sm`}>
                    <nav className={`nav nav-underline`} aria-label="Secondary navigation">
                        <Link className={`nav-link active`} aria-current="page" to={`#`}>Dashboard</Link>
                        <Link className={`nav-link`} to={`#`}>
                            Friends
                            <span className={`badge bg-light text-dark rounded-pill align-text-bottom`}>27</span>
                        </Link>
                        <Link className={`nav-link`} to={`#`}>Explore</Link>
                        <Link className={`nav-link`} to={`#`}>Suggestions</Link>
                        <Link className={`nav-link`} to={`#`}>Link</Link>
                        <Link className={`nav-link`} to={`#`}>Link</Link>
                        <Link className={`nav-link`} to={`#`}>Link</Link>
                        <Link className={`nav-link`} to={`#`}>Link</Link>
                        <Link className={`nav-link`} to={`#`}>Link</Link>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;