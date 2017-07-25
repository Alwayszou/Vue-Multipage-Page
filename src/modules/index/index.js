import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routers'
import App from './index.vue'


Vue.use(VueRouter);
Vue.use(VueResource);

// const router = new VueRouter({
//     routes
// });

new Vue({
    el: "#app",
    render: h => h(App),
    // router
});