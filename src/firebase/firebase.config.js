// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYPbAVEIxAve-5Zv-ZkI-J9Uj5Yh6Q6kg",
  authDomain: "zayan-store-cde46.firebaseapp.com",
  projectId: "zayan-store-cde46",
  storageBucket: "zayan-store-cde46.firebasestorage.app",
  messagingSenderId: "619620701123",
  appId: "1:619620701123:web:b4973e12660cd608722376",
  measurementId: "G-N8JQ6NYBND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;