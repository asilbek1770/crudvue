import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "./plugins/router";
import axios from 'axios'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false


Vue.use(axios)
Vue.use(Toast)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
