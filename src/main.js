import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
import {request} from './network/request.js';

// request({
//   url:'/home/multidata'
// }, res =>{
//   console.log(res);
// },err =>{
//   console.log(err);
// })


// request({
//   url:'/home/multidata',
// }).then(res =>{
//   console.log(res);
// }).catch(err =>{
//   console.log(err);
// })
