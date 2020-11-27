<template>
  <div>
    <h1>this is App</h1>
    <ul>
      <li v-for="(item, index) in arr" :key="index">todo{{ item }}</li>
    </ul>
  </div>
</template>
<script>

import './assets/css/global.styl'

export default {
  name: 'App',
  data () {
    return {
      arr: [1, 2, 3]
    }
  }
}

</script>
<style lang="stylus" scoped>
h1
  color: red
</style>
