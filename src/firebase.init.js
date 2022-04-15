// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2gmHlWWrmhB1mm0YJsybwDr6YeZ9FIlc",
    authDomain: "ema-john-simple-6f513.firebaseapp.com",
    projectId: "ema-john-simple-6f513",
    storageBucket: "ema-john-simple-6f513.appspot.com",
    messagingSenderId: "495421486364",
    appId: "1:495421486364:web:e8dac7c4f1972b16fb76d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;