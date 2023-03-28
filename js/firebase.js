// import other things we need from the below, including from https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC6l2N4zKu0yjrfdwLqtoW240xyQwj57Iw",
  authDomain: "middleend-9127d.firebaseapp.com",
  projectId: "middleend-9127d",
  storageBucket: "middleend-9127d.appspot.com",
  messagingSenderId: "80841988771",
  appId: "1:80841988771:web:de20a3fabc40a51568bd16",

  // database
  databaseURL: "https://middleend-9127d-default-rtdb.firebaseio.com"
};

// init
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);