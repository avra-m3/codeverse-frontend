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


    getUsers(callback) {
        axios.get(this.config().baseURL+"/users/1")
            .then(response => {
                const users = response.data
                console.log(users)
                callback(users)
            })
    }


    createUser(userId, firstName, lastName) {
        axios.put(this.config().baseURL+"/users/"+userId, {'firstname': firstName, 'lastname':lastName})
            .then(response => {
                const userId = response.data
                console.log(userId)
            })
    }


    createChallenge(problemID, created) {
        axios.put(this.config().baseURL+"/challenges/", {'problem_id': 1})
            .then(response => {
                // const userId = response.data
                // console.log(userId)
                created()
            })
    }


}

export default API;
