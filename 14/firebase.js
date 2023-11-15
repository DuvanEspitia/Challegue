// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWEz8GVF_LrAgRUsxtd276Fu4aqwwfztQ",
  authDomain: "app-login-experiencias.firebaseapp.com",
  projectId: "app-login-experiencias",
  storageBucket: "app-login-experiencias.appspot.com",
  messagingSenderId: "784536106976",
  appId: "1:784536106976:web:e0a9a0c210875c143a9d85",
  measurementId: "G-EE8JQ6VE98"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };