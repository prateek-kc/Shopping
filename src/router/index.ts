import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import WishList from '../views/WishList.vue';
import Cart from '../views/Cart.vue';
import ProductDetails from '../views/ProductDetails.vue';

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
        else
          return router.replace(Home);
      }
    },
    {
      path:'/Wishlist',
      name:'WishList',
      component:WishList
    },
    {
      path:'/Cart',
      name:'Cart',
      component:Cart
    },
    {
      path:'/Productdetails/:id',
      name:'ProductDetails',
      component: ProductDetails
    }

  ]
})

export default router
