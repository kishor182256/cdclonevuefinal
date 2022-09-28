<template>
    <div class="main">
        <div class="subpart">
            <div>
                <div>
                    <h3>Set your preferences</h3>
                </div>
                <div>
                    <p>
                        Now, we’ll set up your account in the way that works best for you.
                        Then you’ll have access to expert advice if you need it.
                    </p>
                </div>
            </div>
        </div>
            <div>
                <p>I transfer mostly</p>
            </div>
        
            <div class="userdetails">
                <div class="userdetailsselect">
                    <p>From</p>
                    <vue-country-code class="userdetailsselect"
                     @onSelect="onSelect"></vue-country-code>
                </div>
              
                <div class="userdetailsselect">
                    <p>To</p>
                    <vue-country-code class="userdetailsselect"
                     @onSelect="onSelect"></vue-country-code>
                </div>
            </div>






        



         <div>
            <p>In a year, I estimate I could transfer ...</p>
         </div>
        <div class="userdetailsselect">
            <model-select :options="options"
             class="userdetailsselect" 
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

.userdetails {
    display: flex;
    width: 450px;
}

.birthdetails {
    display: flex;

}


.checkbox {
    display: flex;
    align-items: center;

    width: 480px;

}

.checkbox p {
    margin-top: 10px;
}
</style>