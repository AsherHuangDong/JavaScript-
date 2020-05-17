
/**
 * vue路由懒加载
 * 优点：
 *  1.vue打包后的js文件也越来越大，这会是影响加载时间的重要因素。
 *  2.当构建的项目比较大的时候，懒加载可以分割代码块，提高页面的初始加载效率。
 */

// 方法一:采用resolve
// 原理: 主要是使用了resolve的异步机制，用require代替import,实现按需加载
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'hellowWorld',
            component: resolve => require(['@/components/HelloWorld',resolve])
        }
    ]
})

//方法二(官网方法):vue-router提供的方法
// 原理: 结合Vue的异步组件和webpack的代码分割功能实现
//   首先可以将异步组件定义为返回一个Promise的工厂函数(该函数返回的Promise是resolve组件本身):
//      const Foo = () => Promise.resolve({/*组件定义对象*/})
//   第二:才webpack2中，可以使用动态import语法来定义代码分块点(split point)
//      import('./Foo.vue')//返回Promise
// 注意：如果使用的是 Babel 则需要添加 syntax-dynamic-import 插件,才能使Babel可以正确的解析语法

// 例：
export default new Router({
    routes: [
        {
            path: '/',
            name: 'helloWorld',
            component: () => import('@components/helloWorld.vue')
        }
    ]
})
// 把组件安组分块
//我们有时候要把某个路由下的所有组件都打包在同一个异步块中。只需要使用命名 chunk，
//一个特殊的注释语法来提供chunk name(需要webpack > 2.4)
//webpack会把所有异步组件和有相同的
//如：
const Foo = () => import(/* webpackChunkName: "group-name" */'./Foo.vue')
const Bar = () => import(/* webpackChunkName: "group-name" */'./Bar.vue')
const Baz = () => import(/* webpackChunkName: "group-name" */'./Baz.vue')

// 方法三:require.ensure
// 这种模式可以通过参数中的webpackChunkName将js分开打包
export default new Router({
    routes: [
        {
            path: '/',
            name: 'helloWorld',
            component: resolve => require.ensure([],() => resolve(require('@/components/'+componentName)),'webpackChunkName')
        }
    ]
})
