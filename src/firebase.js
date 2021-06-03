// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBSLIflAXGHhswh6NU6HpPBB2lFAkkwe5Q",
    authDomain: "twitter-clone-a609b.firebaseapp.com",
    projectId: "twitter-clone-a609b",
    storageBucket: "twitter-clone-a609b.appspot.com",
    messagingSenderId: "96205234211",
    appId: "1:96205234211:web:6f8f19f1d7939bcd755196",
    measurementId: "G-MSB46N6B9T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;