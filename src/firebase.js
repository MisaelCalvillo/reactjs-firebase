// Import the Firebase modules that you need in your app.
import firebase from 'firebase/app';
import 'firebase/database';

// Initalize and export Firebase.
const config = {
  apiKey: "AIzaSyBKtD2XyL3y3YTlSTYiSZwLUPL3vyng0JM",
  authDomain: "react-firebase-misa.firebaseapp.com",
  databaseURL: "https://react-firebase-misa.firebaseio.com",
  projectId: "react-firebase-misa",
  storageBucket: "react-firebase-misa.appspot.com",
  messagingSenderId: "741932459518"
};
export default firebase.initializeApp(config);