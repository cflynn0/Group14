import rebase from 're-base';
import firebase from 'firebase';

/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->*/


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAd1Xt7sHkoOStQZQWv3zS5hBymSF55amE",
    authDomain: "cen-4020-group-14.firebaseapp.com",
    databaseURL: "https://cen-4020-group-14.firebaseio.com",
    projectId: "cen-4020-group-14",
    storageBucket: "cen-4020-group-14.appspot.com",
    messagingSenderId: "856920598282",
    appId: "1:856920598282:web:4dabf07d0dd89e654a7cf3"
  };
  // Initialize Firebase

  const config = firebase.initializeApp(firebaseConfig)
  const base = Rebase.createClass(config.database())

//Allows the ability to import the data stored in firebase across our files
  export {base}
