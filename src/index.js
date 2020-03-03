import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/main.scss";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDygKU-UrhY9PeUr-4Qe8bS7t-TEV1GgHg",
  authDomain: "chery-f46b8.firebaseapp.com",
  databaseURL: "https://chery-f46b8.firebaseio.com",
  projectId: "chery-f46b8",
  storageBucket: "chery-f46b8.appspot.com",
  messagingSenderId: "849428522580",
  appId: "1:849428522580:web:52d973042156e5c3bbafc1",
  measurementId: "G-WMHSGRYLJY"
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
