// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

 //TODO: Add SDKs for Firebase products that you want to use
 //https://firebase.google.com/docs/web/setup#available-libraries

 const firebaseConfig = {
  apiKey: "AIzaSyAYi82eCNXNyzOt2mXOCG_91lgKkv2LxaM",
  authDomain: "metmat-ff3e1.firebaseapp.com",
  databaseURL: "https://metmat-ff3e1-default-rtdb.firebaseio.com",
  projectId: "metmat-ff3e1",
  storageBucket: "metmat-ff3e1.appspot.com",
  messagingSenderId: "582690534435",
  appId: "1:582690534435:web:7ed4796b5ac46dd428ed96",
  measurementId: "G-HHQGRR7CQ6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db};