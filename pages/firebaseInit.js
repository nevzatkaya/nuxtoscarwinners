import firebase from "firebase";

import "firebase/firestore";

import firebaseConfig from "./firebaseConfig";

var firebaseApp;
if (firebase.apps.length == 0)
  firebaseApp = firebase.initializeApp(firebaseConfig);
else {
  firebaseApp = firebase.apps[0];
}

export default firebaseApp.firestore();
