import React from 'react';
import API from './API.js';

var firebase = require("firebase");


class FireBaseAuthenticator extends React.Component {
  constructor(props) {
    super()
    this.props = props
    this.provider = new firebase.auth.FacebookAuthProvider();
  }

  authenticate(didAuthenticate) {
    firebase.auth().signInWithPopup(this.provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      var api = new API

      console.log("AUTHENTICATED")
      console.log(token)
      console.log(user)

      api.getUsers( (users) => {
      })

      //api.createUser(user.uid, user.displayName, '')
      api.createCollab(3, user.uid)
      localStorage.setItem('userId', user.userId)
      localStorage.setItem('photoURL', user.photoURL)
      localStorage.setItem('displayName', user.displayName)

      didAuthenticate(true)

    }).catch(function(error) {
      console.log("AUTH ERROR")
      console.log(error)
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...

      didAuthenticate(false)

    });
  }

}

export default FireBaseAuthenticator;
