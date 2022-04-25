<template>

<div class="home-container">
     <div v-for="item in shopdata" :key="item">
        <Card :item="item" />
    </div>
    <div v-if="err">
        <h2> {{err}} </h2>
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
        let err = ref<string>('');
        onMounted(() =>{
                fetch('http://localhost:4000/products')
                .then(res =>{
                    if(res.ok){
                        return res.json();
                    }
                    throw new Error(res.statusText);
                })
                .then(data =>{
                    shopdata.value = data;
                })
               .catch(error =>{
                   err.value=error
               })
        })
        return {shopdata,err}
    }
})
</script>

<style scoped>
.home-container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 20px;
}
</style>