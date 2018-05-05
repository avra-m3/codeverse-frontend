import axios from 'axios'

class API {

    config() {
      return {
          "baseURL": "http://codeverse.herokuapp.com"
        }
    }

    getChallenges(callback) {
      axios.get(this.config().baseURL+"/challenges")
           .then(response => {
              const challenges = response.data
              console.log(challenges)
              callback(challenges)
      })
    }

    getProblems(callback) {
      axios.get(this.config().baseURL+"/problems")
           .then(response => {
              const problems = response.data
              console.log(problems)
              callback(problems)
      })
    }

    getProblemWithID(id, callback) {
      axios.get(this.config().baseURL+"/problems/"+id)
           .then(response => {
              const problem = response.data
              console.log(problem)
              callback(problem)
      })
    }




}

export default API;
