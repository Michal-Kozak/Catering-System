import firebase from 'firebase/app'
import 'firebase/database'


import { initializeApp } from 'firebase';

const app = initializeApp( {
    apiKey: "AIzaSyAwfxuiGpSEusJpnTiiC-wmDSLSmHpmQb8",
    authDomain: "catering-system-369fd.firebaseapp.com",
    databaseURL: "https://catering-system-369fd.firebaseio.com",
    projectId: "catering-system-369fd",
    storageBucket: "catering-system-369fd.appspot.com",
    messagingSenderId: "377532702632",
    appId: "1:377532702632:web:595aa74e69e67eff62879d",
    measurementId: "G-0BLEY2HJ21"
  });
 
  export const db = app.database();
  export const statesRef = db.ref('states');
  
  export const listsRef = db.ref('lists');
 
   