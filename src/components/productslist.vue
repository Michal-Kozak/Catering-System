<template>

  <div class="productlist">
     <router-link to="/"> <el-button type="primary">Kalkulator</el-button>  </router-link><br>
       <div>
      <label>Nazwa: </label>
      <input type="text" v-model="productName"> <br>
        <label> Kalorie: </label>
      <input type="text" v-model="productCalories"><br>
      <button @click="submitName()" style="width:230px;">Add</button>
    </div>
    <div>
      <ul>
        <li v-for="personName of names" v-bind:key="personName['.key']" style=" list-style-type:none;">
          <div v-if="personName.edit">
            <input type="text" v-model="personName.name">
            <button @click="saveEdit(personName)">Save</button>
            <button @click="cancelEdit(personName)">Cancel</button>
          </div>
          <div v-else>
            <p> Nazwa: <b>{{personName.value}}</b> <b> | </b> Kaloryczność: <b>{{personName.calories}}</b></p>
            <button @click="removeName(personName)">Remove</button>
            
          </div>
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
        oldproductArray: [],
        names: [],
      }
      },
      firebase: {
        
    names: statesRef
      },
  methods: {
     submitName(){
     let idr = Math.floor(Math.random() * 90);
      statesRef.push({value:this.productName, label: this.productName, calories: this.productCalories, id: idr })
      
     
       
       
     },
     removeName(name) {
     statesRef.child(name['.key']).remove();
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

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  background-color: transparent;
  border: 2px solid black;
}
</style>