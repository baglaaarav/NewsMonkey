import React, { Component } from "react";
// import PropTypes from "prop-types";

export class Navbar extends Component {
    // static propTypes = {};

    render() {
        
        return (
            <div>
                <nav className={`navbar navbar-expand-lg  navbar-${this.props.mode} bg-${this.props.mode}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            NewzMonkey
                        </a>
                        
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">
                                        About
                                    </a>
                                </li>

                            </ul>

                        </div>
                    </div>
                    <div className={`form-check form-switch text-${this.props.mode === 'light'?'dark':'light'} ` }>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.toggle} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </nav>



            </div>
        );
    }
}

export default Navbar;