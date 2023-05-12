// imports
// https://firebase.google.com/docs/web/learn-more#available-libraries
// or, just import from https://www.gstatic.com/firebasejs/9.18.0/firebase-THINGTHATWENEED.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

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

$("#signup-form").submit(function (e) {
  e.preventDefault();

  const name = $("#name-input").val();
  // const phone = $("#phone-input").val();
  const email = $("#email-input").val();
  const type = $('input[name="signupRadio"]:checked').attr("radioName");
    
  push(ref(db), {
    email: email,
    name: name,
    // phone: phone,
    type: type
  });

  
  $("#signup-button").fadeOut(400, () => {
    $(".success-msg").fadeIn();
  });
  

  
});