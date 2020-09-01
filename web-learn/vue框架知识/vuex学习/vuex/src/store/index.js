/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
/* eslint-disable import/no-duplicates */

import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      counter
  }
})
