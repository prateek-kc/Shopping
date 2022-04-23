import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
        
    },
    {
      path:'/',
      name:'Login',
      component: function(){
        if(localStorage.getItem('isLoggedIn') === 'false'){
          return Login;
        }
      }
    }

  ]
})

export default router
