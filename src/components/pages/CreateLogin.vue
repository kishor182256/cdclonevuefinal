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
      <LoginInput :password='password'/>
      <div>
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
      <Button v-on:click.native="Redirect()">{{buttonLabel="Continue"}}</Button>
    </div>
  </div>
</template>
  
<script>



// 

import LoginInput from "../molecules/LoginInput.vue";
import Button from "../atoms/Button.vue";
// import CommonInputField from "../atoms/CommonInputField.vue";
import '../styles/CreateLogin.css'

export default {
  components: {
    LoginInput,
    Button,
    // CommonInputField
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
  
