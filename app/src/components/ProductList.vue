<template>
    <b-container>
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
      </b-row>
    </b-container>

</template>

<script>

import ProductSearch from './ProductSearch.vue'
import Product from './Product.vue'

/*accepts_mercadopago: true
available_quantity: 1
currency_id: "ARS"
id: "MLA783104226"
pictures: [{id: "879749-MLA31037476332_062019",…}, {id: "602360-MLA31037478716_062019",…},…]
price: 2999
sold_quantity: 4
stop_time: "2039-04-19T04:00:00.000Z"
title: "Lego® Creator - Futuristic Flyer (31086)"*/
export default {
  data() {
    return {
      products: []
    }
  },
  methods: {
    pushProduct($productData) {
      this.products.push($productData)        
    }
  },
  components: {ProductSearch, Product}
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
