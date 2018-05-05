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

    constructor(){
        this.db = firebase.database();
        this.editorId = "testcode";
        this.editorValues = this.db.ref("editor_values");
        console.log(this.editorValues)
        this.editorValues.child(this.editorId).once("value", function (snapshot) {
            console.log(snapshot.val());
        });
    }

    codeUpdate(e){

        this.editorValues.child(this.editorId).update({
            content: e
        });



    }



}


export default FireBase;
