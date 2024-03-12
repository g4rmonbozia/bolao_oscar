// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore}  from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ9PGHEM08I7namlZhgYU1hDa327J-geU",
  authDomain: "bolao-oscar-62536.firebaseapp.com",
  projectId: "bolao-oscar-62536",
  storageBucket: "bolao-oscar-62536.appspot.com",
  messagingSenderId: "974905260724",
  appId: "1:974905260724:web:a3e2fbcb34ea74cd6d75e1",
  measurementId: "G-3VM2V3151J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export default app;