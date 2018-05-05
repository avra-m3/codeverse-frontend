import React, { Component } from 'react';
import { render } from 'react-dom';

import axios from 'axios'

import { Flex, Box } from 'reflexbox';



import UserImage from '../images/angela.png';
import CodePanel from '../components/CodePanel.js';
import Firebase from '../Firebase.js';



class CodePage extends Component {

  constructor (props) {
    super()
    this.firebase = new Firebase('testcode')

    this.firebaseListener = new Firebase('testcode')

    this.props = props;

  }


  render() {

    return (
      <div className="App">
        <div className="container">
          <Flex p={3} align='center'>

            <Box w={1/2} p={3}>
              <CodePanel
                isCurrentUser={true}
                value={`//Type your code here...`}
                onChange={this.firebase.codeUpdate.bind(this.firebase)}
              />

            </Box>
            <Box w={1/2} p={3}>
              <CodePanel
              value={this.listenerCode}
              />
            </Box>

          </Flex>

        </div>






      </div>
    );
  }
}

export default CodePage;
