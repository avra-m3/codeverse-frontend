import React, { Component } from 'react';
import ChallengeBox from '../components/ChallengeBox.js';

import API from '../API.js';
import ReactLoading from 'react-loading';



class ChallengesPage extends Component {



  constructor (props) {
    super()
    this.state = {};
    this.props = props;
    this.api = new API()

    this.updateUI()
  }

  updateUI() {
    this.api.getChallenges((challenges) => {
      console.log(challenges)
      this.setState( (state) => {
        state.challenges = challenges;
        return state;
      });
    })
    
    this.api.getProblems((problems) => {
      console.log(problems)
      this.setState( (state) => {
        state.problems = problems
        state.loaded = true
        return state
      })


    })


  }

  getChallengeBoxes() {
    const boxes = [];
    for (var challenge in this.state.challenges) {
      if(typeof this.state.problems != 'undefined') {
        const challengeProblem = this.state.problems.filter(problem => problem.Problem_ID == this.state.challenges[challenge].Problem_ID)[0];
        console.log(challengeProblem)


        const challengeName = challengeProblem.Shortname;
        const challengeID = this.state.challenges[challenge].Challenge_ID
        const challengeDescription = challengeProblem.Problem_Statement

        boxes.push(<ChallengeBox key={challenge} problemID={challengeID} problemDescription={challengeDescription} name={challengeName} ></ChallengeBox>)
      }
    }

    return boxes
  }

  getLoader() {
    if(!this.state.loaded) {
      return <div className="loader"><ReactLoading type="bubbles" color="#000000" height={"40%"} width={"40%"} /></div>
    }
  }


  render() {

    return (




      <div className="App">

        <div className="container">
          {this.getChallengeBoxes()}
          {this.getLoader()}
        </div>
      </div>
    );
  }
}

export default ChallengesPage;
