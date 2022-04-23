<template>

<div class="home-container">
     <div v-for="item in shopdata" :key="item">
        <Card :shopdata="shopdata" />
    </div>
</div>

</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, watch,ref } from "vue";
import Login from './Login.vue';
import Card from './Card.vue';

export default defineComponent({
    name:"Home",
    components:{Login,Card},
    setup(){
        let shopdata=ref<any[]>([]);
        let ready= ref<boolean>(false);

        onMounted(() =>{
            fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data =>{

                shopdata.value = data;
                ready.value=true;
            })
        })
        return {shopdata,ready}
    }
})
</script>

<style scoped>
.home-container{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
}
</style>