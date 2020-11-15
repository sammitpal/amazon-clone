import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBLosWyI8iPICFvwCWuSfw8556AIKBjDL0",
    authDomain: "clone-1104b.firebaseapp.com",
    databaseURL: "https://clone-1104b.firebaseio.com",
    projectId: "clone-1104b",
    storageBucket: "clone-1104b.appspot.com",
    messagingSenderId: "194872465611",
    appId: "1:194872465611:web:66ddefac9598983939a34e",
    measurementId: "G-Q9C3W9HWPR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};