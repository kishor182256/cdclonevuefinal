<script>
import PasswordValidation from "./PasswordValidation.vue";
import CommonInputField from "../atoms/CommonInputField.vue";
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
  
  
<style>

.inputfield {
  padding: 10px;
}

.inputfield input {
  width: 400px;
  padding: 20px;
  border: 1px solid rgb(233, 233, 233);
  border-radius: 5px;
  margin: 15px;
}

.inputfield input::placeholder {
  font-family: Circular-Book, Arial, Helvetica, sans-serif;
  color: #626262;
  font-size: 14px;
  font-weight: 400 !important;
}

</style>