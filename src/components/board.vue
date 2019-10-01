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
<div class="calculator__listOfLists">
  <dietList
  v-for="(list, index) in lists" 
  v-bind:key="list.id"
  v-on:removeList="lists.splice(index, 1)"
  v-bind:is="list"
  @addNewList="addNewList($event)"
  @addItem="addItem($event)"
  > </dietList>
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
        lists: ['dietList'],
       activeName: '1',
        num: '',
       qtySummary: '0',
      items: [ {value: 'Nazwa:', sum: 'Waga:'} ],
      }
      },
  methods: {
    addNewList(){
        this.lists.push('dietList')
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