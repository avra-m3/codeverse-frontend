import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import UserImage from '../images/angela.png';

import { Link } from 'react-router-dom';

class ChallengeBox extends Component {
  constructor(props) {
    super()
    this.props = props
  }

  render() {
          return(
              <div className="challengeBox">
                  <Flex p={3} align='center'>
                      <Box w={1/12}><img alt="User" src={UserImage}></img></Box>
                      <Box w={10/12}>{localStorage.getItem('displayName').split(" ")[0]}, you can compete in {this.props.name}</Box>
                      <Box w={1/12}><Link to={{"pathname":"/code/"+this.props.problemID, "state":{"problemDescription":this.props.problemDescription} }} className="btn-join">Join</Link></Box>
                  </Flex>
              </div>
          )
  }

}


export default ChallengeBox;
