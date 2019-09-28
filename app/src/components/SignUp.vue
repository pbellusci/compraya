<template>
  <b-col cols="12">

    <b-row>
        <b-col cols="12">
            <h1 style="color:white"> Sign up </h1>
        </b-col>
    </b-row>
    
    <br/>

    <b-row>
        <b-col cols="12">
            <b-alert v-bind:show="show_error" variant="danger">{{form_error}}</b-alert>
        </b-col>
    </b-row>

    <br/>
    <b-row>
        <b-col cols="12">
            <b-form @submit.prevent="onSubmit">
                <b-form-group>
                    <b-form-input
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Email..."
                    />
                </b-form-group>

                <b-form-group>
                    <b-form-input
                        v-model="form.name"
                        required
                        placeholder="Enter name"
                    />
                </b-form-group>
            
                <b-form-group>
                    <b-form-input
                        v-model="form.lastname"
                        required
                        placeholder="Enter last name"
                    />
                </b-form-group>
                
                
                <b-form-group>
                    <b-form-input
                        v-model="form.password"
                        required
                        type="password"
                        placeholder="Enter Password"
                    />
                </b-form-group>
                
                <b-form-group>
                    <b-form-input
                        v-model="form.password_confirm"
                        type="password"
                        required
                        placeholder="Confirm Password"
                        @change="validatePasswords"
                    />
                </b-form-group>
                
                
                <b-form-group>
                    <submit-button ref="submit"/>
                </b-form-group>
                
            </b-form>
          
        </b-col>
    </b-row>        
  </b-col>
</template>

<script>

import User from '../models/user'
import SubmitButton from './SubmitButton.vue'

export default {
  data() {
    return {
        form: {
            name: '',       
            lastname: '',            
            email: '',            
            password: '',            
            password_confirm: '',
        },
        show_error: false,
        form_error: ''
    }
  },
  methods: {
        validatePasswords() {
            if(this.form.password_confirm != '' && (this.form.password_confirm != this.form.password)) {
                this.form_error = 'Password does not match'
                this.show_error = true
            } else {
                this.form_error = ''
                this.show_error = false
            }

        },
      onSubmit(){
        const $user = new User(this.form);
        this.$refs.submit.toggle()
        $user.create();
        this.$refs.submit.toggle()
      },      
  },
  components: {'submit-button': SubmitButton}
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
