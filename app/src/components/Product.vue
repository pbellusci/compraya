<template>
  <b-card 
    class="product mb-3"
    v-bind:title="cardTitle"
    v-bind:img-src="product.pictures[0].url"
    v-bind:img-alt="product.title"
    img-left
  >
    <b-card-text>
      <p>Precio: {{product.currency_id}}${{product.price}}</p>
      <p>Acepta Mercadopago?: {{product.accepts_mercadopago == true ? 'Si' : 'No'}}</p>
      <p>Publicación finaliza en: {{product.stop_time}}</p>
      <p>Cantidad disponible: {{product.available_quantity}}</p>
    </b-card-text>
  </b-card>

</template>

<script>

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
  props: {
    product: Object
  },
  data(){
    return {}
  },
  computed: {
    cardTitle() {
      var $title = this.product.title
      var $price = '(' + this.product.currency_id.toLowerCase() + ')' + '$' + this.product.price
      return $title + ' ' + $price
    }
  },  
  methods: {
    pushProduct($productData) {
      this.products.push($productData)        
    }
  },
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
