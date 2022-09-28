<template>
    <div class="main">
      <div class="header_section">
        <div class="header_section_content">
          <div>
            <img
              src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/tiered-alert.svg"
            />
          </div>
          <div>
            <p>Please enter a valid mobile number so we can send your PIN.</p>
          </div>
        </div>
      </div>
      <div class="subpart">
        <div><div><h3>Set up your security</h3></div>
        <div>
          <p>
            To keep your account secure, we sometimes send you a security code.
            Enter the mobile number you’d like us to use.
          </p>
        </div></div>
        <div class="userdetails">
          <div class="userdetailsselect" ><Select>
              <option>Country Code</option>
               </Select></div>
          <div>
            <input type="text" name="number" class="input-container"
             placeholder="Mobile Number" />
          </div>
        </div>
      </div>
  
      <div>
        <button type="button" name="save"
        @click="Redirect()"
         value="Save"
         class="accountbutton">
          Continue
        </button>
      </div>
    </div>
  </template>
  
  <script>
   
  export default {
    name: "SetupSecurity",
    methods: {
        Redirect(){
            console.log('redirectTo');
            this.$router.push({name:'SetPreference'})
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
  
  .header_section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    margin-top: 60px;
    box-shadow: 0px 0px 16px rgb(0 0 0 / 10%);
    height: 100%;
    min-height: 60px;
    border-radius: 4px;
    background-color: #ffffff;
    /* background-image: url('http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/tiered-alert.svg');  */
    background-repeat: no-repeat;
    background-position: 15px center;
    border-left: 5px solid #fa4d56;
    color: #626262;
    font-family: "Times New Roman", Times, serif;
    max-width: 100%;
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
    max-width: 50%;
  }
  
  .userdetails{
      display: flex;
      /* justify-content: space-between; */
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
  
  .input-container{
      width: 400px;
    padding: 20px;
    border: 1px solid rgb(233, 233, 233);
    border-radius: 5px;
    margin: 15px;
    width: 80%;
  }
  
  .userdetails select{
    width:100%;
    padding: 5px;
    border: 1px solid rgb(233, 233, 233);
    border-radius: 5px;
    margin: 15px;
    width: 80%;
    height: 60%;
  }
  
  .userdetailsselect{
      width: 55%;
  }
  
  
  </style>
  