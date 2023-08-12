// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMGkdTY1CvkY2J21ypuGLJXChmDkADcFk",
  authDomain: "points-app-c2759.firebaseapp.com",
  databaseURL: "https://points-app-c2759-default-rtdb.firebaseio.com",
  projectId: "points-app-c2759",
  storageBucket: "points-app-c2759.appspot.com",
  messagingSenderId: "222413035984",
  appId: "1:222413035984:web:fe52f563a93ac3ca2d41d5",
  measurementId: "G-GMGXVL89SC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);