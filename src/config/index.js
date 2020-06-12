// public config
import * as firebase from "firebase/app"

let firebaseConfig = {
    apiKey: "AIzaSyDrqQhHQT7iGtJqGuovtaGSjwlyZXEKl6A",
    authDomain: "justdancecatalog-1574954053411.firebaseapp.com",
    databaseURL: "https://justdancecatalog-1574954053411.firebaseio.com",
    projectId: "justdancecatalog-1574954053411",
    storageBucket: "justdancecatalog-1574954053411.appspot.com",
    messagingSenderId: "610023212303",
    appId: "1:610023212303:web:c7269b6052ec4a51af2a7a"
}

export const fbconfig = firebase.initializeApp(firebaseConfig)