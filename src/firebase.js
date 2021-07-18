

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB0ciVaEolYAH52QCjzuLfb9lfjwbapnLU",
    authDomain: "todo-app-cp-b2dba.firebaseapp.com",
    projectId: "todo-app-cp-b2dba",
    storageBucket: "todo-app-cp-b2dba.appspot.com",
    messagingSenderId: "566260132754",
    appId: "1:566260132754:web:30808ff154f78b57196f4b",
    measurementId: "G-TG12H8MT99"
});

const db=firebaseApp.firestore();

export default db;