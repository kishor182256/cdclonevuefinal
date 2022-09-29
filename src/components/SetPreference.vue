<template>
    <div class="main">
        <div class="subpart">
            <div>
                <div>
                    <h3>Set your preferences</h3>
                </div>
                <div class="infotext">
                    <p>
                        Now, we’ll set up your account in the way that works best for you.
                        Then you’ll have access to expert advice if you need it.
                    </p>
                </div>
            </div>
        </div>
            <div class="countryselectheading">
                <p>I transfer mostly</p>
            </div>
        
            <div class="userdetails">
                <div >
                    <p>From</p>
                    <vue-country-code class="userdetailsselect"
                     @onSelect="onSelect"></vue-country-code>
                </div>
              
                <div>
                    <p>To</p>
                    <vue-country-code class="userdetailsselect"
                     @onSelect="onSelect"></vue-country-code>
                </div>
            </div>






        



         <div class="amountselecttext">
            <p>In a year, I estimate I could transfer ...</p>
         </div>
        <div>
            <model-select :options="options"
             class="userdetailsselect2" 
             v-model="item" placeholder="Select Amount">
            </model-select>
        </div>

        <div>

            <div class="checkbox">
                <div>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                </div>
                <p> I agree to the terms and privacy notices in order to process my registration and that the
                    information shared is my own.</p>
            </div>
        </div>


        <div>
            <button type="button" name="save" @click="redirectTo()" value="Save" class="accountbutton">
                Continue
            </button>
        </div>
    </div>
</template>
  
<script>
import Vue from "vue";
import VueCountryCode from "vue-country-code-select";
import { ModelSelect } from 'vue-search-select'



Vue.use(VueCountryCode);
export default {
    name: "SetPreference",

    data() {
        return {
            options: [
                { value: '1', text: 'Under 2000' },
                { value: '2', text: '2000-5000' },
                { value: '3', text: '5000-10000' },
                { value: '4', text: '10000-25000' },
                { value: '5', text: '25000-50000' }
            ],
        }
    },

    methods: {
        onSelect({ name, iso2, dialCode }) {
            console.log(name, iso2, dialCode);
        },
       
           
            redirectTo() {
                console.log('redirectTo');
                this.$router.push({ name: 'Loading' })
            }
      
    },
    components: {
        ModelSelect
    }
};
</script>
  
  
<style>
/* .main {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1500px;
    flex-direction: column;
} */

.infotext{
    margin-top: 15px;
}

.amountselecttext{
    margin-top: 18px;
    padding: 10px;
    margin-right: 180px;
}

.countryselectheading{
    display: flex;
    justify-content: flex-start !important;
    margin-right: 320px;
    margin-top: 20px;
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


.userdetailsselect {
    width: 50%;
    height: 50px;

}

.userdetails {
    display: flex;
    width: 450px;
    margin-left: 23px;
}

.checkbox {
    display: flex;
    align-items: center;
 
    width: 480px;
    margin-left: 35px;

}

.checkbox p {
    margin-top: 20px;
    margin-left: 10px;
}
</style>