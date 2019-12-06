//import Rebase from 're-base';
import firebase from 'firebase';
import 'firebase/firestore';

/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->*/


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCKCrmYxyTsE9Hy6JsXWJvUKC78j9oBRCY",
      authDomain: "gustbuddy-2da1b.firebaseapp.com",
      databaseURL: "https://gustbuddy-2da1b.firebaseio.com",
      projectId: "gustbuddy-2da1b",
      storageBucket: "gustbuddy-2da1b.appspot.com",
      messagingSenderId: "355745316245",
      appId: "1:355745316245:web:f010553567c761f1d58a9c",
      measurementId: "G-S4KK7YLSTC"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
//  const userBase = Rebase.createClass(config.database())

//Allows the ability to import the data stored in firebase across our files
  export default firebase
