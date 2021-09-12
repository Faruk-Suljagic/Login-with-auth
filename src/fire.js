import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCMJuFbbIYylhfjlLxCu3MkqeGYnMIqOrs",
  authDomain: "login-auth3.firebaseapp.com",
  projectId: "login-auth3",
  storageBucket: "login-auth3.appspot.com",
  messagingSenderId: "968233570558",
  appId: "1:968233570558:web:344fed46caa863502415af",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
