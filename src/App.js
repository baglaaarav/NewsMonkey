
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default class App extends Component {


  API = "747cb5af671f4436b1e4e3a2546acb85"
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

        <Navbar mode={this.state.mode} toggle={this.toggle} />
        <Router >
          <Routes>
            <Route path="/" element={<News pageSize={12} mode={this.state.mode} API={this.API} country='in' category='science' />} />
            <Route path="/business" element={<News pageSize={12} mode={this.state.mode} API={this.API} country='in' category='business' />} />
            <Route path="/entertainment" element={<News pageSize={12} mode={this.state.mode} API={this.API} country='in' category='entertainment' />} />
            <Route path="/general" element={<News pageSize={12} mode={this.state.mode} API={this.API} country='in' category='general' />} />
            <Route path="/health" element={<News pageSize={12} mode={this.state.mode} API={this.API} country='in' category='health' />} />
            <Route path="/science" element={<News pageSize={12} mode={this.state.mode} API={this.API} country='in' category='science' />} />
            <Route path="/sports" element={<News pageSize={12} mode={this.state.mode} API={this.API} country='in' category='sports' />} />
            <Route path="/technology" element={<News pageSize={12} mode={this.state.mode} API={this.API} country='in' category='technology' />} />
          </Routes>
        </Router>
        

       </div>
    )
  }
}
