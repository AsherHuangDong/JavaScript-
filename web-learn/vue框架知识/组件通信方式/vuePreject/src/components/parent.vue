<template>
  <div class="hello">
    <h2>{{theme.name}}</h2>
    <ul>
      <!-- 遍历传递过来的值然后呈现到页面 -->
      <li v-for="user in users" :key="user">{{user}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "parent",
  inject: {
    theme: {
        default:()=>({})
    }
  },
  data() {
    return {};
  },
  props: {
    // 总结:父组件通过props向下传递数据给子组件。
    // 注：组件中的数据共有三种形式：data、props、computed
    users: {
      //这个就是父组件中子标签自定义名字
      type: Array,
      required: true
    }
  },
  methods: {}
};
</script>
<style>
</style>