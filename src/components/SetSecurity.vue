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
      
      <Button  v-on:click.native="Redirect()"/>
    </div>
  </div>
</template>
  
<script>
import Button from './Button.vue';
import DropDownFlag from './DropDownFlag.vue';

export default {
  name: "SetupSecurity",
  components:{
    Button,
    DropDownFlag
},
  methods: {
    Redirect() {
      console.log('redirectTo');
      this.$router.push({ name: 'SetPreference' })
    }
  }
};
</script>
  
<style>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
  flex-direction: column;
}





.headings{
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  font-weight: 300;
}

.header_section_content {
  margin-left: 10px;
  display: flex;
  align-items: center;
  max-width: 100%;
}

.header_section_content p {
  padding: 10px;
  margin: 5px;
}

.subpart {
  max-width: 30%;
  margin: 20px;
}

.subparttext {
  margin-top: 15px;
  margin-left: 20px;
}

.subparttext p{

}

.userdetails {
  display: flex;
  margin-top: 20px;
  align-items: center;
}

.userdetails input {
  background-color: #ffffff;
  
}

.userdetailsinput{
  height: -22px;
}



.input-container {
  width: 400px;
  padding: 20px;
  border: 1px solid rgb(233, 233, 233);
  border-radius: 5px;
  margin: 15px;
  width: 80%;
}

.userdetails select {
  width: 100%;
  padding: 5px;
  border: 1px solid rgb(233, 233, 233);
  border-radius: 5px;
  margin: 15px;
  width: 80%;
  height: 60%;
}



.headerpara{
  font-family: Circular-Book,Arial,Helvetica,sans-serif;
  font-size: 14px;
}
</style>
  