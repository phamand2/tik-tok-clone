// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAbrMNlin3dAjJtoQDsqmQImsx8OHrBWIg",
  authDomain: "tiktok-clone-7502c.firebaseapp.com",
  databaseURL: "https://tiktok-clone-7502c.firebaseio.com",
  projectId: "tiktok-clone-7502c",
  storageBucket: "tiktok-clone-7502c.appspot.com",
  messagingSenderId: "737609396586",
  appId: "1:737609396586:web:2aa11082cdae435702b513",
  measurementId: "G-TF5NL08JQG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;