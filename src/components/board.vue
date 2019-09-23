<template>
  <div class="board" > 
    <el-collapse v-model="activeName" accordion class="collapse--style" >
  <el-collapse-item title="Lista" name="1"> 
<div class="diet__summary">
<li v-for="item in items">
    {{item.value}} {{ item.num}}
  </li>
</div>
  </el-collapse-item>

</el-collapse>
  <dietList
  @addItem="addItem($event)"
  > </dietList>
  <div class="diet__score">

    </div>
      </div>
</template>

<script>

import dietList from './dietList.vue'


export default {
  name: 'app',
  components: {
    dietList,
  },
  data() {

      return {
       activeName: '1',
        num: '',
        
      items: [
     
    ]
      }
      },
  methods: {
     addItem(item) {
       this.items.push(item)
       
       
        console.log(item.value)

        this.items.forEach(item => {
         if (item.value !== item.value){
          
         } else {
           
           console.log('zle');
         }
       })
     },
  
    }
}
</script>

<style>
.board{
  width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.collapse--style{
  width: 80%;
}
.diet__score{
  width: 50%;
  padding: 20px;
}
.diet__summary{
  background-color: grey;
  color: white;
}
</style>