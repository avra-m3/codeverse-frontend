import React, { Component } from 'react';
import { render } from 'react-dom';

import axios from 'axios'

import { Flex, Box } from 'reflexbox';



import UserImage from '../images/angela.png';
import CodePanel from '../components/CodePanel.js';
import Firebase from '../Firebase.js';

import { ToastContainer, toast } from 'react-toastify';
import '../css/toast.css';



class CodePage extends Component {

  notify = (message) => toast(message);

  constructor (props) {
    super()
    this.firebase = new Firebase('testcode')


    this.props = props;

  }


  render() {

    return (
      <div className="App">
      <ToastContainer />
        <div className="container">
          <Flex p={3} align='center'>

            <Box w={1/2} p={3}>
              <h1 className="collaborator-intro">My Code</h1>
              <CodePanel
                notify={this.notify}
                isCurrentUser={true}
                value={`//Type your code here...`}
                onChange={this.firebase.codeUpdate.bind(this.firebase)}
              />

            </Box>
            <Box w={1/2} p={3}>
            <h1 className="collaborator-intro">Angela&apos;s Code</h1>
              <CodePanel
                notify={this.notify}
              />
            </Box>

          </Flex>

        </div>






      </div>
    );
  }
}

export default CodePage;
