const request = require('request')
const rp = require('request-promise')
const $url = (key) => 'https://api.mercadolibre.com/items/' + key + '.json'

const Product = {
    fields: ['id', 'title', 'price', 'currency_id', 'available_quantity', 'sold_quantity', 'stop_time', 'pictures', 'accepts_mercadopago'],
    parseResponse($data){
        var temp = {}
        var $data = JSON.parse($data)
        Product.fields.forEach( (item) => {
            if (typeof $data[item] != 'undefined')
                temp[item] = $data[item]
        })
        return temp;
    }            
}

module.exports = {
    async get(req, res) {
        const url = $url(req.params.productKey)
        const $json = rp(url).then(function (response) {
            console.log('Product sent')
            res.send(Product.parseResponse(response))// resolved
        })
        .catch(function (err) {
            res.send(err.response.body)// rejected
        });     
        
    }
}