import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import UserImage from '../images/angela.png';
import GandalfImage from '../images/gandalf.jpg'

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
                      <Box w={1/12}><img src={UserImage}></img></Box>
                      <Box w={10/12}>Angela is completing {this.props.name}</Box>
                      <Box w={1/12}><Link to={{"pathname":"/code/"+this.props.problemID, "state":{"problemDescription":this.props.problemDescription} }} className="btn-join">Join</Link></Box>
                  </Flex>
              </div>
          )



      return null;

  }

}


export default ChallengeBox;
