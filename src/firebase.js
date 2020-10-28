import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyChHB9CgpUVD-Ts7a1DULutJhjoj5ERfa0',
    authDomain: 'discord-4aed3.firebaseapp.com',
    databaseURL: 'https://discord-4aed3.firebaseio.com',
    projectId: 'discord-4aed3',
    storageBucket: 'discord-4aed3.appspot.com',
    messagingSenderId: '307191280913',
    appId: '1:307191280913:web:465813512446f1325948b0',
    measurementId: 'G-Q78BS63EJ7'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
