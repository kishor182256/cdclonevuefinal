<script>
import PasswordValidation from "./PasswordValidation.vue";
import CommonInputField from "../atoms/CommonInputField.vue";
import '../styles/subcomponents/LoginInput.css'

export default {
    name: "LoginInput",
   
    data() {
        return {
            showPassword: false,
            password:'',

            props: {
                // password: String,
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
    },
    components: { PasswordValidation, CommonInputField }
}
</script>
  
  
<template>
    <div class="inputfield">
        <div>
            <CommonInputField Value="text" name="name" placeholder="First and middle names" /><br />
        </div>
        <div>
            <CommonInputField Value="text" name="lastname" placeholder="Last name" />
        </div>

        <div>
            <div>
                <CommonInputField Value="email" name="email" placeholder="Email Adress" />
            </div>

            <div class="fontpassword">
                <CommonInputField v-if="showPassword" Value="text" class="input" v-model="password" placeholder="Password" />

                <CommonInputField v-else Value="password" class="input" v-model="password" placeholder="Password" />

                <i @click="toggleShow" class="fas fontpassword"
                    :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i>
            </div>

        </div>

        <PasswordValidation :password='password'/>

    </div>
</template>
  
  
