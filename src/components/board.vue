<template>
  <div class="board"> 
  <dietList
  @addItem="addItem($event)"
  > </dietList>
  <div class="diet__score">
    <el-button type="info" @click="calculate()" >Oblicz</el-button> 
<div class="diet__summary">
<h1> Lista </h1>
 <li v-for="item in items">
    {{ item.item.value }} {{ item.item.num}}
  </li>
</div>
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
      items: [
      
    ]
      }
      },
  methods: {
      addItem(item) {
        this.items.push({item});
        console.log(item.value);
      
    },
    calculate(){
      
    }
    }
}
</script>

<style>
.board{
  width: 90%;
    display: flex;
    flex-direction: column;
}
.diet__score{
  width: 100%;
  padding: 20px;
}
.diet__summary{
  background-color: grey;
  color: white;
}
</style>