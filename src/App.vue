

<template>
  <div id="app" >
    
    <board>
  
   </board>
   
  </div>
</template>

<script>

import board from './components/board.vue'

export default {
  name: 'app',
  components: {
    board,
    
  }
}
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
