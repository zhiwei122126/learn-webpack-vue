
import '@babel/polyfill'

import Vue from "vue"
import App from './app.vue';


let vue_obj = new Vue({
    el: '#app',
    render: h => h(App)
})

console.log("hello world");
