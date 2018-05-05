import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import NavigationBar from './components/NavigationBar.js'

import LoginPage from './pages/LoginPage.js'
import ChallengesPage from './pages/ChallengesPage.js'
import CodePage from './pages/CodePage.js'

const App = () => (
  <Router>
    <div>
      <NavigationBar></NavigationBar>
      <Route exact path="/" component={ChallengesPage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/code" component={CodePage}/>
    </div>
  </Router>
)
export default App
