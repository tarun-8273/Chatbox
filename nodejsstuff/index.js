const admin = require('firebase-admin')


var serviceAccount = require("./authfg-cbdb2-firebase-adminsdk-ibl66-cdf43fabeb.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const message = {
    notification:{
        title:"add another newtask",
        body:"new task added successfully"
    },

    token:'fncE9Z09RVSg-Vkzr5TgR-:APA91bERx1bdVuX3jVWLfy4jZ7Ha81hvfopbRMYbrkeYu3P5DLNLZQohcRVeuj_tgrn77DFvzDreblQgB15tCq4lE31A0I4dSX-ZkWI5B1ljE2sAlRZ3xXjm1a-tb8O8CsPmo5OxpAfg'
}

admin.messaging().send(message).then(res=>{
    console.log('send success ');
}).catch(err=>{
  console.log(err)
})