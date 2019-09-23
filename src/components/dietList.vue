    
<template>
    <div class="calculator">
        
        <div class="calculator__row">
            
            <div class="calculator__type">
                  
                <div class="list__name" contenteditable="true">
           <h1>1500KCAL</h1>
                </div>
           <div >
               <el-button type="primary" icon="el-icon-edit" circle></el-button>
                <el-button type="danger" icon="el-icon-delete" circle></el-button>
                <el-button type="primary" icon="el-icon-plus" circle></el-button>
            </div>
            </div>

            <dietitem
             @addItem="addItem($event)"
             > </dietitem>
             <dietitem
             @addItem="addItem($event)"
             > </dietitem>
             <dietitem
             @addItem="addItem($event)"
             > </dietitem>
             <dietitem
             @addItem="addItem($event)"
             > </dietitem>
             <dietitem
             @addItem="addItem($event)"
             > </dietitem>

             
             <div class="addTask__button">
              <el-button type="primary" icon="el-icon-plus" round style="width:60%;"></el-button>
              </div>
            
        </div>

        <div class="calculator__row">
            
            <div class="calculator__type">
                  
                <div class="list__name">
           <h1>1500KCAL</h1>
                </div>
           <div >
               <el-button type="primary" icon="el-icon-edit" circle></el-button>
                <el-button type="danger" icon="el-icon-delete" circle></el-button>
                <el-button type="primary" icon="el-icon-plus" circle></el-button>
            </div>
            </div>

            <dietitem
             @addItem="addItem($event)"
             > </dietitem>
             <dietitem
             @addItem="addItem($event)"
             > </dietitem>
             <dietitem
             @addItem="addItem($event)"
             > </dietitem>
             <dietitem
             @addItem="addItem($event)"
             > </dietitem>
             <dietitem
             @addItem="addItem($event)"
             > </dietitem>
             
             <div class="addTask__button">
              <el-button type="primary" icon="el-icon-plus" round style="width:60%;"></el-button>
              </div>
            
        </div>

        <div class="calculator__row">
            
            <div class="calculator__type">
                  
                <div class="list__name">
           <h1>1500KCAL</h1>
                </div>
           <div >
               <el-button type="primary" icon="el-icon-edit" circle></el-button>
                <el-button type="danger" icon="el-icon-delete" circle></el-button>
                <el-button type="primary" icon="el-icon-plus" circle></el-button>
            </div>
            </div>

            <dietitem
             @addItem="addItem($event)"
             > </dietitem>
             <dietitem
             @addItem="addItem($event)"
             > </dietitem>
             <dietitem
             @addItem="addItem($event)"
             > </dietitem>
             <dietitem
             @addItem="addItem($event)"
             > </dietitem>
             <dietitem
             @addItem="addItem($event)"
             > </dietitem>
             
             
             <div class="addTask__button">
              <el-button type="primary" icon="el-icon-plus" round style="width:60%;"></el-button>
              </div>
            
        </div>
 
        
         
    </div>
    
</template>


<script>
import dietitem from './dietitem.vue'
  export default {
     components: {
    dietitem,
  },
  methods: {
      addItem(item) {
      this.$emit('addItem', item); 
    },
    }
  }
 
</script>
<style>
p{
    margin: 5px;
}
.calculator{
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.calculator__row{  
    width: 30%;
    display: flex;
    flex-direction: column;
    margin: 0px 15px 0px 15px;
}
.calculator__type{
    height: 5%;
    padding: 5px 0px 5px 0px;
    margin:5px 0px 5px 0px;
    border: 2px solid #409EFF;
    border-radius: 30px;
    display: flex;
    justify-content: center ;
    align-items:center;
  
}
.diet__qty{
    width: 35px;
    height: 30px;
    padding: 1px;
    text-align: center;
    border: 2px solid #409EFF;
    border-radius: 50%;
}
.list__name{
    width: 60%;
}
.calculator__type h1{
    margin: 0;
}
.diet_qty{
    width: 30px;
    height: 30px;
    border: 2px solid #409EFF;
    border-radius: 50%;
        

}
.calculator__product{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 10px 0px 10px 0px;  
    padding: 10px 0px 10px 0px;
    border: 1px solid #409EFF;
    border-radius: 20px;
    
}
.product__name{
    width: 40%;

    
}
.product__qty{
    width: 60%;
    border: 2px solid #409EFF;
    border-radius: 30px;
   
}
.addTask__button{
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>