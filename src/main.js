import './firebase';
import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import { rtdbPlugin } from 'vuefire'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(rtdbPlugin)
Vue.use(firestorePlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')

