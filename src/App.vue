<script lang="ts">
import { defineComponent, onMounted , ref} from 'vue'
import Navbar from './views/Navbar.vue'

export default defineComponent({
    name: "App",
    setup() {
      let ready = ref<boolean>(false);
      let loggedin = localStorage.getItem('isLoggedIn');
      if(loggedin === 'true'){
          ready.value=true
      }
     function handleLogin(){
       ready.value=true;
     }
     function handleLogout(){
       ready.value=false;
     }
     return {handleLogin,ready,handleLogout}
    },
    components: { Navbar }
})
</script>

<template>
  <Navbar :ready="ready" @logout="handleLogout" />
  <main>
    <RouterView @login="handleLogin"/>
  </main>
</template>

<style>
body{
  margin: 0;
  padding: 0;
  background-color: wheat;
}
main{
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
