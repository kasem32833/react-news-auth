// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx9o0b6q_ijGx-_9SuX7S2lWpqotDqKXk",
  authDomain: "react-news-auth-8f51d.firebaseapp.com",
  projectId: "react-news-auth-8f51d",
  storageBucket: "react-news-auth-8f51d.appspot.com",
  messagingSenderId: "998924363430",
  appId: "1:998924363430:web:6602f0833469a29c5db667"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;