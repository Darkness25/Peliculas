
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC09WuaFc3xQ7_xM4MFuwRBorf1MvLHAz4",
  authDomain: "peliculas-8d60b.firebaseapp.com",
  projectId: "peliculas-8d60b",
  storageBucket: "peliculas-8d60b.appspot.com",
  messagingSenderId: "961816138358",
  appId: "1:961816138358:web:8b2e1dec48cddb923cc557"
};

firebase.initializeApp(config);
export const auth = firebase.auth;
