<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './views/Navbar.vue'

export default defineComponent({
    name: "App",
    setup() {
    },
    components: { Navbar }
})


</script>

<template>

  <Navbar />

  <main>
    <RouterView />
  </main>

</template>

<style>
body{
  margin: 0;
  padding: 0;
}

main{
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}


</style>
