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
    
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      
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
                    <div class="calories">
                       <p>Kaloryczność </p><el-input-number v-model="item.calories"  :min="1"  size="small"  ></el-input-number>
                    
                    </div>
                </div>            
</template>

<script>

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
      this.disabled = true;
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