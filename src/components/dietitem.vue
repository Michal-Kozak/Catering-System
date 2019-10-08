<template>
  <div class="calculator__product" v-bind:class="{ 'calculator__disabled': disabled }">
    <div class="calculator__qty" >
                <el-select
    v-model="item.value"
    v-bind:class="{ 'calculator__disabled--input': disabled }"
     size="small"
    filterable
    remote
    reserve-keyword
    placeholder="Produkt"
    
    :remote-method="remoteMethod"
    :loading="loading"
    loading-text="ladowanie"
     
    no-data-text="Brak produktów">
       <el-option
      v-for="states in statesRef"
      :key="states.value"
      :label="states.label"
      :value="states.value"
      :disabled="states.disabled">
    </el-option>
 
  </el-select>

                    <el-input-number v-model="item.num"  :min="1"  size="small" v-bind:class="{ 'calculator__disabled--input': disabled }" ></el-input-number>
                    <el-button 
                    type="success" 
                    icon="el-icon-check" 
                    circle 
                  v-bind:class="{ 'calculator__disabled--add': disabled }"
                    @click="addItem"
                    
                    ></el-button>
                    
                   
                    </div>
                   
                </div>            
</template>

<script>
import { statesRef } from '../firebase'
  export default {
    data() {
      return {
        disabled: false,
        item: {
                    value: '',
                    num: '1',
                    calories: '', 
                    sum: '',
                },
                caloriesList: [
                  {value:"Kurczak", calories:'75'},
                  
                  {value:"Cebula", calories:'35'},
                  
                  {value:"Pomidor", calories:'20'},
                  
                  {value:"Jajko", calories:'82'},
                  
                  {value:"Marchew", calories:'25'},
                  
                  {value:"Wieprzowina", calories:'242'},
                  
                  {value:"Wołowina", calories:'112'},
                  
                  {value:"Papryka", calories:'32'},
                  
                  {value:"Dynia", calories:'33'},
                  
                  {value:"Ananas", calories:''},

                ],
                newProduct: '',
                newCalories: '',

        num: 1,
        input: '',
        options: [],
        callories: '',
        list: [],
        loading: false,
        statesRef: []
      }
    },
    firebase: {
        statesRef: statesRef
      },
    mounted() {
      this.list = this.statesRef.map(item => {
        return { value: item, label: item };
      });
    },
    methods: {
      
     
      addItem() {
         this.$emit('ProductLists', this.statesRef, this.statesRef);

      this.disabled = true;
     var total = 999;
     
        var i = 0;  
          for(; i < total; i++) {
            if(this.statesRef[i].value == this.item.value){
                this.item.calories = this.statesRef[i].calories;
                console.log(this.item.caloriers)
                console.log(this.statesRef[i].calories)
                this.$emit('addItem', this.item); 
                  }else if (this.statesRef[i].calories < 20){
                    this.statesRef[i].calories = this.item.calories;

                    console.log('test')
                  }} 
           
    },
    caloriescalc(){
      this.$emit('caloriescalc', this.item)},
   
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options = [];
          x
        }
      }
    }
  }
</script>
<style>
.calculator__qty{
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}
.calories{
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

}
.calories button{
  margin-left: 15px;
}
.calculator__disabled{
  background-color: gainsboro;
  opacity: 0.7;
  pointer-events: none;
}
.calculator__disabled--add{
  display: none;
  opacity: 0.4;
}

</style>