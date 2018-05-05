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

    setChallengeStatus(challengeId, status) {
        axios.post(this.config().baseURL+"/challenges/"+challengeId, {'status': status})
            .then(response => {
                console.log("CHALLENGE STATUS CHANGED");
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

    getChallengeByID(id, callback){
        axios.get(this.config().baseURL + "/challenges/" + id).then(
            (response) => {
                if(response.status !== 200){
                    return
                }
                callback(response.data)
            }
        )
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

      const splitFirstName = firstName.split(' ')[0]
      const splitLastName = firstName.split(' ')[1]

        axios.put(this.config().baseURL+"/users/"+userId, {'firstname': splitFirstName, 'lastname':splitLastName})
            .then(response => {
                const userId = response.data
                console.log(userId)
            })
            .catch(function (error) {
                console.log("User create failed, probably already exists?");
                console.log(error);
            });
    }


    createChallenge(problemID, created) {

      const generatedProblemID = Math.floor(Math.random() * 3) + 1;

        axios.put(this.config().baseURL+"/challenges/", {'problem_id': generatedProblemID})
            .then(response => {
                // const userId = response.data
                // console.log(userId)
                created()
            })
    }

    createCollab(challengeId, userId) {
        axios.put(this.config().baseURL+"/challenges/"+challengeId+"/collaborators/"+userId, {'stream': ''})
            .then(response => {
                console.log("CREATED COLLAB")
                console.log(response)
            })
            .catch(function (error) {
                console.log("collab failed, probably not 'waiting' status?");
                console.log(error);
            });

    }



}

export default API;
