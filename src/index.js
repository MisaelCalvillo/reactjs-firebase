import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBKtD2XyL3y3YTlSTYiSZwLUPL3vyng0JM",
  authDomain: "react-firebase-misa.firebaseapp.com",
  databaseURL: "https://react-firebase-misa.firebaseio.com",
  projectId: "react-firebase-misa",
  storageBucket: "react-firebase-misa.appspot.com",
  messagingSenderId: "741932459518"
}
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
