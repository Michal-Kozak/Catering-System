<template>

  <div class="productlist">
       <router-link to="/"> <el-button type="primary">Kalkulator</el-button>  </router-link>
      <h1>Dodaj produkt do bazy </h1>
      <div  style="display:flex; justify-content:center; flex-direction:column; align-items:center;">
          
          <el-form :inline="true"  class="demo-form-inline" style="border-bottom:2px solid #409EFF; width:45%;">
  <el-form-item label="Nazwa Produktu:">
    <el-input v-model="productName" ></el-input>
  </el-form-item>

  <el-form-item label="Kaloryczność:">
    <el-input v-model="productCalories"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitProduct()">Dodaj</el-button>
  </el-form-item>
  
</el-form >

          
    <ul>
      <li v-for="states of statesRef" v-bind:key="states['.key']" style="list-style:none;">
          <p> Produkt: <b> {{states.value}}</b> Kaloryczność: <b> {{states.calories}} </b> </p>
      <button @click="removeProduct(statesRef.key)">Usuń</button> 
      </li>
    </ul>
      </div>
      
      </div>
</template>

<script>

import { statesRef } from '../firebase'

export default {
  name: 'productlist',
 
  data() {
      return {

        productName: '',
        productCalories: '',
      }
      },
      firebase: {
        
    statesRef: statesRef
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
.productlist{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.frame__addproduct{
    border: 2px solid blue;
    display: flex;
    flex-direction: column;
    width: 20%;
}
</style>