<template>
  <div class="card-container" >
      <div class="card-top" @click="handleClick(item)">
         <h1>{{item.name}} </h1>
      </div>
      <div class="card-bottom">
          <div class="card-bottom-price">
             Rs {{item.price}}
          </div>
          <div class="card-bottom-icons">
              <font-awesome-icon icon="plus" @click="handleWish(item)"/>
              <font-awesome-icon icon="cart-shopping"  @click="handleCart(item)" />  
          </div>
      </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import ProductDetails from "./ProductDetails.vue";

export default defineComponent({
    name:"Card",
    props:["item"],

    setup(props){

        let wish = new Array();
        let cart = new Array();
        const router = useRouter();
        function handleWish(item:any){
            let curr = localStorage.getItem('wishlist');
            if(curr!=='' && curr!==null){
               var obj = JSON.parse(curr);
              for(let i=0;i<obj.length;i++){
                  if(obj[i].id === item.id){
                      return;
                  }
              }
               wish.push(...obj,item);
            }
            else
                wish.push(item);
            localStorage.setItem('wishlist',JSON.stringify(wish));
        }

        function handleCart(item:any){
            let curr = localStorage.getItem('cart');
            console.log("curr"+" "+curr);
            if(curr !== '' && curr !== null){
               var obj = JSON.parse(curr);
                for(let i=0;i<obj.length;i++){
                  if(obj[i].id === item.id){
                      return;
                  }
              }
               cart.push(...obj,item);
            }
            else
                cart.push(item);
            localStorage.setItem('cart',JSON.stringify(cart));
        }

        function handleClick(item:any){
            const id = item.id;
            router.push({
                name:'ProductDetails',
                params:{
                    id:id,
                    
                }
            });
        }

        return {handleWish, handleCart,handleClick}
    }
})


</script>

<style>

.card-container{
    width: 200px;
    height: 200px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius:20px;
    margin: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
     background-color: #ef7917;
}

.card-container:hover{
    transform: scale(1.2);
}
.card-top{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75%;
}
.card-top:hover{
    cursor: pointer;
}
.card-bottom{
    display: flex;
    justify-content: space-between;
    padding: 2px;
    
}
.card-bottom-icons svg{
    margin-right: 10px;
    margin-left:20px;
    font-size: 18px;
}
.card-bottom-icons svg:hover{
    cursor: pointer;
}

</style>