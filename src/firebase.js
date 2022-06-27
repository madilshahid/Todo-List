import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAzl-3WilPOnIq1L6zPm-oQoWUhOXGC2y8",
  authDomain: "todolist-ae874.firebaseapp.com",
  databaseURL: "https://todolist-ae874-default-rtdb.firebaseio.com",
  projectId: "todolist-ae874",
  storageBucket: "todolist-ae874.appspot.com",
  messagingSenderId: "51491664590",
  appId: "1:51491664590:web:2a27d2566030c5c167d69f",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);