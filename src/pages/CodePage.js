import React, { Component } from 'react';

import { Flex, Box } from 'reflexbox';



import CodePanel from '../components/CodePanel.js';
import Firebase from '../Firebase.js';
import API from '../API.js';

import { ToastContainer, toast } from 'react-toastify';
import '../css/toast.css';



class CodePage extends Component {

  notify = (message) => {
    toast(message)
    this.isCompleted = true
  };

  constructor (props) {
    super()
    this.props = props
    this.state = {};
    this.state = this.props.location.state;

    this.firebase = new Firebase('testcode')
    this.api= new API()
    this.isCompleted = false

    // this.props.problemDescription = .problemDescription


    this.props = props;

  }

  getProblemInfo() {

  }


  render() {

    this.getProblemInfo()

    return (
      <div className="App">
      <ToastContainer autoClose={4000} />
        <div className="container">


        <div className="code-description">
          {this.state.problemDescription}
        </div>

          <Flex p={3} align='center'>

            <Box w={1/2} p={3}>
              <h1 className="collaborator-intro">My Code</h1>

              <CodePanel
                notify={this.notify}
                completed={this.isCompleted}
                isCurrentUser={true}
                value={`//Type your code here...`}
                onChange={this.firebase.codeUpdate.bind(this.firebase)}
              />

            </Box>
            <Box w={1/2} p={3}>
            <h1 className="collaborator-intro">Gandalf&apos;s Code</h1>
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
