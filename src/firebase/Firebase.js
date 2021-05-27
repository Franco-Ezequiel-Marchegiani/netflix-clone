import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDFe4XkS_B4G1I059wZIanW_0MaPThnU9k",
    authDomain: "netflix-clone-51a91.firebaseapp.com",
    projectId: "netflix-clone-51a91",
    storageBucket: "netflix-clone-51a91.appspot.com",
    messagingSenderId: "183395371380",
    appId: "1:183395371380:web:c36e7902c433775312c421",
    measurementId: "G-J90QCCW7DQ"
  };

export default  firebase.initializeApp(firebaseConfig);