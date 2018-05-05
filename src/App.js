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
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

import ArmChair from './images/armchair.svg'

const App = () => (
  <Router>
    <div>
      <NavigationBar></NavigationBar>
      <BrowserView device={false}>
        <Route exact path="/" component={ChallengesPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/code" component={CodePage}/>
      </BrowserView>
      <MobileView device={true}>
        <div className="mobileWarning">
          <img src={ArmChair}/>
          <h1> Coding is more comfortable on your laptop. </h1>
        </div>
      </MobileView>


    </div>
  </Router>
)
export default App
