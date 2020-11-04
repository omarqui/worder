import app  from "firebase/app";
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3GLEuIL0FCyRUyipcckDdD7q7c0dJKO0",
  authDomain: "worder-backend.firebaseapp.com",
  databaseURL: "https://worder-backend.firebaseio.com",
  projectId: "worder-backend",
  storageBucket: "worder-backend.appspot.com",
  messagingSenderId: "343200636617",
  appId: "1:343200636617:web:d5c5dfb76334f10375b718",
  measurementId: "G-62M8XLBV05"
};

app.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;