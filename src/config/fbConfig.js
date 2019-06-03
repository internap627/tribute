import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBulKkMk5z2afRmMb3o0lNVtXiwO0C9lEQ",
    authDomain: "tribute-backend.firebaseapp.com",
    databaseURL: "https://tribute-backend.firebaseio.com",
    projectId: "tribute-backend",
    storageBucket: "tribute-backend.appspot.com",
    messagingSenderId: "546733707798",
    appId: "1:546733707798:web:dd5a037cdc6e14a2"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()

  export default db

  