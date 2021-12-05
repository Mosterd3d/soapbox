
require('./bootstrap');

import Vue from  'vue';
import VueRouter from "vue-router";

import router from './Router/index';
import store from './Store/index';
import App from './App.vue'

Vue.use(VueRouter)

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {App}
})



//
//
//
//
// window.Vue = require('vue').default;
//
// /**
//  * The following block of code may be used to automatically register your
//  * Vue components. It will recursively scan this directory for the Vue
//  * components and automatically register them with their "basename".
//  *
//  * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
//  */
//
// // const files = require.context('./', true, /\.vue$/i)
// // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
//
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('product-create-form', require('./components/products/ProductCreateForm.vue').default);
// Vue.component('product-list', require('./components/products/ProductList.vue').default);
// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */
//
// const app = new Vue({
//     el: '#app',
// });
