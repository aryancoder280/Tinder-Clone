import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAcYrb_7CCdajN1QF3xxaFJJ5B7cF4VkPY",
    authDomain: "tinder-clone-44eef.firebaseapp.com",
    databaseURL: "https://tinder-clone-44eef.firebaseio.com",
    projectId: "tinder-clone-44eef",
    storageBucket: "tinder-clone-44eef.appspot.com",
    messagingSenderId: "339943737677",
    appId: "1:339943737677:web:6529b5c852d78e30b8cf04",
    measurementId: "G-51T0GCF5WW"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;