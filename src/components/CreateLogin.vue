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
      <LoginInput   :password='password'/>
      <div>
        <!-- <PasswordValidation  :password='password' :showPassword='showPassword'/> -->
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
      <Button v-on:click.native="Redirect()" />
    </div>
  </div>
</template>
  
<script>

import Button from './Button.vue';
import LoginInput from '../components/component/LoginInput.vue';
// import PasswordValidation from '../components/component/PasswordValidation.vue';

export default {
  components: {
    Button,
    LoginInput,
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
      console.log('redirectTo');
      this.$router.push({ name: 'SetSecurity' })
    },






  },
};
</script>
  
<style>
.main {
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  max-height: max-content;

}

.main h3 {
  font-family: Circular-Medium, Arial, Helvetica, sans-serif !important;
  margin-left: 15px;
  font-size: 32px !important;
  margin-left: 15px;
}

.main input {
  background-color: #ffffff;
  border: 1px solid #f2f2f2 !important;
}

input::placeholder {
  color: #626262;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Circular-Book,Arial,Helvetica,sans-serif';
}

input:focus {
  border: none !important;
}







.inputfieldtoggle {
  width: 450px;
  padding: 20px;
  border: 1px solid rgb(233, 233, 233);
  border-radius: 5px;
  margin: 10px;
  margin-left: 30px !important;
}

.inputfieldtoggle::placeholder {
  font-family: Circular-Book, Arial, Helvetica, sans-serif;
  color: #626262;
  font-size: 14px;
  font-weight: 400 !important;
}

.referheadingdiv h3 {
  font-size: 16px !important;
  margin-bottom: 2px;
  font-family: Circular-Bold;
}



.toggle {
  height: 30px;
  width: 30px;
  position: relative;
}

.fontpassword {
  position: relative;
}

.fontpassword i {
  position: absolute;
  right: 25px;
  top: 40px;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 35px;
}

.radiobutton {
  display: flex;
  margin-right: 170px;
}

.radiobutton label {
  margin-left: 5px;
}

.radiobuttonlabel {
  display: flex;
}

.radiobuttonlabel label {
  font-family: Circular-Book, Arial, Helvetica, sans-serif;
  ;
}



.radiobuttonlabelno {
  display: flex;
  justify-content: space-between;
  margin-left: 160px;
  align-items: center;
}

.radiobuttonlabelno label {
  margin-bottom: 1px;
}

.referheading {
  margin-right: 245px;
}

.para {
  margin-left: 18px;
  margin-top: 10px;
  max-width: 400px;
  font-family: 'Circular-Book,Arial,Helvetica,sans-serif';
}

.para2 {
  margin-left: 35px;
  max-width: 400px;
  font-family: 'Circular-Book,Arial,Helvetica,sans-serif';
}

.passwordvalidation {
  display: flex;
  flex-direction: column;

}

.circle {

  display: flex;
  align-items: center;
}

.faiccon {
  font-size: 25px;
  font-weight: 100;
  color: gray !important;
}

.passwordvalidationlable {
  margin-left: 10px;

  font-family: 'Circular Book', sans-serif;
  font-weight: 100;
  color: grey
}
</style>
  