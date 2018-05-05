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
    this.firebase = new Firebase
    this.props = props;

  }


  render() {

    console.log("The below should log the firebase class, including callback onchange func");
    console.log(this.firebase)
    return (
      <div className="App">
        <div className="container">
          <Flex p={3} align='center'>

            <Box w={1/2} p={3}>
              <CodePanel
                isCurrentUser={true}
                onChange={Firebase.codeUpdate}
              />

            </Box>
            <Box w={1/2} p={3}>
              <CodePanel
              />
            </Box>

          </Flex>

        </div>






      </div>
    );
  }
}

export default CodePage;
