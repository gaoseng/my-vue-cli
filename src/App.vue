<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    hello I'm vue123
    {{this.name}}
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
          name: 'gaosen'
      }
  },
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
