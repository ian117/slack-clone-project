import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAv6XItU8JJNVQy7pzv3Sso7M0eHnVe9RQ",
    authDomain: "slack-clone-394fa.firebaseapp.com",
    projectId: "slack-clone-394fa",
    storageBucket: "slack-clone-394fa.appspot.com",
    messagingSenderId: "189842287446",
    appId: "1:189842287446:web:633ffd15e534d66f94c4f7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider}
  export default database;