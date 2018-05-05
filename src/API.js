import axios from 'axios'

class API {

    config() {
      return {
          "baseURL": "http://codeverse.herokuapp.com",
          "version": "V1"
        }
    }

    getChallenges(callback) {
      axios.get(this.config().baseURL+"/")
           .then(response => {
              const challenges = response.data
              console.log(challenges)
              callback(challenges)
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


}

export default API;
