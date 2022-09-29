<template >


    <div class="main">
        <h1>I’d like to send money as:</h1>
        <div class="imagesection">
            <div class="imagesectionmain">
                <div class="imagesectionimage">
                    <img 
                    src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/whitelabel/CurrenciesDirectBlue/images/icon-profile.svg" />
                     <p>An Individual</p>
                </div>
                <div>
                    <input type="radio"/>
                </div>
            </div>

            <div class="imagesectionmain">
                <div class="imagesectionimage">
                    <img 
                    src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/icon-company.svg" />
                     <p>An Individual</p>
                </div>
                <div>
                    <input type="radio"/>
                </div>
            </div>


            <div class="imagesectionmain">
                <div class="imagesectionimage">
                    <img 
                    src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/whitelabel/CurrenciesDirectBlue/images/icon-online-seller.svg" />
                     <p>An Individual</p>
                </div>
                <div>
                    <input type="radio"/>
                </div>
            </div>
        </div>


        <button type="button" name="save" value="Save" @click="goToHome()" class="accountbutton">
            Continue
        </button>


    </div>
</template>


<script>
export default {
    name: 'CreateLogin',
    methods: {
        goToHome() {
            console.log('redirectTo');
            this.$router.push({ name: 'CreateLogin' })
        }
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

.main h1 {
    font-family: Arial, Helvetica, sans-serif;
}

.imagesection{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 60px;
    margin-bottom: 30px;

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
}








.accountbutton {
    height: 50px;
    width: 480px;
    border-radius: 25px;
    border: none;
    color: #ffffff;
    background: linear-gradient(95deg, #f03ea6 4.1%, #ff6b00 95.1%, #f03ea6 200%);
    margin-top: 80px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: bolder;
}
</style>