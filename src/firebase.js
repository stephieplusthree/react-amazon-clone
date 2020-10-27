import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDslS_DTwfvW_TDCp7eVcbRLDwFyvGVyT8",
    authDomain: "clone-68544.firebaseapp.com",
    databaseURL: "https://clone-68544.firebaseio.com",
    projectId: "clone-68544",
    storageBucket: "clone-68544.appspot.com",
    messagingSenderId: "350943376353",
    appId: "1:350943376353:web:5d09e26ad7caa4472ed8a0",
    measurementId: "G-LLQSLPDK68"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };