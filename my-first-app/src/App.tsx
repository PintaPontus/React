import React from 'react';
import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBqXCgKQKqx51iBGfQz0kEgeqqNvexZ1c",
  authDomain: "angulartest-55eea.firebaseapp.com",
  databaseURL: "https://angulartest-55eea-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "angulartest-55eea",
  storageBucket: "angulartest-55eea.appspot.com",
  messagingSenderId: "892741031223",
  appId: "1:892741031223:web:c8b1e9a6f0048c5a9176b2",
  measurementId: "G-2JE4MS764S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Pinta's first React deployed project
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
