import Vue from 'vue'
import App from './App.vue'
import 'vue-search-select/dist/VueSearchSelect.css';
import router from './router'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import './font.css'


    
Vue.use(VueRouter);

new Vue({
   router,
   vuetify,
   render: h => h(App)
}).$mount('#app')
