<template>
    <div>
         <header>
            <!-- 绑定一个点击事件 -->
            <h1 @click="changeTitle">{{title}}</h1>
        </header>
    </div>
</template>

<script>
export default {
    name:'child',
    data() {
        return {
            title: 'vue.js Demo'
        }
    },
    methods: {
        changeTitle(){
            this.$emit('titleChanged', "子组件向父组件传值")//自定义事件，传递值 “子组件向父组件传值”；
        },
        sayHello(){
            window.alert('Hello');
        }
    },
}
</script>
<style>
    
</style>