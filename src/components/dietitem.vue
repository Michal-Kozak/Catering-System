<template>
  <div class="calculator__product">
                 <el-select 
                  size="small"
                class="product__name"
                v-model="item.value"
                filterable
                required
                remote
                reserve-keyword
                placeholder="Składnik"
                :remote-method="remoteMethod"
                :loading="loading"
                 loading-text="ladowanie"
                 no-match-text="Brak produktów"
                 no-data-text="Brak produktów"
                >
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
                  
            </el-select>             
                    <el-input-number v-model="item.num"  :min="1"  size="small" ></el-input-number>
                    <el-button 
                    type="success" 
                    icon="el-icon-check" 
                    circle 
                    @click="addItem"
                    ></el-button>
                </div>            
</template>

<script>

  export default {
    data() {
      return {
        item: {
                    value: '',
                    num: '1',
                   
                },
        num: 1,
        input: '',
        options: [],
        value: [],
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

</style>