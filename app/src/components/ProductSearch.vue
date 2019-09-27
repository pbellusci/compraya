<template>
  <b-row>
      <b-col cols="12">
        <b-form v-on:submit.prevent="searchProduct">
          <b-form-group>
            <b-col cols="9" class="float-left">              
              <b-form-input type="text" v-model="productUrl" placeholder="Product Url"></b-form-input>
            </b-col>
            <b-col cols="3" class="float-left">              
              <b-button type="submit" variant="primary"  v-show="!searching">Submit</b-button>
              <b-button type="submit" variant="primary" disabled v-show="searching"> 
                Searching 
                <i class="fa fa-spinner fa-spin"/>
              </b-button>

            </b-col>                      
          </b-form-group>
        </b-form>        
      </b-col>        
    <br/>
  </b-row>
</template>

<script>

import Search from '../lib/product_search.js'
export default {
  data(){
    return {
      productUrl: '',
      productJson: {},
      searching: false
    }
  },
  methods: {
    async searchProduct() {
      this.searching = true
      try {
        const $search = await Search.search(this.productUrl)        
        this.productJson = $search.data
        this.productUrl = ''
        this.$emit('product-search', this.productJson)
      } catch(er) {}         
      this.searching = false
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
