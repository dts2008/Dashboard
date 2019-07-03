import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD49CSpRqKR0O7IffieUcPY3lzKkR2850Y",
    authDomain: "dashboard-3c538.firebaseapp.com",
    databaseURL: "https://dashboard-3c538.firebaseio.com",
    projectId: "dashboard-3c538",
    storageBucket: "dashboard-3c538.appspot.com",
    messagingSenderId: "742087051294",
    appId: "1:742087051294:web:2960fa3e823ec342"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  //db.settings( { timestampsInSnapshort: true } );

  export default db;