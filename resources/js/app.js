require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import router from './routes';

import VCharts from 'v-charts'

Vue.use(VueRouter);
Vue.use(VCharts);
// Vue.component('example-component', require('./components/ExampleComponent.vue'));


const app = new Vue({
    el: '#app',
    router,
});
