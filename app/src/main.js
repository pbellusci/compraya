import Vue from 'vue'
import VueRouter from 'vue-router'
import {firestorePlugin} from 'vuefire'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'

import SignUp from './components/SignUp.vue'
import ProductList from './components/ProductList.vue'

Vue.use(VueRouter)
Vue.use(firestorePlugin)

const routes = [
  { path: '/signup', component: SignUp },
  { path: '/products', component: ProductList },

]

const router = new VueRouter({routes: routes})

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
