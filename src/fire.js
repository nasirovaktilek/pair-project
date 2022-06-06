import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxCTM3yv2Fv2mvXMXuWIZU0QXxccNc9Gw",
  authDomain: "pair-project-2b029.firebaseapp.com",
  projectId: "pair-project-2b029",
  storageBucket: "pair-project-2b029.appspot.com",
  messagingSenderId: "828960857120",
  appId: "1:828960857120:web:3a2c3debc02cbf4d017045",
  measurementId: "G-1QEQHF0KL1",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
