<template>
  <div id="app">
    <h2>name的值为：{{theme.name}}</h2>
    <button @click="changeName">改变name的值为</button>
    <index></index>
    <child @titleChanged="updateTitle" ref="comA"></child>
    <h2>{{title}}</h2>
    <parent :users="users"></parent>
  </div>
</template>

<script>
import Vue from "vue";
import parent from "./components/parent";
import child from "./components/child";
import index from "./index";
export default {
  name: "App",
  // provide(){
  //  return{
  //    // 方法一:提供祖先组件的实例
  //    theme:this
  //  }
  // },
  // 方法二:使用2.6最新API Vue.observable 优化响应式 provide
  provide () {
    this.theme = Vue.observable({
      name: "jam"
    });
    return {
      theme: this.theme
    };
  },
  data () {
    return {
      //name: 'jam',
      users: ["Henry", "Bucky", "Emily"],
      title: "传递的是一个值"
    };
  },
  components: {
    parent,
    child,
    index
  },
  methods: {
    updateTitle (e) {
      this.title = e;
    },
    changeName () {
      //this.name = 'food'
      this.theme.name = "hello";
    }
  },
  mounted () {
    console.log(this.$refs);
    const comA = this.$refs.comA;
    console.log(comA);
    // //comA.sayHello();
    // console.log(comA.title);
    comA.sayHello();
  }
};
</script>

<style>
</style>
