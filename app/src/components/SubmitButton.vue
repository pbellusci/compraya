<template>
  <b-col cols="12">
    <b-button type="submit" variant="primary"  v-show="!process">Submit</b-button>
    <b-button type="submit" variant="primary" disabled v-show="process"> 
    Searching 
    <i class="fa fa-spinner fa-spin"/>
    </b-button>
  </b-col>
</template>

<script>
export default {
    data () {
        return {
          process: false
        }
    },
    methods: {
        toggle() {
          this.process =! this.process
        }
    }
    
}
</script>

<style>

</style>