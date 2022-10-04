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


       

        <Button  v-on:click.native="goToHome()"/>



    </div>
</template>


<script>
import Button from './Button.vue';
export default {
    name: 'SelectAccount',
    components:{
    Button
},
    data(){
     return{
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


<style>
@font-face {
    font-family: Circular-Book, Arial, Helvetica, sans-serif;
    src: ('');
}

.main {
    max-width: 1500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}

.main h4 {
    font-family: Circular-Medium,Arial,Helvetica,sans-serif !important;
    font-size: 32px !important;
}

.imagesection{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 30px;
    cursor: pointer;

}




.imagesectionmain {
    background-color: #ffffff;
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    width: 450px;
    padding: 15px;
    margin: 5px;
    border-radius: 5px;
}

.imagesectionimage{
    display: flex;
}

.imagesectionimage p{
    margin-left: 10px;
    color:#131415 !important;
    background-size: 28px !important;
    font-weight: 500;
}











</style>