var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyDdAp1wgg_otPSaersd-wwxdCb9jW6Zmnk",
  authDomain: "codeverse-f5931.firebaseapp.com",
  databaseURL: "https://codeverse-f5931.firebaseio.com",
  projectId: "codeverse-f5931",
  storageBucket: "codeverse-f5931.appspot.com",
  messagingSenderId: "555096888458"
};
firebase.initializeApp(config);

class FireBase {

    codeUpdate(){
        console.log("Sending code to Firebase");

    }



}


export default FireBase;
