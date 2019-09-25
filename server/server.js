const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const Product = require('./models/product')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.send('Hola')
})

app.get('/search/:productKey', Product.get)

app.listen(3000, () => {})
