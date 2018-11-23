import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyC1-0WJkFSh-b1_ZCmdQh7e_wm7ETCq8GY",
    authDomain: "m-city-2e78a.firebaseapp.com",
    databaseURL: "https://m-city-2e78a.firebaseio.com",
    projectId: "m-city-2e78a",
    storageBucket: "m-city-2e78a.appspot.com",
    messagingSenderId: "946103281446"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();

  firebaseDB.ref('matches').once('value').then((snapShot) => {

    console.log(snapShot.val())

  })