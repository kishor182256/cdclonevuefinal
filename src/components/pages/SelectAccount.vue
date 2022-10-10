<template >


    <div class="main">
        <h4>I’d like to send money as:</h4>
        <div class="imagesection">
            <div
             @click="changeBorders()"
             :style="showborder? 'border: 1px solid #0b5fff;' : 'border: 1px solid white;'"
             class="imagesectionmain">
                <div class="imagesectionimage">
                    <img 
                    src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/whitelabel/CurrenciesDirectBlue/images/icon-profile.svg" />
                     <p>An Individual</p>
                </div>
                <div>
                    <input type="radio"/>
                </div>
            </div>

            <div 
            @click="changeBordersone()"
            :style="showborderone? 'border: 1px solid #0b5fff;' : 'border: 1px solid white;'"
            class="imagesectionmain">
                <div class="imagesectionimage">
                    <img 
                    src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/icon-company.svg" />
                     <p>A Bussiness</p>
                </div>
                <div>
                    <input type="radio"/>
                </div>
            </div>


            <div
            @click="changeBorderstwo()"
             :style="showbordertwo? 'border: 1px solid #0b5fff;' : 'border: 1px solid white;'"
             class="imagesectionmain">
                <div
                 class="imagesectionimage">
                    <img 
                    src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/whitelabel/CurrenciesDirectBlue/images/icon-online-seller.svg" />
                     <p>A OnlineSeller</p>
                </div>
                <div>
                    <input type="radio"/>
                </div>
            </div>
        </div>


       

        <Button  v-on:click.native="goToHome()">Continue</Button>



    </div>
</template>


<script>
import Button from "../atoms/Button.vue";
import '../styles/SelectAccount.css'

export default {
    name: 'SelectAccount',
    components:{
    Button
},
    data(){
     return{
        buttonLabel:'',
        showborder: false,
        showborderone: false,
        showbordertwo: false
     }
    },
    methods: {
        goToHome() {
            console.log('redirectTo');
            this.$router.push({ name: 'CreateLogin' })
        },
        changeBorders() {
            this.showborder= true;
            this.showborderone= false,
            this.showbordertwo=false
        },

        changeBordersone() {
            this.showborder= false;
            this.showborderone= true,
            this.showbordertwo=false
        },
        changeBorderstwo() {
            this.showborder= false;
            this.showborderone= false,
            this.showbordertwo=true
        },

    }
}
</script>


