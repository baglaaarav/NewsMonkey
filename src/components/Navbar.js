import React, { Component } from "react";
// import PropTypes from "prop-types";

export class Navbar extends Component {
    // static propTypes = {};

    render() {

        return (
            <div>
                <nav className={`navbar navbar-expand-lg  navbar-${this.props.mode} bg-${this.props.mode}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">  NewzMonkey </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="/business">Business</a></li>
                                <li className="nav-item"><a className="nav-link" href="/entertainment">Entertainment</a></li>
                                <li className="nav-item"><a className="nav-link" href="/general">General</a></li>
                                <li className="nav-item"><a className="nav-link" href="/health">Health</a></li>
                                <li className="nav-item"><a className="nav-link" href="/science">Science</a></li>
                                <li className="nav-item"><a className="nav-link" href="/sports">Sports</a></li>
                                <li className="nav-item"><a className="nav-link" href="/technology">Technology</a></li>


                            </ul>
                            <div className={`form-check form-switch text-${this.props.mode === 'light' ? 'dark' : 'light'} `}>
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.toggle} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                            </div>
                        </div>
                    </div>

                </nav>



            </div>
        );
    }
}

export default Navbar;