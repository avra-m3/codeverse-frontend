import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import UserImage from '../images/angela.png';

import { Link } from 'react-router-dom';

class ChallengeBox extends Component {

  render() {
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

}


export default ChallengeBox;
