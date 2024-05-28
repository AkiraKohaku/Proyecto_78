import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCjXrKrYdyRqx4Z2GEWDA86NuL3zmnJOUc",
    authDomain: "paseo-electronico-18a91.firebaseapp.com",
    projectId: "paseo-electronico-18a91",
    storageBucket: "paseo-electronico-18a91.appspot.com",
    messagingSenderId: "392810689473",
    appId: "1:392810689473:web:1ebf311c590dc75ebb7540"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


