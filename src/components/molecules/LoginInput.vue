<script>
// import PasswordValidation from "./PasswordValidation.vue";
import InputField from "../atoms/InputField.vue";
import '../styles/subcomponents/LoginInput.css'

export default {
    name: "LoginInput",
   
    data() {
        return {
            showPassword: false,
         

            props: {
               password: {
                type:String,
               }
            },
        };
    },
    computed: {
        buttonLabel() {
            return this.showPassword ? "Hide" : "Show";
        },
    },
    methods: {
        toggleShow() {
            this.showPassword = !this.showPassword;
        },
        change() {
            console.log("change",this.password);
        }
    },
    components: {  InputField }
}
</script>
  
  
<template>
    <div class="inputfield">
        <div>
            <InputField Value="text" name="name" placeholder="First and middle names" /><br />
        </div>
        <div>
            <InputField Value="text" name="lastname" placeholder="Last name" />
        </div>

        <div>
            <div>
                <InputField Value="email" name="email" placeholder="Email Adress" />
            </div>

            <div class="fontpassword">
                <InputField v-if="showPassword"
                 Value="text" class="input"
            
                  v-model="password" placeholder="Password" />

                <InputField 
                 v-else Value="password" 
                 @change="change"
                 class="input" v-model="password"
                  placeholder="Password" />

                <i @click="toggleShow" class="fas fontpassword"
                    :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i>
            </div>

        </div>

        <!-- <PasswordValidation :password='password'/> -->

    </div>
</template>
  
  
