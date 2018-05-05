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

    constructor(editorId){
        this.db = firebase.database();
        this.editorId = editorId;
        this.editorValues = this.db.ref("editor_values");
        console.log(this.editorValues)
        this.editorValues.child(this.editorId).once("value", function (snapshot) {
            console.log(snapshot.val());
        });

    }

    codeUpdate(e){

        // Don't try to send a firebase query while one is currently pending
        this.editorValues.child(this.editorId).update({
            content: e
        });

    }


    codeListen(updateFunction){
        var partnerContents = this.editorValues.child(this.editorId);

        partnerContents.on("value", (function(snapshot){

            console.log("READ TRIGGERED");
            console.log(updateFunction)


            if (typeof snapshot.val().content === 'string' || snapshot.val().content instanceof String) {
              updateFunction(snapshot.val().content)
            }


        }));
    }



}


export default FireBase;
