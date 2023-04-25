import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import orderBy from 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA0Eap1k-jVJ9XuHpaT7Kq2kdgr7YD3XCA",
    authDomain: "life-7a234.firebaseapp.com",
    projectId: "life-7a234",
    storageBucket: "life-7a234.appspot.com",
    messagingSenderId: "740199283226",
    appId: "1:740199283226:web:4b49c4693254c993e5efa3"
  };

firebase.initializeApp(firebaseConfig);

//Initialize Firestore service

const db = firebase.firestore();

export { db }