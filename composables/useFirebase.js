// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// export default defineNuxtPlugin(nuxtApp => {
//     const config = useRuntimeConfig()
    
const firebaseConfig = {
  apiKey: "AIzaSyBjTa5tJNFkdDuWhYzR4LNU5aDWOBukZSc",
  authDomain: "testdev-b3222.firebaseapp.com",
  projectId: "testdev-b3222",
  storageBucket: "testdev-b3222.appspot.com",
  messagingSenderId: "299207040534",
  appId: "1:299207040534:web:27d45ba5b520bbaea9df37",
  measurementId: "G-90DCKY0CFV"
};

// Initialize Firebase
// export default function useFirebase() {
//     if (getApps().length == 0) {
//         const app = initializeApp(firebaseConfig);
//         return { app }
//     }
// }
// })
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const storage = getStorage(app);
export default function useFirebase() { 
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);
  return { db, storage }
 }
