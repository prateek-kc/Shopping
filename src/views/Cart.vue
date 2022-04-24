<template>
    <div class="wishlist-container" v-if="result.length !== 0">
        <div v-for="product in result" :key="product" class="product-container">
            <div class="product-left">
                <h1>{{product.name}} </h1>
            </div>
            <div class="product-right">
                <div class="product-details">
                   <span>Rs {{product.price}} </span>
                   <span> {{product.category}}</span>
                </div>

                <div class="delete"> 
                    <font-awesome-icon icon="remove" @click="remove(product.id)"/>
                </div>
            </div>
        </div>
        <div class="price">
            <span><h1>Total Amount: Rs {{total}}</h1></span>
        </div>
    </div>
    <div v-else>
        <h1>No items in Cart</h1>
    </div>
</template>

<script lang="ts">
import {defineComponent,onMounted,onUpdated,ref} from 'vue';
export default defineComponent({
    name:"Cart",
    setup(){
        let list = localStorage.getItem('cart');
        let result= ref<any[]>([]);
        let total = ref<number>(0);
        if(list !== '' && list!== null){
            result.value = JSON.parse(list);
        }
        function remove(id:string){
            let newResult =result.value.filter((product) =>{
                return product.id !== id;
            });

            localStorage.setItem('cart',JSON.stringify(newResult));
            result.value=newResult

            total.value=0;
            result.value.map((item) =>{
                total.value = total.value + item.price;
            })
        }
        onMounted(() =>{
            result.value.map((item) =>{
                total.value=total.value+item.price;
            })
        })
        return {result,remove,total}
    }
})
</script>

<style>
.wishlist-container{
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
}
.product-container{
    border-radius: 20px;
    width: 94%;
    height: 100px;
    margin: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
}
.product-left{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.product-right{
    display: flex;
    width: 78%;
    justify-content: space-between;
}
.product-details{
    display: flex;
    flex-direction: column;
}
.product-details span{
    margin-bottom: 5px;
}
.delete svg{
 font-size: 20px;    
}
.delete svg:hover{
    cursor: pointer;
}
.price{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>