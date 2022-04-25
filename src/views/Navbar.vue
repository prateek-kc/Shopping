<template>
    <nav>
        <div class="nav-left" v-if="ready">
            <RouterLink to="/Home"><h1>Shopping</h1> </RouterLink>
        </div>
        <div v-else class="nav-left">
            <h1>Shopping</h1>
        </div>
        <div class="nav-right" v-if="ready">
            <RouterLink to="/Wishlist"><font-awesome-icon icon="heart"  /></RouterLink>
            <RouterLink to="/Cart"><font-awesome-icon icon="cart-shopping"  /></RouterLink>
            <RouterLink to="/" @click="handleClick">Logout</RouterLink>
        </div>
    </nav>
</template>

<script lang="ts">
import router from "@/router";
import  { defineComponent , ref} from "vue";

export default  defineComponent({
    name:'Navbar',
    props:['ready'],
    setup(props,context){
        function handleClick(){
            localStorage.setItem('isLoggedIn','false');
            context.emit('logout');
            router.replace('/')
        }
        return {handleClick};  
    }
})
</script>

<style>
nav{
    height: 50px;
    border-bottom-left-radius:30px ;
    border-bottom-right-radius: 30px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #6200ee;
}
.nav-right{
    display: flex;
    justify-content: space-around;
    width: 15%;
    margin-right:20px;
    font-size: 20px;
    text-decoration: none;
}
.nav-right a{
    text-decoration: none;
   color: white;
   font-weight: bold;
}
.nav-left{
    margin-left: 20px;
    color: white;
}
.nav-left a{
    text-decoration: none;
    color: white;
}
</style>