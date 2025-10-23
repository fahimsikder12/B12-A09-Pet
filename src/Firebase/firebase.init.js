// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuZVl45kIRxFaPzcMNwYJYo8yRGLpwzE0",
  authDomain: "b12-a09-pet.firebaseapp.com",
  projectId: "b12-a09-pet",
  storageBucket: "b12-a09-pet.firebasestorage.app",
  messagingSenderId: "920898955469",
  appId: "1:920898955469:web:be77b3c760c3fe36c3a184"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);