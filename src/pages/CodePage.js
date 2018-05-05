import React, { Component } from 'react';
import { render } from 'react-dom';

import axios from 'axios'

import { Flex, Box } from 'reflexbox';



import UserImage from '../images/angela.png';
import CodePanel from '../components/CodePanel.js';



class CodePage extends Component {

  constructor (props) {
    super()
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
