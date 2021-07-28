<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Icon />
    <DefaultIcon/>
  </div>
</template>

<script>
import Icon from './components/Icon.vue'
import DefaultIcon from './components/DefaultIcon.vue'

export default {
  name: 'App',
  components: {
    Icon,
    DefaultIcon
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
