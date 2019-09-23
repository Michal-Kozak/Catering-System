<template>
  <div class="board"> 
  <dietList
  @addItem="addItem($event)"
  > </dietList>
  <div class="diet__score">

<div class="diet__summary">
<h1> Lista </h1>
<li v-for="item in items">
    {{item.value}} {{ item.num}}
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
        caloriesSummary: '',
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
.diet__score{
  width: 50%;
  padding: 20px;
}
.diet__summary{
  background-color: grey;
  color: white;
}
</style>