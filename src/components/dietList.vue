    
<template>
    <div class="calculator">
        <div class="calculator__row">
            <div class="calculator__type">
            <div class="diet_qty">
            </div>
           <h1>1500KCAL</h1>
            </div>
            <dietitem> </dietitem>
        </div>
         
           <div class="calculator__row">
            <div class="calculator__type">
            <div class="diet_qty">
            </div>
           <h1>1500KCAL</h1>
            </div>
            <dietitem> </dietitem>
        </div>
          <div class="calculator__row">
            <div class="calculator__type">
            <div class="diet_qty">
            </div>
           <h1>1500KCAL</h1>
            </div>
            <dietitem> </dietitem>
        </div>
    </div>
</template>


<script>
import dietitem from './dietitem.vue'
  export default {
     components: {
    dietitem,
  },
  }
 
</script>
<style>
p{
    margin: 5px;
}
.calculator{
    width: 100%;
    height: 100vh;
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
    border: 1px solid grey;
    border-radius: 30px;
    display: flex;
    justify-content: space-around;
    align-items:center;
  
}
.calculator__type h1{
    margin: 0;
}
.diet_qty{
    width: 30px;
    height: 30px;
    border: 1px solid grey;
    border-radius: 50%;
        

}
.calculator__product{
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 10px 0px 10px 0px;  
    padding: 10px 0px 10px 0px;
    border: 1px solid grey;
    border-radius: 20px;
    
}
.product__name{
    width: 40%;

    
}
.product__qty{
    width: 60%;
    border: 1px solid grey;
    border-radius: 30px;
   
}

</style>