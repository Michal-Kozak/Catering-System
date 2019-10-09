import './firebase';
import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import { rtdbPlugin } from 'vuefire'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import productlist from './components/productslist.vue'
import board from './components/board.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(rtdbPlugin)
Vue.use(firestorePlugin)
const routes = [
  { path:'/productlist', component: productlist },
  { path:'/', component: board },
];
const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

