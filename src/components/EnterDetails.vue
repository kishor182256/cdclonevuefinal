<template>
  <div class="main">
    <div class="subpart">
      <div>
        <div><h3>Enter your details</h3></div>
        <div class="infotext">
          <p>
            To create your account, we need to verify your identity. Your
            details are safe and we never share them.
          </p>
        </div>
      </div>
      <div class="userdetails">
        <div class="userdetailsselect">
          <vue-country-code class="userdetailsselect"
                  @onSelect="onSelect"></vue-country-code>
        </div>
      </div>
      <div>
        <CommonInputField
          Value="number"
          class="input-container"
          placeholder="Start Typing your Adress Here"
        />
      </div>
      <div>
        <p>Enter address manually</p>
      </div>
      <div>
        <CommonInputField
        Value="text"
          name="number"
          class="input-container"
          placeholder="Adress Line 1"
        />
      </div>
      <div>
        <CommonInputField
        Value="text"
          name="number"
          class="input-container"
          placeholder="Town/City"
        />
      </div>
      <div>
        <CommonInputField
        Value="text"
          name="number"
          class="input-container"
          placeholder="Country(optional)"
        />
      </div>
      <div>
        <CommonInputField
        Value="text"
          name="number"
          class="input-container"
          placeholder="Post Code"
        />
      </div>
    </div>

    <div class="birthdetailsmain"><p>Date of birth</p>
    <div class="birthdetails" >
      
      <div >
        <CommonInputField
        Value="text"
          name="number"
          class="input-container"
          placeholder="DD"
        />
      </div>
      <div>
        <CommonInputField
         Value="text"
          name="number"
          class="input-container"
          placeholder="MM"
        />
      </div>
      <div>
        <CommonInputField
          Value="text"
          name="number"
          class="input-container"
          placeholder="YYYY"
        />
      </div>
    </div></div>

   
        <div class="userdetailsselect">
          <model-select :options="options"
          class="userdetailsselect"
                                v-model="item"
                                placeholder="Occupation">
         </model-select>
       
              </div>

        <div>
            <p>Why do we need this?</p>
            <div>
                <p>We have to ask you this to comply with financial regulations.</p>
            </div>
        </div>
    

    <div>
      <button type="button" name="save"
       @click="redirectTo()"
       value="Save" class="accountbutton">
        Continue
      </button>
    </div>
  </div>
</template>

<script>
   import Vue from "vue";
   import VueCountryCode from "vue-country-code-select";
   import { ModelSelect } from 'vue-search-select'
import CommonInputField from "./atoms/CommonInputField.vue";
   


Vue.use(VueCountryCode);
    export default {
    name: "EnterDetails",
    
    data(){
        return{
          options: [
          { value: '1', text: 'Accountant' },
          { value: '2', text: 'Architect' },
          { value: '3', text: 'Banker' },
          { value: '4', text: 'Builder' },
          { value: '5', text: 'Buyer' }
        ],
        }
    },
   
    methods: {
        onSelect({ name, iso2, dialCode }) {
            console.log(name, iso2, dialCode);
        },
        redirectTo(){
            console.log('redirectTo');
            this.$router.push({name:'SetPreference'})
        }
    },
    components: {
    ModelSelect,
    CommonInputField
}
};
</script>


<style>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  /* max-width: 1500px; */
  flex-direction: column;
}

.infotext{
  margin-top: 15px;
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

.subpart h3{
  font-size: 32px;
  line-height: 38px;
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

.userdetailsselect {
  width: 50%;
  height: 50px;

}

.birthdetails{
    display: flex;
  
}

.birthdetailsmain{
    max-width:450px;
}
</style>