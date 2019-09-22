<template>
 
    <el-row class="tac">
  <el-col style="height:100%;">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo submenutext"
      @open="handleOpen"
      @close="handleClose"
      style="height:100%;"
      >
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="1" >
        <i class="el-icon-document"></i>
        <span>Navigator Threesss</span>
      </el-menu-item>
       <el-menu-item index="1" >
        <i class="el-icon-document"></i>
        <span>Navigator Threesss</span>
      </el-menu-item>
       <el-menu-item index="1" >
        <i class="el-icon-document"></i>
        <span>Navigator </span>
      </el-menu-item>
       <el-menu-item index="1" >
        <i class="el-icon-document"></i>
        <span>Navigator Three</span>
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