import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwXeLbVS1bIdtOcOSE4lwEaOSVvxD0tTk",
  authDomain: "fir-aa28e.firebaseapp.com",
  projectId: "fir-aa28e",
  storageBucket: "fir-aa28e.appspot.com",
  messagingSenderId: "105841560283",
  appId: "1:105841560283:web:aa53113e96581f8d6f5afe",
  measurementId: "G-R6CXZFZM7R"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth}; 