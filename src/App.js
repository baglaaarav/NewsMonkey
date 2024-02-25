
import './App.css';
import LoadingBar from 'react-top-loading-bar'

import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState('light')
  
  const API = process.env.REACT_APP_NEWS_API;
  // document.body.style.backgroundColor = ""
  
  const toggle = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = "#495057";
      setMode('dark')
     
    }
    else {
      document.body.style.backgroundColor = "#E0E0E0"
      setMode('light')
      
    }
  }
 
  useEffect(() => {
    document.body.style.backgroundColor = "#E0E0E0";
  }, []);

    return (
      <div >
       
        <Router >
        <Navbar mode={mode} toggle={toggle} />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key="business" pageSize={12} mode={mode} API={API} country='in' category='business' />} />
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={12} mode={mode} API={API} country='in' category='business' />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={12} mode={mode} API={API} country='in' category='entertainment' />} />
            <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={12} mode={mode} API={API} country='in' category='general' />} />
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={12} mode={mode} API={API} country='in' category='health' />} />
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={12} mode={mode} API={API} country='in' category='science' />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={12} mode={mode} API={API} country='in' category='sports' />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={12} mode={mode} API={API} country='in' category='technology' />} />
          </Routes>
        </Router>
        

       </div>
    )
  }


export default App