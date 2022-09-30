<template>
  <div class="main">
    <div>
      <h1>Create your login</h1>
      <p class="para">
        It only takes a couple of minutes to create an account. Get started by
        entering your email address and a memorable password
      </p>
    </div>

    <div class="inputfield">
      <div>
        <input type="text" name="name" placeholder="First and middle names" /><br />
      </div>
      <div>
        <input type="text" name="lastname" placeholder="Last name" />
      </div>

      <div>
        <div>
          <input type="email" name="email" placeholder="Email Adress" />
        </div>

        <div class="fontpassword">
          <input v-if="showPassword"
           type="text" class="input"
            v-model="password"
          
             placeholder="Password"/>

          <input v-else type="password" class="input" v-model="password" placeholder="Password" />
          
          <i @click="toggleShow" class="fas fontpassword"
            :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i>
        </div>
       

        <div class="passwordvalidationdiv">
          <p>Your password must contain:</p>
          <div class="passwordvalidation">
            <div class="circle">
              <i class="fa fa-genderless faiccon" v-if=!password.match(/.{8,}/) > </i>
              <i class="fa fa-check faiccons" v-if=password.match(/.{8,}/) > </i>
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
              <i class="fa-solid fa-check faiccons" v-if=password.match(/[A-Z]/)></i>
              <p class="passwordvalidationlable">a upper case character</p>
            </div>
          </div>
        </div>

        <!--  -->

      </div>
    </div>
    <div class="referheadingdiv">
      <h3 class="referheading">Were you referred to us?</h3>
    </div>
    <div class="radiobutton">

      <div class="radiobuttonlabel">
        <div><input type="radio" name="radio" :value="false" v-model="websiteAccept" /></div>
        <label class="radiobuttonlabel">No</label>
      </div>
      <div class="radiobuttonlabelno">
        <div class="radiobuttonlabel"><input type="radio" name="radio" :value="true" v-model="websiteAccept" /></div>
        <label class="radiobuttonlabel">Yes</label>
      </div>

    </div>




    <div v-if="websiteAccept">
      <p class="para2">Please enter your referral code, or the name of the person who referred you.</p>
      <input type="text" class="inputfieldtoggle" placeholder="Enter Code" />
    </div>

    <div><button type="button" @click="Redirect()" name="save" value="Save" class="accountbutton">
        Continue
      </button></div>
  </div>
</template>
  
<script>


export default {



  data() {
    return {
      websiteAccept: null,
      password: "",
      checkPassword: "",
      passwordVisible: false,
      submitted: false,
      showPassword: false,
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

.main h1 {
  font-family: 'Circular-Medium,Arial,Helvetica,sans-serif';
  margin-left: 10px;
  font-size: 32px;
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

.faiccons{
  color:#00aa5e !important;
  border:1px solid #00aa5e;
  border-radius:50%;
 padding: 0.5px;
font-weight: 100;
  background-color: #ffffff;
}






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

.inputfieldtoggle {
  width: 400px;
  padding: 20px;
  border: 1px solid rgb(233, 233, 233);
  border-radius: 5px;
  margin: 15px;
}

.referheadingdiv {
  /* margin-left: 100px; */
}

.referheadingdiv h3 {
  font-size: 16px !important;
  margin-bottom: 2px;
  font-family: Circular-Bold;
}

.accountbutton {
  height: 50px;
  width: 480px;
  border-radius: 25px;
  border: none;
  color: #ffffff;
  background: linear-gradient(95deg, #f03ea6 4.1%, #ff6b00 95.1%, #f03ea6 200%);
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: bolder;
  opacity: 0.8;
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

.radiobuttonlabelno {
  display: flex;
  justify-content: space-between;
  margin-left: 160px;
}

.referheading {
  margin-right: 245px;
}

.para {
  margin-left: 18px;
  max-width: 400px;
  font-family: 'Circular-Book,Arial,Helvetica,sans-serif';
}

.para2 {
  margin-left: 10px;
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

.passwordvalidationdiv {
  margin-left: 18px;
  font-family: 'Circular-Medium,Arial,Helvetica,sans-serif';

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
  