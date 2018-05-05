import React, { Component } from 'react';
import axios from 'axios'
import ChallengeBox from '../components/ChallengeBox.js';



class ChallengesPage extends Component {

  constructor (props) {
    super()
    this.props = props;

  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <ChallengeBox></ChallengeBox>
          <ChallengeBox></ChallengeBox>
        </div>
      </div>
    );
  }
}

export default ChallengesPage;
