import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './components/login.vue'
import pageone from './components/pageone.vue'
import aboutpage from './components/aboutpage.vue'
import hobby from './components/hobby.vue'
import contact from './components/contact.vue'
Vue.use(VueRouter);
export default new VueRouter({
    routes:[
        {path:'/',component:login},
        {path:'/pageone',component:pageone},
        {path:'/aboutpage',component:aboutpage},
        {path:'/hobby',component:hobby},
        {path:'/contact',component:contact},
    ]
})