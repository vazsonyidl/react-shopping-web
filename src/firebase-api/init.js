import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "shoppinglistreactnative.firebaseapp.com",
  databaseURL: "https://shoppinglistreactnative-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shoppinglistreactnative",
  storageBucket: "shoppinglistreactnative.appspot.com",
  messagingSenderId: "951675949886",
  appId: "1:951675949886:web:094564b8614787da42526f",
  measurementId: "G-J45SCZTZVX"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const database = getFirestore(firebaseApp);
