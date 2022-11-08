// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgu5swflIHDf6M8pEdA0NGcLhx6tQpzis",
    authDomain: "traveloholic-42aac.firebaseapp.com",
    projectId: "traveloholic-42aac",
    storageBucket: "traveloholic-42aac.appspot.com",
    messagingSenderId: "195063293665",
    appId: "1:195063293665:web:5ee7404c220c5bdb2cb9a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;