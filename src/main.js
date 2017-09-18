import Vue from 'vue';
import App from './App.vue';
import Row from './Component/Row.vue';
import Cell from './Component/Cell.vue';
import Control from './Component/Control.vue';

Vue.component('row', Row);
Vue.component('cell', Cell);
Vue.component('control', Control);

window.app = new Vue({
    el: '#app',
    render: h => h(App)
});
