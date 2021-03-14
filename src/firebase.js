import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCd8MzoY_C5cMSLX5FJSI6rJtzA5vf6sVs",
    authDomain: "netflix-clone-dcdef.firebaseapp.com",
    projectId: "netflix-clone-dcdef",
    storageBucket: "netflix-clone-dcdef.appspot.com",
    messagingSenderId: "324238908398",
    appId: "1:324238908398:web:851c3189e19a56894d8cff",
    measurementId: "G-J3K8TG7MX2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;
