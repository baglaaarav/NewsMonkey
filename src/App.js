
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  API = "3d733507306c4df1a4345ed4f3656249"
  constructor(){
    super();
    
    document.body.style.backgroundColor = "#E0E0E0"
    this.state={
      mode:'light'
    }
  }
  
  toggle = ()=>{
    if(this.state.mode === 'light'){
      document.body.style.backgroundColor = "#495057";
      
      this.setState({
        mode:"dark",
        
      })
    }
    else{
      document.body.style.backgroundColor = "#E0E0E0"
      this.setState({
        mode:"light"
      })
    }
  }
  

  render() {
    return (
      <div>
        <Navbar mode={this.state.mode} toggle={this.toggle}/>
        <div className="container">
          <News pageSize={10} mode={this.state.mode} API= {this.API}/>
        </div>
      </div>
    )
  }
}


// document.body.style.backgroundColor = "#042743" use this inside a class-based component in react inside setState