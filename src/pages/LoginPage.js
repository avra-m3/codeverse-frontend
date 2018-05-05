import React, { Component } from 'react';
import { render } from 'react-dom';

import axios from 'axios'

import { Flex, Box } from 'reflexbox';
import '../LoginPage.css'
import '../css/fontawesome-all.min.css'

import UserImage from '../images/angela.png';
import CodePanel from '../components/CodePanel.js';
// import LoadingButton from '../components/LoadingButton'


import FBLoginBtn from '../images/login.png'

class LoginPage extends Component {

  constructor (props) {
    super()
    this.props = props;

  }


  render() {
    return (
      <div className="App">
          <div className="container">
            <Flex p={2} align='left'>
                <Box className="left-box" px={2} w={1/2}>
                    <p align="center">CodeVerse</p>
                    <iframe width="100%" height="80%" src="https://www.youtube.com/embed/evef8FCK6wk?autoplay=1&iv_load_policy=3" frameBorder="0"
                            allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </Box>
                <Box className="right-box" px={2} w={1/2}>
                    <Box className="right-top-box" px={2} w={1}>
                        {/*<p align="center"><i className="fab fa-facebook-square"></i>Sign in via Facebook</p>*/}
                        <p align="center"><img src={FBLoginBtn} width="400vw"/></p>
                        {/*<LoadingButton className={""}>rf31r31r31r31</LoadingButton>*/}
                    </Box>
                    <Box className="right-bottom-box" px={2} w={1}>
                        <form onSubmit={this.handleSubmit}>
                            <p align="center"><label>Login: <input type="text"/></label></p>
                            <p align="center"><label>Password: <input type="text"/></label></p>
                            <p align="center"><input class="btn-join" type="submit" value="submit"/></p>
                        </form>
                    </Box>
                </Box>

            </Flex>
          </div>
      </div>
    );
  }
}

export default LoginPage;
