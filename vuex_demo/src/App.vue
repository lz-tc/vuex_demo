<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png">
  <component1/>
</div>
</template>

<script>

import component1 from './components/component1.vue';
export default {
  name: 'App',
  components:{
    component1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
