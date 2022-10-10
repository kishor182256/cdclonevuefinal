<template>
   <div class="main">
      <div class="mailicon">
         <img src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/icon-mail.svg" />
      </div>
      <div>
         <h3>Sign up complete!</h3>
      </div>
      <div class="infotext">
         <p>We've sent you an email with an activation link - just follow this link and you'll</p>
         <div class="infotextsub"><p>be able to access your online account straight away</p></div>
      </div>
      <div class="imagediv">
         <div>
            <img src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/app-img.svg" />
         </div>
         <div class="imagedivright">
            <div>
               <h1>Get the app</h1>
            </div>
            <div>
               <p>Enjoy 24/7 control over your transfers</p>
            </div>
            <div class="imageplaystore">
               <div class="imageplaystoreapple">
                  <img src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/cd-app-store.png" />
               </div>
               <div class="imageplaystoregoogleplay">
                  <img src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/cd-google-play.png" />
               </div>
            </div>
         </div>
      </div>
   </div>
</template>


<script>

</script>



<style>
.main {
   display: flex;
   align-items: center;
   justify-content: center;
}

.main h3 {
   font-size: 32px;
   line-height: 38px;
   font-Weight:medium;
   font-Size:36px;
   font-family: Helvetica, Roboto, Arial, sans-serif;
}

.main p{
   line-height: 1.6;
   color:#6f6f6f;
   font-family: Circular-Book,Arial,Helvetica,sans-serif;
}

.imagediv {
   display: flex;
   background-color: #ffffff;
   padding: 10px;
   border-radius: 5px;
   margin-top: 40px;
   box-shadow: 0px 0px 20px rgb(0 0 0 / 8%);
}
.imagedivright{
   display: flex;
   flex-direction: column;
   margin-top: 15px;
   line-height: 1.6;
   
}

.imagedivright h1{
   font-size: 16px;
   margin-left: 10px;
   font-family:'Circular Medium', sans-serif;
   font-weight: 400;
}

.imagedivright p{
   font-size: 14px ! important ;
   font-family:'Circular Book', sans-serif;
   font-weight: lighter;
   margin-left: 10px ! important;
    color: #626262;
}

.imageplaystore{
   display: flex;
   margin: 5px;
}

.mailicon{
   height:91px ;
   width: 96px;
   margin-bottom: 30px;
}


.infotext{
   max-width: 600px;
   display: flex;
   align-items: center;
   flex-direction: column;
   margin-top: 10px;
}
.infotextsub{
   display: flex;
   align-items: center;
}

.imageplaystoregoogleplay{
   padding: 5px;
}

.imageplaystoreapple{
   padding: 5px;  
}
</style>