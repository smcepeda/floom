import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';
import "firebase/performance";
import "firebase/analytics";


let config = {
    apiKey: "AIzaSyAvS4h7hFtFMeNnlf_0EVPC1yArDQkkzpg",
  authDomain: "floom-zh.firebaseapp.com",
  projectId: "floom-zh",
  storageBucket: "floom-zh.appspot.com",
  messagingSenderId: "524776650985",
  appId: "1:524776650985:web:96956475496c62d0e55878",
  measurementId: "G-LL8X9Y17YZ"
}


const app = firebase.initializeApp(config);

app.firestore().settings({
    ignoreUndefinedProperties: true
})

export default firebase;
export const firestore = app.firestore();
export const functions = app.functions("europe-west1");
export const auth = app.auth();
export const performance = app.performance();
export const analytics = app.analytics();