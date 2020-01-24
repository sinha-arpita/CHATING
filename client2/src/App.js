import React from 'react';
import {BrowserRouter as Router,Route } from "react-router-dom"
import Join from "./components/Join"
import Chat from "./components/Chat"

import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
       <Route exact path = "/" component={Join}/>
      <Route  path = "/chat" component={Chat}/>
     </Router>
      
    </div>
  );
}

export default App;
