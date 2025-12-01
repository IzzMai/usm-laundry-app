import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxShGirkss325vh4t7gv-9z9o7jpdynY4",
  authDomain: "usm-laundry-app.firebaseapp.com",
  projectId: "usm-laundry-app",
  storageBucket: "usm-laundry-app.firebasestorage.app",
  messagingSenderId: "225511181418",
  appId: "1:225511181418:web:715a3e5dca48444ab44e13"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
