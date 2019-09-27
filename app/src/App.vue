<template>
  <div id="app">    
    <b-container>
      <b-col cols="12">
        <router-view></router-view>
      </b-col>

    <!--<b-container>
      <b-row>
        <b-col cols="12">
          <ProductSearch v-on:product-search="pushProduct"/>
        </b-col>
      </b-row>
      <hr/>
      <b-row>        
        <b-col cols="12">
          <Product v-for="product in products" v-bind:key="product.id" :product="product"/>
        </b-col>
      </b-row>-->
      
      
      
    </b-container>
    
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {
      products: []
    }
  },
  mounted() {
    /*var $url = 'https://api.mercadolibre.com/items/MLA723699521.json'
    try {
      const $data = axios.get($url)
      console.log($data.data)
    } catch(er) {

    }*/
  },
  methods: {
    pushProduct($productData) {
      this.products.push($productData)        
    }
  },
  components: {}
}
</script>

<style>
body {
  background-color: #1e1e2d!important
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
