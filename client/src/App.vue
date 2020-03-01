<template>
  <div id="app">
    <VehicleComponent />
  </div>
</template>

<script>
import VehicleComponent from './components/VehicleComponent.vue'

export default {
  name: 'App',
  components: {
    VehicleComponent
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
