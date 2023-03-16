// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWjcsQDXlKKxuvmiVv1fEfUBCLWyv1pkY",
    authDomain: "georgeenglish-ebb1c.firebaseapp.com",
    projectId: "georgeenglish-ebb1c",
    storageBucket: "georgeenglish-ebb1c.appspot.com",
    messagingSenderId: "14654688415",
    appId: "1:14654688415:web:810f628d474adf486ca6aa",
    measurementId: "G-TLBZX1F053"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
