import firebase from "firebase/app";
import 'firebase/auth';
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyApoRyKdej8shfUZihLBmjDZAo6xz003dU",
    authDomain: "react-382de.firebaseapp.com",
    projectId: "react-382de",
    storageBucket: "react-382de.appspot.com",
    messagingSenderId: "334818781395",
    appId: "1:334818781395:web:d6013d9810a32900f84c26",
    measurementId: "G-JD23NH30RS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;