<template>
  <div id="app">    
    <ProductSearch v-on:product-search="pushProduct"/>
    <hr/>
    <Product v-for="product in products" v-bind:key="product.id" :product="product"/>
  </div>
</template>

<script>
import ProductSearch from './components/ProductSearch.vue'
import Product from './components/Product.vue'

export default {
  name: 'app',
  data() {
    return {
      products: []
    }
  },
  methods: {
    pushProduct($productData) {
      this.products.push($productData)
      console.log(this.products)
        
    }
  },
  components: {
    ProductSearch,
    Product
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
