<template>
  <div class="board" > 
    <div>
  <router-link to="/productlist"> <el-button type="primary">Lista Produktów</el-button>  </router-link>
  </div>
    <el-collapse v-model="activeName" accordion class="collapse--style" >
  <el-collapse-item title="Lista" name="1"> 
<div class="diet__summary">
<li v-for="item in items" :key="item.index" class="diet__list">
  <div class="product__summary">
    <p>{{item.value}}</p> <p> {{item.sum}}</p>
  </div>
  </li>
</div>

  </el-collapse-item>

</el-collapse>

<div class="calculator__listOfLists">
  <dietList
  v-for="(list, index) in listsRef" 
  v-bind:key="index"
  v-bind:is="list"
  @removeList="removeList($event)"
  @addNewList="addNewList($event)"

  @addItem="addItem($event)"
  > </dietList>
</div>
 
 
 
      </div>
      
</template>

<script>

import dietList from './dietList.vue'
import { statesRef } from '../firebase'
import {listsRef} from '../firebase'
import {taskssRef} from '../firebase'

export default {
  name: 'app',
  components: {
    dietList,
  },
  data() {
      return {
        lists: ['dietList'],
        productName: '',
        productCalories: '',
       activeName: '1',
        product: '',
        listsRef: '',
        listofProducts: [],
        num: '',
        statesRef: '',
       qtySummary: '0',
      items: [ {value: 'Nazwa:', sum: 'Waga:'} ],
      }
      },
      firebase: {
       listsRef: listsRef,
    statesRef: statesRef,
      },
  methods: {
     submitProduct(){
     
      statesRef.push({value:this.productName, label: this.productName, calories: this.productCalories, })
      listofProducts.push(this.productName)
      if(productName == listofProducts){
        console.log('errr')
      }
       
       
     },
     removeProduct(key){
   console.log( this.states.key)

     
     },
    
    addNewList(){
        console.log(this.lists)
        listsRef.push('dietList')
    },
    
    removeList: function(list) {
      console.log(this.lists)
  this.lists.splice(this.lists.index, 1);
},
    
    addItem(item) {
       this.items.push(item)
        var total = this.items.length -1;
        var i = 0;  
           
           
          for(; i < total; i++) {
            if(this.items[i].value == item.value){
            
              item.sum = +this.items[i].sum + item.sum;
              this.items[i].sum = item.sum;
             
              this.items.pop();

                  } else {
                    item.sum = item.sum;
                  }
           }
     },
    }
}
</script>

<style>
.board{
  width:100%;
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
.calculator__listOfLists{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.product__summary{
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;

}
</style>