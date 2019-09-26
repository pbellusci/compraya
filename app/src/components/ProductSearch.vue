<template>
  <b-row>
      <b-col cols="12">
        <b-form v-on:submit.prevent="searchProduct">
          <b-form-group>
            <b-col cols="9" class="float-left">              
              <b-form-input type="text" v-model="productUrl" placeholder="Product Url"></b-form-input>
            </b-col>
            <b-col cols="3" class="float-left">              
              <b-button type="submit" variant="primary">Submit</b-button>
            </b-col>                      
          </b-form-group>
        </b-form>        
      </b-col>        
    <br/>
  </b-row>
</template>

<script>
const EXPORT_URL_REGEXP = /(?:ML)[a-zA-Z0-9](-)[0-9]+/
const SERVER_URL = 'http://localhost:3000/search/'

import axios from 'axios'
export default {
  data(){
    return {
      productUrl: '',
      productJson: {}
    }
  },
  methods: {
    getProductKey() {
      var url = this.productUrl.match(EXPORT_URL_REGEXP)
      url = typeof url[0] != 'undefined' ? url[0] : ''
      url = url.replace('-', '')
      return url
    },
    async searchProduct() {
      try {
        const $productKey = this.getProductKey()
        const $search = await axios.get(SERVER_URL + $productKey)
        this.productJson = $search.data
        this.productUrl = ''
        this.$emit('product-search', this.productJson)
      } catch(er) {
        //console.log(er)
      }         
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
