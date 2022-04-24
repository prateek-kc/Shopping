<template>
<div class="product-details-container">

    <div class="product-detail" v-if="ready">
        <div class="product-details-left">
            <h1>{{product.name}}</h1>
        </div>
        <div class="product-details-right">
            <span>Price: Rs {{product.price}}</span>
            <span>Category: {{product.category}}</span>
        </div>
    </div>

</div>
  
</template>

<script lang="ts">
import { defineComponent, onMounted , ref} from "vue"
import { useRoute, useRouter } from "vue-router"

export default defineComponent({
    name:"ProductDetails",
    setup(){
        const route = useRoute();
        let ready = ref<boolean>(false);
        let product= ref<any>({});
        let id = route.params.id;

        async function fetchdata(){
            const res = await fetch('http://localhost:4000/products');
            const data = await res.json();
            for(let i=0;i<data.length;i++){
                if(data[i].id === id){
                    product.value = data[i];
                    ready.value=true
                    break;
                }
            }
        }
        fetchdata();
        return {product,ready};
    }
})
</script>

<style scoped>
.product-details-container{
    width: 60%;
    display: flex;
    padding: 20px;
    height: auto;
}
.product-detail{
    display: flex;
    width: 95%;
    height: 100px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    align-items: center;
    padding: 20px;
    border-radius:10px ;
}
.product-details-left{
    width: 20%;
}
.product-details-right{
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left:20px ;
}
</style>