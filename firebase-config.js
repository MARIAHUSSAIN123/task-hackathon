// Import the Firebase SDK
import firebase from "./firebase/app"
import "./firebase/auth"
import "./firebase/firestore"

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEf8B5CoVTPxrSN_rYVfAeJCyTzI6cgmw",
  authDomain: "mywork-54039.firebaseapp.com",
  databaseURL: "https://mywork-54039-default-rtdb.firebaseio.com",
  projectId: "mywork-54039",
  storageBucket: "mywork-54039.firebasestorage.app",
  messagingSenderId: "1006624462364",
  appId: "1:1006624462364:web:f3c7e9daa3e4b87e32b1d9",
  measurementId: "G-ST1KC211S9"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const analytics = getAnalytics(app);

// Initialize Firebase services
const auth = firebase.auth()
const db = firebase.firestore()
