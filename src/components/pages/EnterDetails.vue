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
   import CommonInputField from "../atoms/CommonInputField.vue";
   import '../styles/EnterDetails.css'



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


