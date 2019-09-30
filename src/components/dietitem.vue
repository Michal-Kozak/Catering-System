<template>
  <div class="calculator__product">
    <div class="calculator__qty">
                <el-input placeholder="Produkt" 
                v-model="item.value"
                size="small"
                class="product__name"
                
                
                ></el-input>

                    <el-input-number v-model="item.num"  :min="1"  size="small"  ></el-input-number>
                    <el-button 
                    type="success" 
                    icon="el-icon-check" 
                    circle 
                  
                    @click="addItem"
                    
                    ></el-button>
                    </div>
                    <div class="calories">
                       <p>Kaloryczność </p><el-input-number v-model="item.calories"  :min="1"  size="small"  ></el-input-number>
                    
                    </div>
                </div>            
</template>

<script>

  export default {
    data() {
      return {
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
        list: [],
        loading: false,
        states: ["Kurczak", "Cebula", "Pomidor",
        "Ananas", "Jajko", "Marchew", "Wieprzowina", "Wołowina", "Baranina",
        "Brokuł", "Kapusta", "Czosnek", "Por", "Szczypiorek", "Pieprz", "Rukola", "Seler", 
        "Burak", "Papryka", "Sól", "Dynia", "Arbuz", "Rzepa", "Rzodkiewka", "Chrzan", "Trufle", "Pieczarki",]
      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
    },
    methods: {
      addItem() {
      
        
        this.$emit('addItem', this.item);
        
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
</style>