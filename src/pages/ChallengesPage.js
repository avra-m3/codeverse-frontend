import React, { Component } from 'react';
import ChallengeBox from '../components/ChallengeBox.js';

import API from '../API.js';

class ChallengesPage extends Component {



  constructor (props) {
    super()
    this.props = props;
    this.api = new API
  }


  render() {

    this.api.getChallenges(function(challenges){
      this.setState( (state) => {
        state.challenges = challenges;
        return state;
      });
    })


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
