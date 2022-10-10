<template>
  <div class="main">
    <div class="header_section">
      <div class="header_section_content">
        <div>
          <img src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/tiered-alert.svg" />
        </div>
        <div>
          <p class="headerpara">Please enter a valid mobile number so we can send your PIN.</p>
        </div>
      </div>
    </div>
    <div class="subpart">
      <div>
        <div>
          <h3 class="headings">Set up your security</h3>
        </div>
        <div class="subparttext">
          <p>
            To keep your account secure, we sometimes send you a security code.
            Enter the mobile number you’d like us to use.
          </p>
        </div>
      </div>
      <div class="userdetails">
        <div>
          <DropDownFlag/>        </div>
        <div class="userdetailsinput">
          <input type="text" name="number" class="input-container" placeholder="Mobile Number" />
        </div>
      </div>
    </div>

    <div>
      
      <Button 
        
        v-on:click.native="Redirect()"
        buttonLabel='Confirm my mobile'/>
    </div>
  </div>
</template>
  
<script>
import Button from "../atoms/Button.vue";
import DropDownFlag from "../atoms/DropDownFlag.vue";
import '../styles/SetSecurity.css'


export default {
  name: "SetupSecurity",
  components:{
    Button,
    DropDownFlag
},
  methods: {
    Redirect() {
      console.log('redirectTo');
      this.$router.push({ name: 'EnterDetails' })
    }
  }
};
</script>
  

  