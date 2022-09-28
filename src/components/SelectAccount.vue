<template >
    
    
    <div class="main">
        <h1 class="select">I’d like to send money as:</h1>
        <div class="imagesection">
            <div class="imagediv"><image
            class="image"
             src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/whitelabel/CurrenciesDirectBlue/images/icon-profile.svg"/>
            <p>An Individual</p></div>
            <div><input type='radio' class="imagediv_input"/></div>
        </div>
            
        <div class="imagesection">
            <div class="imagediv"><image 
            class="image"
            src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/icon-company.svg"/>
            <p>A Bussiness</p></div>
            <div><input type='radio' class="imagediv_input"/></div>
        </div>
        <div class="imagesection">
            <div class="imagediv"><image 
            class="image"
            src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/whitelabel/CurrenciesDirectBlue/images/icon-online-seller.svg" />
            <p>Online Seller</p></div>
            <div><input type='radio' class="imagediv_input"/></div>
        </div>

        <button type="button" name="save" value="Save"
         @click="goToHome()"
         class="accountbutton" >
            Continue
        </button>
        

    </div>
</template>


<script>
    export default {
        name: 'CreateLogin',
        methods: {
        goToHome(){
            console.log('redirectTo');
            this.$router.push({name:'CreateLogin'})
        }
      }
    }
</script>


<style>
  @font-face {
    font-family: Circular-Book,Arial,Helvetica,sans-serif;
    src: ('');
}
    .main{
        max-width: 1500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }

    .main h1{
        font-family: Arial, Helvetica, sans-serif;
    }
    .select{
       
        margin: 0;
        height: 60px;
    }

    .imagesection{
        display: flex;
        background: #ffffff;
        align-items: center;
        margin: 10px;
        border-radius: 5px;
        height: 40px;
        border: 1px solid rgb(233, 233, 233);
        padding: 15px;
        justify-content: space-between;
        width: 500px;
    }

    .image{
        height: 30px;
        width: 30px;
    }

    .imagediv{
        display: flex;
        align-items: center;
    }

    .imagediv p{
       margin-left: 20px;
       color:#121212;
       font-size: 500;
       font-family: Arial, Helvetica, sans-serif;
     
    }

    .imagediv_input{
        width: 18px;
        height: 20px;
    }

    .accountbutton{
        height: 50px;
        width: 480px;
        border-radius: 25px;
        border:none;
        color:#ffffff;
        background: linear-gradient(95deg,#f03ea6 4.1% ,#ff6b00 95.1%,#f03ea6 200%);
        margin-top: 50px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-weight: bolder;
    }

    


</style>