// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBSLIflAXqGHhswh6NU6HpPBB2lFAwkkwe5Q",
    authDomain: "twitter-clone-a623b.firebaseapp.com",
    projectId: "twitter-clone-a623b",
    storageBucket: "twitter-clone-a623b.appspot.com",
    messagingSenderId: "96205234231",
    appId: "1:96205234211:web:6f8f19f1d7939bfd755196",
    measurementId: "G-MSB4GN6B9T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
