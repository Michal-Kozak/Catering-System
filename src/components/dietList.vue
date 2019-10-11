    <template>
  <div class="calculator">
    <div class="calculator__row">
      <div class="calculator__type">
        <el-input-number v-model="dietqty" :min="0" size="small" :controls="false" style="  border-radius: 50%; width:30%;"></el-input-number>
       
        <div class="list__name" contenteditable="true">
          <h1>{{ list.name }}</h1>
        </div>
        <div>
          <el-button type="danger" icon="el-icon-delete" circle @click="removeList"></el-button>
          <el-button type="primary" icon="el-icon-plus" circle @click="addNewList"></el-button>
        </div>
      </div>

      <dietitem
        v-for="(task, index) in tasks"
         :key="index"
        :task="task"
        :index="index"
        
        @addItem="addItem($event)"
        @removeItem="removeItem($event)"
        @caloriescalc="caloriescalc($event)"
      ></dietitem>

      <div class="addTask__button">
        <el-button type="primary" icon="el-icon-plus" round style="width:60%;" @click="addNewItem"></el-button>
      </div>
      <p>{{calloriesSummary}} KCAL</p>
      
    </div>
    
  </div>
</template>


<script>
import dietitem from "./dietitem.vue";
export default {
  components: {
    dietitem
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          taskname: 'taskanme1'
        },
        {
          id: 2,
          taskname: 'taskanme2'
        },{
          id: 3,
          taskname: 'taskanme3'
        },{
          id: 4,
          taskname: 'taskanme4'
        },{
          id: 5,
          taskname: 'taskanme5'
        },{
          id: 6,
          taskname: 'taskanme6'
        },{
          id: 7,
          taskname: 'taskanme7'
        },{
          id: 8,
          taskname: 'taskanme8'
        },
        
      ],
      dietqty: '1',
      activeName: "1",
      num: "",
      calloriesSummary: "",
      
    };
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
    list: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addNewItem() {
      let idr = Math.floor(Math.random() * 90);
      console.log(this.tasks);
      this.tasks.push({id:idr, taskname: 'taskname'+idr});

    },
    addNewList() {
      this.$emit("addNewList");
    },
      removeItem: function(id) {
      let oldtasksArrayx = this.tasks;
      oldtasksArrayx = oldtasksArrayx.filter(item => item.id !== id)
      this.tasks = oldtasksArrayx
    },
    removeList() {
      this.$emit("removeList", this.list.id);
    },
  
    addItem(item) {
      const calloriessum = item.num * (item.calories / 100);
      this.calloriesSummary = Math.round(+this.calloriesSummary + calloriessum);
       item.sum = +item.num * +this.dietqty;
               console.log(item.sum)

      this.$emit("addItem", item);

      this.items.push(item);
    }
  }
};
</script>
<style>
p {
  margin: 5px;
}
.calculator {
  width: 25%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0px 15px 0px 15px;
  margin: 20px 10px 20px 10px;
}

.calculator__type {
  min-height: 5%;
  padding: 5px 0px 5px 0px;
  margin: 5px 0px 5px 0px;
  border: 2px solid #409eff;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.diet__qty {
  width: 35px;
  height: 30px;
  padding: 1px;
  text-align: center;
  border: 2px solid #409eff;
  border-radius: 50%;
}
.list__name {
  width: 60%;
}
.calculator__type h1 {
  margin: 0;
}
.diet_qty {
  width: 30px;
  height: 30px;
  border: 2px solid #409eff;
  border-radius: 50%;
}
.calculator__product {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin: 10px 0px 10px 0px;
  padding: 10px 0px 10px 0px;
  border: 1px solid #409eff;
  border-radius: 20px;
}
.product__name {
  width: 40% !important;
}
.product__qty {
  width: 60%;
  border: 2px solid #409eff;
  border-radius: 30px;
}
.addTask__button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>