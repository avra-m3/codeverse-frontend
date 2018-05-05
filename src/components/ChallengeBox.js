import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import UserImage from '../images/angela.png';
import GandalfImage from '../images/gandalf.jpg'

import { Link } from 'react-router-dom';

class ChallengeBox extends Component {

  render() {
      // const min = 2;
      // const max = 3;
      const rand = Math.floor(Math.random() * 2) + 1;
      console.log(rand);
      if (rand === 1){
          return(
              <div className="challengeBox">
                  <Flex p={3} align='center'>
                      <Box w={1/12}><img src={UserImage}></img></Box>
                      <Box w={10/12}>Angela is completing “Valid Non-Degenerate Triangles”</Box>
                      <Box w={1/12}><Link to="/code" className="btn-join">Join</Link></Box>
                  </Flex>
              </div>
          )
      }

      if(rand === 2){
          return(
              <div className="challengeBox">
                  <Flex p={3} align='center'>
                      <Box w={1/12}><img src={GandalfImage}></img></Box>
                      <Box w={10/12}>Gandalf is completing “Maximum equlibrium sum in an array”</Box>
                      <Box w={1/12}><Link to="/code" className="btn-join">Join</Link></Box>
                  </Flex>
              </div>
          )
      }

      return null;

  }

}


export default ChallengeBox;
