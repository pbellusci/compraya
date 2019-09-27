const MELI_URL = ($key) => 'https://api.mercadolibre.com/items/' + $key +'.json'
const EXPORT_URL_REGEXP = /(?:ML)[a-zA-Z0-9](-)[0-9]+/

import axios from 'axios'
const Search = {
    extractProductKey($url) {
        var url = $url.match(EXPORT_URL_REGEXP)
        url = typeof url[0] != 'undefined' ? url[0] : ''
        url = url.replace('-', '')
        return url
    },
    search($url) {
        const $productKey = this.extractProductKey($url)
        return axios.get(MELI_URL($productKey))
    }
}

export default Search;