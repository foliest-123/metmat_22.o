// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


 //TODO: Add SDKs for Firebase products that you want to use
 //https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAYi82eCNXNyzOt2mXOCG_91lgKkv2LxaM",
//   authDomain: "metmat-ff3e1.firebaseapp.com",
//   projectId: "metmat-ff3e1",
//   storageBucket: "metmat-ff3e1.appspot.com",
//   messagingSenderId: "582690534435",
//   appId: "1:582690534435:web:7ed4796b5ac46dd428ed96",
//   measurementId: "G-HHQGRR7CQ6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export {app,db};
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
 
// const firebaseConfig = {
  // apiKey: "AIzaSyAYi82eCNXNyzOt2mXOCG_91lgKkv2LxaM",
  // authDomain: "metmat-ff3e1.firebaseapp.com",
  // projectId: "metmat-ff3e1",
  // storageBucket: "metmat-ff3e1.appspot.com",
  // messagingSenderId: "582690534435",
  // appId: "1:582690534435:web:7ed4796b5ac46dd428ed96",
  // measurementId: "G-HHQGRR7CQ6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export {app,db};
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnNBhJt_n2Si72pPFrWWLthqRRBJHgGsU",
  authDomain: "synergy-9a9cb.firebaseapp.com",
  databaseURL: "https://synergy-9a9cb-default-rtdb.firebaseio.com",
  projectId: "synergy-9a9cb",
  storageBucket: "synergy-9a9cb.appspot.com",
  messagingSenderId: "836436100115",
  appId: "1:836436100115:web:eb3e2197447b611efe2be6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db};