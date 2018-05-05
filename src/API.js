import axios from 'axios'

class API {

    config() {
      return {
          "baseURL": "http://codeverse.herokuapp.com"
        }
    }

    getChallenges(callback) {
      axios.get(this.config().baseURL+"/test.php")
           .then(response => {
              const challenges = response.data
              console.log(challenges)
              callback(challenges)
      })
    }




}

export default API;
