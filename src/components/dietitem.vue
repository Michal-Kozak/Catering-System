<template>
  <div class="calculator__product" v-bind:class="{ 'calculator__disabled': disabled }">
    <div class="calculator__qty" >
                <el-select
                class="small-medium"
    v-model="item.value"
    v-bind:class="{ 'calculator__disabled--input': disabled }"
     size="small"
    filterable
    remote
    reserve-keyword
    placeholder="Produkt"
    
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

                    <el-input-number v-model="item.num" class="small-small"  :min="1"  size="small" v-bind:class="{ 'calculator__disabled--input': disabled }"  :controls="false"></el-input-number>
                    <el-button 
                    type="success" 
                    icon="el-icon-check" 
                    circle 
                   
                    
                  v-bind:class="{ 'calculator__disabled--add': disabled }"
                    @click="addItem"
                    
                    ></el-button>
                    
          <el-button 
          type="danger" 
          icon="el-icon-delete" 
          circle 
          @click="removeItem" 
          v-bind:class="{ 'calculator__antydisabled': disabled }">
          </el-button>
                    
                   
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
        num: 1,
        input: '',
        options: [],
        callories: '',
        loading: false,
        statesRef: [],
      
      }
    },
   
    firebase: {
        statesRef: statesRef
      },
     props: {
    index: {
      type: Number,
      required: true,
    },
    task: {
      type: Object,
      required: true,
    },
  },
    methods: {
      
     removeItem(){
      this.$emit("removeItem", this.task.id);
     },
      addItem() {
        
      this.disabled = true;
      this.antydisabled= false;
     var total = 999;
        var i = 0;  
          for(; i < total; i++) {
            if(this.statesRef[i].value == this.item.value){
                this.item.calories = this.statesRef[i].calories;
              

                this.$emit('addItem', this.item); 
                  }else if (this.statesRef[i].calories < 20){
                    this.statesRef[i].calories = this.item.calories;

                   
                  }} 
           
    },
    caloriescalc(){
      this.$emit('caloriescalc', this.item)},
   
    
    }
  }
</script>
<style>
.small-medium{
  width: 35%
}
.small-small{
width: 25%
}
.calculator__qty{
  display:flex;
  justify-content: space-around;
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

  pointer-events: none;
}
.calculator__antydisabled{

  pointer-events:all;
}
.calculator__disabled--add{
  display: none;
  opacity: 0.4;
}

</style>