import firebase from 'firebase';

const firebaseConfig = {
  apiKey: '<ENTER YOUR API_KEY>',
  authDomain: 'soumen-facebook-clone.firebaseapp.com',
  databaseURL: 'https://soumen-facebook-clone.firebaseio.com',
  projectId: 'soumen-facebook-clone',
  storageBucket: 'soumen-facebook-clone.appspot.com',
  messagingSenderId: '261554492791',
  appId: '<ENTER YOUR API_ID>',
  measurementId: 'G-SH3DDT1V1F',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
