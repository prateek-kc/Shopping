<template>

    <nav>

        <div class="nav-left">
            <h1>Shopping</h1>
        </div>

        <div class="nav-right">
            <RouterLink to="/Wishlist">Wishlist</RouterLink>
            <RouterLink to="/Cart">Cart</RouterLink>
            <RouterLink to="/Login">Logout</RouterLink>
        </div>

    </nav>
  
</template>

<script lang="ts">
import  { defineComponent } from "vue";

export default  defineComponent({
    name:'Navbar',

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
    color: black;
}

.nav-left{
    margin-left: 20px;
}

</style>