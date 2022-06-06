import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyB6AisLk2TdBxj3vAFtHjgFxJJvVzSXL20",
   authDomain: "arene-ufc-s2.firebaseapp.com",
   projectId: "arene-ufc-s2",
   storageBucket: "arene-ufc-s2.appspot.com",
   messagingSenderId: "662103920934",
   appId: "1:662103920934:web:46d2acad5203ac7d24f1e7"
 };

   // Initialize Firebase
   const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)
 
app.use(router)

app.mount('#app')
