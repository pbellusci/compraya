<template>
  <div class="hello">
    <form v-on:submit.prevent="searchProduct">
      <input type="text" v-model="productUrl" placeholder="Product Url"/>
      <button v-bind:disabled="productUrl == ''"> Search</button>      
    </form>
    <br/>
    {{productJson}}
  </div>
</template>

<script>
const EXPORT_URL_REGEXP = /(?:ML)[a-zA-Z0-9](\-)[0-9]+/
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
        const $search = await axios.get('http://localhost:3000/search/' + $productKey)
        this.productJson = $search.data
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
