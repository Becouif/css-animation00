import { createApp } from 'vue';

// after installing vue router we add this import then use vue router 
// for it to work i need to add  router-view in app.vue 
import {createRouter, createWebHistory} from "vue-router";

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: AllUsers},
    {path: '/goals', component: CourseGoals}
  ]
});

const app = createApp(App);

app.component('base-modal', BaseModal);



app.use(router);
// to prevent the router transitioning when just loaded 
// use router 
//  is ready return a promise inside the function that will be when we ill mount our app 
// i.e when router is ready now mount all app for me 
router.isReady().then(function(){
  app.mount('#app');
});



