<template>
  <div id="app">
    <!-- <canvas id="canvas"></canvas> -->
    <article>
      <img :src="src" alt />
      <audio src></audio>
    </article>
  </div>
</template>

<script>
export default {
  name: "App",
  // provide(){
  //  return{
  //    // 方法一:提供祖先组件的实例
  //    theme:this
  //  }
  // },
  // 方法二:使用2.6最新API Vue.observable 优化响应式 provide
  data () {
    return {
      src: ''
    };
  },
  methods: {
    getCanvas () {
      // let c = document.getElementById('canvas');
      // let ctx = c.getContext("2d");
      // let img = new Image();
      let i = 1
      let interval = setInterval(() => {
        if (i === 402) {
          clearInterval(interval)
          i = 1
        }
        // let m = i
        // if (m < 10) {
        //   m = '00' + m
        // } else if (m < 100) {
        //   m = '0' + m
        // } else {
        //   m = m
        // }
        this.src = 'http://192.168.1.238:8080/test1/' + i + '.png';
        // ctx.height = ctx.height
        // ctx.drawImage(img, 0, 0);
        // console.log(img.src)
        i++
      }, 66.667)
    }
  },
  mounted () {
    this.getCanvas()
  }
};
</script>

<style>
article {
  width: 3180px;
  height: 2160px;
  position: relative;
}
img {
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
article::before {
  content: '播放';
  width: 200px;
  height: 200px;
  background: black;
  color: aliceblue;
  position: absolute;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  z-index: 10;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
