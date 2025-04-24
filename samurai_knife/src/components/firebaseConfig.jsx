// firebaseConfig.js
import React from "react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAH5ILYVqGb47wQdfsqoZIKQoO11ApBKCk",
  authDomain: "samurai-7810a.firebaseapp.com",
  projectId: "samurai-7810a",
  storageBucket: "samurai-7810a.firebasestorage.app",
  messagingSenderId: "423442405651",
  appId: "1:423442405651:web:7f286724f1e29d3b3222e6",
  measurementId: "G-MMK1ES0JSM",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
