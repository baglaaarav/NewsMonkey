
import './App.css';
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default class App extends Component {


  API = process.env.REACT_APP_NEWS_API;
  constructor() {
    super();

    document.body.style.backgroundColor = "#E0E0E0"
    this.state = {
      mode: 'light',
      
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
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }

  render() {
    return (
      <div>

       
        <Router >
        <Navbar mode={this.state.mode} toggle={this.toggle} />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="business" pageSize={12} mode={this.state.mode} API={this.API} country='in' category='business' />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={12} mode={this.state.mode} API={this.API} country='in' category='business' />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={12} mode={this.state.mode} API={this.API} country='in' category='entertainment' />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={12} mode={this.state.mode} API={this.API} country='in' category='general' />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={12} mode={this.state.mode} API={this.API} country='in' category='health' />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={12} mode={this.state.mode} API={this.API} country='in' category='science' />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={12} mode={this.state.mode} API={this.API} country='in' category='sports' />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={12} mode={this.state.mode} API={this.API} country='in' category='technology' />} />
          </Routes>
        </Router>
        

       </div>
    )
  }
}
