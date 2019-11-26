import firebase from "firebase";
// import firestore from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDp2TSPbX_kEw_7hZXaLTX1GpuhZ3elQPw",
  authDomain: "udemy-ninja-smoothies-58325.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-58325.firebaseio.com",
  projectId: "udemy-ninja-smoothies-58325",
  storageBucket: "udemy-ninja-smoothies-58325.appspot.com",
  messagingSenderId: "456720522528",
  appId: "1:456720522528:web:f544f7cd1431afa4944b45",
  measurementId: "G-R2HW87D4M4"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore();
