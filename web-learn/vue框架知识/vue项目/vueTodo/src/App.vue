<template>
  <div id="app">
    <!-- <main-header></main-header>
    <main-todo></main-todo>
    <main-footer></main-footer>-->
    <!-- <img :src="src" alt /> -->
    <div id="player"></div>
  </div>
</template>

<script>
import './assets/css/global.styl'
import MainHeader from './components/MainHeader'
import MainTodo from './components/MainTodo/MainTodo'
import MainFooter from './components/MainFooter'
import dplayer from 'dplayer'

export default {
  name: 'App',
  data () {
    return {
      src: '../static/img/me.jpg'
    }
  },
  components: {
    MainHeader,
    MainTodo,
    MainFooter
  },
  methods: {
    play () {
      console.log('play callback')
    }
  },
  mounted () {
    const dp = new dplayer({
      container: document.getElementById('player'),
      video: {
        url: '../static/img/1606984870957.flv'
      }
    })
    dp.play()
  }
}
</script>
<style lang="stylus" scoped></style>


