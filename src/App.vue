<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    hello I'm vue12
    {{this.name}}
    <my-com></my-com>
    <Hello/>
  </div>
</template>

<script>
import Hello from './components/hello.vue';
console.log(Hello);
export default {
  name: 'App',
  data() {
      return {
          name: 'gaosen'
      }
  },
  components: {
    'my-com': Hello,
    Hello
  }
}


</script>

<style lang="less">
// @import url('./styles/base.less');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
