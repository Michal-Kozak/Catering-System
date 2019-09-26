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
 <h1> Dodawanie - Działa (Nazwa musi być napisana tak samo, wielkość liter ma znaczenie!)<br>
      Kalulator Kalorii - Wpisac ilość gram a niżej ile kcal jest w 100g produktu)<br> 
      Dodawanie list oraz kolejnych produktów w trakcie wdrażania 
 </h1>
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
       qtySummary: '',
        
      items: [
     
    ]
      }
      },
  methods: {
     addItem(item) {
       this.items.push(item)

        var total = this.items.length - 1;
        var i = 0;
        var qtySummary = item.num;
       

        for(; i < total; i++) {
          if(this.items[i].value == item.value){
              this.items[i].num = this.items[i].num + item.num;
              this.items.pop()
          
               } 
           }
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