import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBsv0P1odGtcaf-M_H3hU46Br7IFcrIB7g',
  authDomain: 'soumen-facebook-clone.firebaseapp.com',
  databaseURL: 'https://soumen-facebook-clone.firebaseio.com',
  projectId: 'soumen-facebook-clone',
  storageBucket: 'soumen-facebook-clone.appspot.com',
  messagingSenderId: '261554492791',
  appId: '1:261554492791:web:e39998487a98e827727d72',
  measurementId: 'G-SH3DDT1V1F',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
