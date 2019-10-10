<template>
  <div class="board">
    <router-link to="/productlist"> <el-button type="primary">Lista Produktów</el-button>  </router-link>
    <el-collapse v-model="activeName" accordion class="collapse--style">
      <el-collapse-item title="Lista" name="1">
        <div class="diet__summary">
          <li v-for="item in items" :key="item.index" class="diet__list">
            <div class="product__summary">
              <p>{{item.value}}</p>
              <p>{{item.sum}}</p>
            </div>
          </li>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="calculator__listOfLists">
      <dietList
        v-for="(list, index) in lists"
        :key="index"
        :list="list"
        :index="index"
        @removeList="removeList($event)"
        @addNewList="addNewList($event)"
        @addItem="addItem($event)"
      ></dietList>
    </div>
    
  </div>
</template>

<script>
import dietList from "./dietList.vue";
import { statesRef } from "../firebase";

export default {
  name: "app",
  components: {
    dietList
  },
  data() {
    return {
      lists: [
        {
          id: 1,
          name: 'Nazwa Diety1'
        },
        {
          id: 2,
          name: 'Nazwa Diety2'
        },
        {
          id: 3,
          name: 'Nazwa Diety3'
        },
        {
          id: 4,
          name: 'Nazwa Diet4'
        },
       
      ],
      productName: "",
      productCalories: "",
      activeName: "1",
      product: "",
      num: "",
      statesRef: "",
      qtySummary: "0",
      items: [{ value: "Nazwa:", sum: "Waga:" }]
    };
  },
  firebase: {
    statesRef: statesRef
  },
  methods: {
    submitProduct() {
      statesRef.push({
        value: this.productName,
        label: this.productName,
        calories: this.productCalories
      });

      console.log(statesRef);
    },
    removeProduct(key) {
      statesRef.remove();
    },

    addNewList() {
      let idr = Math.floor(Math.random() * 90);
      console.log(this.lists);
      this.lists.push({id:idr, name: 'dietname'+idr});
    },

    removeList: function(id) {
      let oldArray = this.lists;
      oldArray = oldArray.filter(item => item.id !== id)
      this.lists = oldArray
    },

    addItem(item) {
      this.items.push(item);
      var total = this.items.length - 1;
      var i = 0;
      for (; i < total; i++) {
        if (this.items[i].value == item.value) {
          item.sum = +this.items[i].sum + item.sum;
          this.items[i].sum = item.sum;
          this.items.pop();
        } else {
          item.sum = item.sum;
        }
      }
    }
  }
};
</script>

<style>
.board {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.collapse--style {
  width: 80%;
}
.diet__score {
  width: 50%;
  padding: 20px;
}
.diet__summary {
  background-color: grey;
  color: white;
}
.diet__list {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.calculator__listOfLists {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.product__summary {
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;
}
</style>