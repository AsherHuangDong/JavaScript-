import Vue from 'vue'

import App from './App.vue'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
let arr = [1, 2, 3, 4]
arr = arr.map(x => x * 2)
console.log(arr)