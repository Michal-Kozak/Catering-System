<template>
  <div class="board" > 
    <el-collapse v-model="activeName" accordion class="collapse--style" >
  <el-collapse-item title="Lista" name="1"> 
<div class="diet__summary">
<li v-for="item in items" class="diet__list">
  <div class="product__summary">
    <p>{{item.value}}</p> <p> {{item.sum}}</p>
  </div>
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
       qtySummary: '0',
      items: [ {value: 'Nazwa:', sum: 'Waga:'} ],
      }
      },
  methods: {
     addItem(item) {
       this.items.push(item)
        var total = this.items.length -1;
        var i = 0;  
          for(; i < total; i++) {
            if(this.items[i].value == item.value){
                
              item.sum = +this.items[i].sum + item.num;
              this.items[i].sum = item.sum;
              this.items.pop();

                  } else {
                    item.sum = item.num;
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
.diet__list{
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product__summary{
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;

}
</style>