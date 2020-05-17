<template>
    <div class="border">
        <p>boo: {{boo}}</p>
        <p>childCom2: {{$attrs}}</p>
        <button @click="$emit('test2','按钮点击')">触发事件</button>
        <child-com3 v-bind="$attrs"></child-com3>
    </div>
</template>

<script>
const childCom3 = () => import("./childCom3.vue")
export default {
    components:{
        childCom3
    },
    inheritAttrs: true,
    props: {
        boo: String
    },
    methods: {
    },
    created(){
        console.log(this.$attrs);
    },
    mounted() {
        this.$emit('test2');
    },
}
</script>