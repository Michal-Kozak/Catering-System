<template>
 
    <el-row class="tac">
  <el-col style="height:100%;">
    <el-menu
      default-active="5"
      class="el-menu-vertical-demo submenutext"
      @open="handleOpen"
      @close="handleClose"
      style="height:100%;"
      >
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <span>Home</span>
      </el-menu-item>
      <el-menu-item index="2" >
        <i class="el-icon-menu"></i>
        <span>Packs</span>
      </el-menu-item>
       <el-menu-item index="3" >
        <i class="el-icon-s-marketing"></i>
        <span>Selling Data</span>
      </el-menu-item>
       <el-menu-item index="4" >
        <i class="el-icon-date"></i>
        <span>Callendar</span>
      </el-menu-item>
        <el-menu-item index="5" >
        <i class="el-icon-edit-outline"></i>
        <span>Calculator</span>
      </el-menu-item>
       <el-menu-item index="6" >
        <i class="el-icon-setting"></i>
        <span>Settings</span>
      </el-menu-item>
   
      
   
      

    </el-menu>
  </el-col>
    </el-row>

</template>


<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.submenutext{
  text-align: left;
}
</style>