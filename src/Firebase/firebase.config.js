// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCliel181Hbj5vLEP9Pb8xSWN0bQy9oVeY",
  authDomain: "green-nest-react.firebaseapp.com",
  projectId: "green-nest-react",
  storageBucket: "green-nest-react.firebasestorage.app",
  messagingSenderId: "74576649313",
  appId: "1:74576649313:web:431e04677fe2b3eadb5e20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;