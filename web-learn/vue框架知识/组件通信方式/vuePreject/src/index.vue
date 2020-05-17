<template>
    <div>
        <h2>浪里行舟</h2>
        <child-com1
        :foo = "foo"
        :boo = "boo"
        :coo = "coo"
        :doo = "doo"
        title = "前端工匠"
        v-on:test1="onTest1"
        v-on:test2="onTest2"
        ></child-com1>
    </div>
</template>

<script>
const childCom1 = () => import('./childCom1.vue');
export default {
    components: { childCom1 },
    data() {
        return {
            foo: "Javascript",
            boo: "Html",
            coo: "Css",
            doo: "Vue"
        }
    },
    methods: {
        onTest1(){
            console.log('test1 running...')
        },
        onTest2(value){
            console.log('test2 running...' + (value || ''))
        }
    },
}
</script>