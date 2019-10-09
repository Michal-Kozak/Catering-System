

<template>
  <div id="app" >
  
  <router-view> </router-view>
    
   
  </div>
  
</template>

<script>
import sideMenu from './components/sidemenu.vue'
import board from './components/board.vue'

export default {
  name: 'app',
  components: {
    board,
    sideMenu,
    
  }
}
</script>

<style>
body{
  margin: 0;
}
#app {
  display: flex;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
