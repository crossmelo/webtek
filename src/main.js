// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/css/base.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/js/flexible.js'
import router from './router'
import store from './store.js'
import FastClick from 'fastclick'
import common from './util/util.js'
import tgapi from './telegram/index.js'

Vue.use(MintUI);

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.prototype.common = common;
Vue.prototype.api = tgapi;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})