const request = require('request')
const rp = require('request-promise')
const $url = (key) => 'https://api.mercadolibre.com/items/' + key + '.json'

module.exports = {
    async get(req, res) {
        const url = $url(req.params.productKey)
        const $json = rp(url).then(function (response) {
            res.send(response)// resolved
        })
        .catch(function (err) {
            res.send(err.response.body)// rejected
        });     
        
    }
}