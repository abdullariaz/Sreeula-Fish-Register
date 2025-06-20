import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCezH6I6RaA1UyGmZwnYLCa3imkMHtdGOc",
  authDomain: "fish-business-app-ba99d.firebaseapp.com",
  databaseURL: "https://fish-business-app-ba99d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fish-business-app-ba99d",
  storageBucket: "fish-business-app-ba99d.firebasestorage.app",
  messagingSenderId: "813778727942",
  appId: "1:813778727942:web:110278e157ed6d4643ff87",
  measurementId: "G-C5YK11V13K"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
