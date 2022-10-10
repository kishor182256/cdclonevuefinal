<template>
  <div class="main">
    <div>
      <h3>Create your login</h3>
      <p class="para">
        It only takes a couple of minutes to create an account. Get started by
        entering your email address and a memorable password
      </p>
    </div>
    <div class="inputfield">
      <LoginInput :password='password' />
      <div>
        <div class="passwordvalidationdiv">
          <p>Your password must contain:</p>
          <div class="passwordvalidation">
            <div class="circle">
              <i class="fa fa-genderless faiccon"  v-if=!password.match(/.{8,}/)> </i>
              <i class="fa fa-check faiccons" v-if=password.match(/.{8,}/)> </i>
              <p class="passwordvalidationlable">at least 8 characters</p>
            </div>
            <div class="circle">
              <i class="fa fa-genderless faiccon" v-if=!password.match(/[0-9]/)></i>
              <i class="fa fa-check faiccons" v-if=password.match(/[0-9]/)></i>
              <p class="passwordvalidationlable">at least 1 number</p>
            </div>
            <div class="circle">
              <i class="fa fa-genderless faiccon" v-if=!password.match(/[a-z]/)></i>
              <i class="fa fa-check faiccons" v-if=password.match(/[a-z]/)></i>
              <p class="passwordvalidationlable">a lower case character</p>
            </div>
            <div class="circle">
              <i class="fa fa-genderless faiccon" v-if=!password.match(/[A-Z]/)></i>
              <i class="fa fa-check faiccons" v-if=password.match(/[A-Z]/)></i>
              <p class="passwordvalidationlable">a upper case character</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="referheadingdiv">
      <h3 class="referheading">Were you referred to us?</h3>
    </div>
    <div class="radiobutton">

      <div class="radiobuttonlabel">
        <div><input type="radio" name="radio" :value="false" v-model="websiteAccept" /></div>
        <label>No</label>
      </div>
      <div class="radiobuttonlabelno">
        <div class="radiobuttonlabel"><input type="radio" name="radio" :value="true" v-model="websiteAccept" />
          <label>Yes</label>
        </div>

      </div>

    </div>




    <div v-if="websiteAccept">
      <p class="para2">Please enter your referral code, or the name of the person who referred you.</p>
      <input type="text" class="inputfieldtoggle" placeholder="Enter Code" />
    </div>

    <div>
      <Button v-on:click.native="Redirect()" buttonLabel="Continue"></Button>
    </div>
  </div>
</template>
  
<script>



// 

import LoginInput from "../molecules/LoginInput.vue";
import Button from "../atoms/Button.vue";
// import PasswordValidation from "../molecules/PasswordValidation.vue";

import '../styles/CreateLogin.css'
import '../styles/subcomponents/passwordvalidation.css'

export default {
  components: {
    LoginInput,
    Button,
    // PasswordValidation
},
  data() {
    return {
      websiteAccept: null,
      password: "",
    };

  },


  methods: {

    Redirect() {
      console.log('redirectTo',);
      this.$router.push({ name: 'SetSecurity' })
    },

  },
};
</script>
  
