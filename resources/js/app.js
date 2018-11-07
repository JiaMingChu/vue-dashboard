require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import router from './routes';

import VCharts from 'v-charts';
import 'vue-easytable/libs/themes-base/index.css'
import {VTable,VPagination} from 'vue-easytable'

Vue.use(VueRouter);
Vue.use(VCharts);
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)

const app = new Vue({
    el: '#app',
    router,
});
