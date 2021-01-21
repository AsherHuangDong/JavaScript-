<template>
  <div>
    <MainHeader></MainHeader>
  </div>
</template>
<script>

import './assets/css/global.styl'
import MainHeader from './components/MainHeader'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    MainHeader
  }
}

</script>
<style lang="stylus" scoped>
h1
  color: red
</style>
