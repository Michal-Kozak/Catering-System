<template>
  <div class="board">
  <sideMenu> </sideMenu>
  <dietList> </dietList>
      </div>
</template>

<script>
import sideMenu from './sidemenu.vue'
import dietList from './dietList.vue'


export default {
  name: 'app',
  components: {
    sideMenu,
    dietList,
  }
}
</script>

<style>
.board{
    display: flex;
}
</style>