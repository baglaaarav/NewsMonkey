
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default class App extends Component {


  API = "91555a57e11440e9ad7e03a4d7faff5d"
  constructor() {
    super();

    document.body.style.backgroundColor = "#E0E0E0"
    this.state = {
      mode: 'light'
    }
  }

  toggle = () => {
    if (this.state.mode === 'light') {
      document.body.style.backgroundColor = "#495057";

      this.setState({
        mode: "dark",

      })
    }
    else {
      document.body.style.backgroundColor = "#E0E0E0"
      this.setState({
        mode: "light"
      })
    }
  }


  render() {
    return (
      <div>

       
        <Router >
        <Navbar mode={this.state.mode} toggle={this.toggle} />
          <Routes>
            <Route exact path="/" element={<News key="science" pageSize={12} mode={this.state.mode} API={this.API} country='in' category='science' />} />
            <Route exact path="/business" element={<News key="business" pageSize={12} mode={this.state.mode} API={this.API} country='in' category='business' />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={12} mode={this.state.mode} API={this.API} country='in' category='entertainment' />} />
            <Route exact path="/general" element={<News key="general" pageSize={12} mode={this.state.mode} API={this.API} country='in' category='general' />} />
            <Route exact path="/health" element={<News key="health" pageSize={12} mode={this.state.mode} API={this.API} country='in' category='health' />} />
            <Route exact path="/science" element={<News key="science" pageSize={12} mode={this.state.mode} API={this.API} country='in' category='science' />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={12} mode={this.state.mode} API={this.API} country='in' category='sports' />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={12} mode={this.state.mode} API={this.API} country='in' category='technology' />} />
          </Routes>
        </Router>
        

       </div>
    )
  }
}
