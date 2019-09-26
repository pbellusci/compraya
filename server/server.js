const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const Product = require('./models/product')
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
	apiKey: "AIzaSyDAEHPPS2veSRr3jSp75b9J8R6yncflGQA",
	authDomain: "compra-ya.firebaseapp.com",
	databaseURL: "https://compra-ya.firebaseio.com",
	projectId: "compra-ya",
	storageBucket: "compra-ya.appspot.com",
	messagingSenderId: "519871993340",
	appId: "1:519871993340:web:19bfce5aa5d0a738400e79",
	measurementId: "G-3YGGT23W33"
};
   
   // Initialize Firebase
firebase.initializeApp(firebaseConfig);

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.send('Hola')
})

app.get('/search/:productKey', Product.get)

app.listen(3000, () => {})
