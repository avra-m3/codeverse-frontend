import React, { Component } from 'react';
import { render } from 'react-dom';

import axios from 'axios'

import { Flex, Box } from 'reflexbox';
import '../LoginPage.css'
import '../css/fontawesome-all.min.css'

import UserImage from '../images/angela.png';
// import LoadingButton from '../components/LoadingButton'


import FBLoginBtn from '../images/login.png'
import FireBaseAuthenticator from '../FirebaseAuth.js'

import login01 from '../images/login01.svg'
import login02 from '../images/login02.svg'
import login03 from '../images/login03.svg'

class LoginPage extends Component {

  constructor (props) {
    super()
    this.props = props;
    this.state = {};
    this.authenticator = new FireBaseAuthenticator

    this.handleLogin = this.handleLogin.bind(this);
    this.goToChallenges = this.goToChallenges.bind(this);
  }

  goToChallenges() {
    this.props.history.push('/')
  }

  handleLogin() {
    this.authenticator.authenticate((isAuthenticated) => {
      if(isAuthenticated) {
        this.goToChallenges()
      }
    })


  }


  render() {
    return (
      <div className="App">
          <div className="container">
            <Flex p={2} align='left'>
                <Box className="left-box" px={2} w={1/2}>
                    <h1>CodeVerse</h1>
                    <Flex className="featureRow" >
                        <Box w={1/3}>
                          <img src={login01}/>
                        </Box>
                        <Box w={2/3}>
                          <h2>Collaborative Coding</h2>
                        </Box>
                    </Flex>
                    <Flex className="featureRow">
                        <Box w={1/3}>
                          <img src={login02}/>
                        </Box>
                        <Box w={2/3}>
                          <h2>Real-time building</h2>
                        </Box>
                    </Flex>
                    <Flex className="featureRow">
                        <Box w={1/3}>
                          <img src={login03}/>
                        </Box>
                        <Box w={2/3}>
                          <h2>Friendship & Skill matching</h2>
                        </Box>
                    </Flex>
                </Box>


                <Box className="right-box" px={1} w={1/2}>

                        <img src={FBLoginBtn} onClick={() => {this.handleLogin()}} width="400vw"/>

                </Box>

            </Flex>
          </div>
      </div>
    );
  }
}

export default LoginPage;
