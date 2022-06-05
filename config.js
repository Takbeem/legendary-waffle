import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {

  apiKey: "AIzaSyAu9LRvXHmdPpZaL41aiOPC8R2L-gr0g2E",

  authDomain: "e-ride-9f9ed.firebaseapp.com",

  projectId: "e-ride-9f9ed",

  storageBucket: "e-ride-9f9ed.appspot.com",

  messagingSenderId: "553504869884",

  appId: "1:553504869884:web:563bd66589c9d5dcc63679"

};



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
