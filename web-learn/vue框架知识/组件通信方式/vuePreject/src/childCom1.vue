<template class="border">
    <div>
        <p>foo: {{foo}}</p>
        <p>childCom1的$attrs: {{$attrs}}</p>
        <child-com2 v-bind="$attrs" v-on="$listeners"></child-com2>
    </div>
</template>

<script>
const childCom2 = () => import("./childCom2")
export default {
    components: {
        childCom2
    },
    inheritAttrs: true,//可以关闭自动挂载到组件根元素上的没有在props声明的属性
    props: {
        foo: String // foo作为props属性绑定
    },
    created() {
        console.log(this.$attrs);
    },
    methods: {
        
    },
    mounted() {
        this.$emit('test1');
    },
}
</script>