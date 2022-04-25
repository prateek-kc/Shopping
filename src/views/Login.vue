<template>
    <form novalidate="true">
        <div><h1> Shopping </h1></div>

        <div class="field">
            <label>Email</label>
            <input type="email"  v-model="email" @change="handleEmail" placeholder="Email" required/>
        </div>

        <div v-if="emailError" class="error">
            {{emailError}}
        </div>

        <div class="field">
            <label>Password</label>
            <input type="password"  v-model="pass" @change="handlePass"  placeholder="Password" required/>
        </div>

        <div v-if="passError" class="error">
            {{passError}}
        </div>
        
        <div class="field">
            <button @click="handleClick"  :disabled="handleDisable()" >Login</button>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent ,ref} from "vue";
import {  useRouter } from 'vue-router'

export default defineComponent({
    name:'Login',
    setup(props,context){

        const email = ref<string>('');
        const pass = ref<string>('');
        const emailError = ref<string | null>(null);
        const passError = ref<string | null>(null);
        const router = useRouter();

        function handleEmail(){
            if(email.value === ''){
                emailError.value=null;
                return;
            }
            let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if(regEmail.test(email.value) === false){
                emailError.value='Email is not correct';
            }
            else {
                 emailError.value=null;
            }
        }

       function handlePass(){
            if(pass.value === ''){
                passError.value=null;
                return;
            }
            let regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if(regPass.test(pass.value) === false){
                passError.value="Password is not correct";
            }
            else{
                passError.value=null;
            }
       }

       function handleClick(event:any){
           event.preventDefault();
            if(email.value === '' || pass.value === ''){
                return;
            }
           localStorage.setItem('isLoggedIn','true');
           context.emit('login');
           router.replace('Home');
       }

       function handleDisable(){
           if(emailError.value === null && passError.value === null){
               return false;
           }
           else
           return true;
       }

        return {email,pass,emailError,passError,handleEmail,handlePass,handleClick,handleDisable}
    },
  mounted(){
    localStorage.setItem('isLoggedIn','false'); 
  }
})
</script>

<style scoped>
form{
    margin-top: 100px;
    width: 40%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background-color: #ef7917;
    border-radius: 10px;
}
.error{
    color:black;
    font-weight: bold;
}
.field{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
}
.field input{
    width: 300px;
    height: 30px;
    border-radius: 10px;
    padding: 10px;
    
}
.field label{
    font-size: 20px;
    margin-bottom: 10px;
}
.field button{
    padding: 10px;
    width: 330px;
   font-size: 20px;
   border-radius: 10px;
   margin-top: 10px;
   font-weight: 600;
}
.field button:hover{
    cursor: pointer;
}
</style>

