<template>
    <div class="main">
        <div class="headingdiv">
            <div>
                <h3>One last thing...</h3>
            </div>
            <div>
                <p>Just so we know it’s really you, please provide:</p>
            </div>
        </div>

        <div class="doctypediv">
            <div>
                <p>Proof of identity (e.g. passport, driving licence)</p>
            </div>
            <div>
                <p>Proof of address (e.g. bank statement, utility bill)</p>
            </div>
        </div>

        <div class="subtext">
            <div><p>We have to ask for this because we’re a regulated financial</p></div>
            <div><p>organisation.<strong class="strongtext"> See our document requirements</strong></p></div>
        </div>

        <div>
            <div class="selectidentity">
                <p>Proof of identity</p>
            </div>
            <div class="selectdiv">
                <select class="select" v-model="adress.identity">
                    <option >Select Document Type</option>
                    <option
                     v-for="identity in identity" value="adress.identity"
                     :key="identity">{{identity}}</option>
                    
                </select>
            </div>
        </div>

        <div class="container">
            <div v-if="adress.identity === 'adress.identity'">
                <div class="uploadidentity2">
                    <div>
                        <div>
                            <p>Upload a file of the of your `{{adress.identity}}`.Must be less than 3 months old</p>
                        </div>
                        <div class="fileupload">
                            <label>Upload File</label>
                            <form>
                                <input id="file" type="file" label="null" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="adressproof">
            <div>
                <p>Proof of Adress</p>
            </div>
            <div>
        
                <div class="selectdiv">
                <select class="select" v-model="adress.proof">
                    <option value="">Select Document Type</option>
                    <option v-for=" document in  document" :key="document" value='document'>{{document}}</option>
                   
                </select>
            </div>
            </div>
        
                
           
        </div>
       
        <div class="container">
            <div v-if="adress.proof=== 'document'">
                <div class="uploadidentity2">
                    <div>
                        <div>
                            <p v-if="adress.proof=== 'document.passport'">Upload a file of the of your PassPort.Must be less than 3 months old</p>
                            <p>Upload a file of the of your PassPort.Must be less than 3 months old</p>
                        </div>
                        <div class="fileupload">
                            <label>Upload File</label>
                            <form>
                                <input id="file" type="file" label="null" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <button type="button" name="save"
             @click="goToHome()"
             value="Save" class="accountbutton">
                Submit Documents
            </button>
        </div>

        <div class="footerinfo">
            <div><h3>Don’t have time now?</h3></div>
            <div><p>No problem. You can come back later using your email and password on our website or mobile app.</p></div>
        </div>

        <div class="footertext">
            <p>Upload documents later</p>
        </div>

    </div>
</template>
  
<script>
    export default {
      data() {
        return {
            chooseOption: null,
            chooseOption1: null,
            adress:{
                proof:'',
                identity:''
            },
            document:['Billing Utility','Bank Statement'],
            identity:['PassPort','Driving Licence']
         
        };

      },

      methods: {
        goToHome(){
            console.log('redirectTo');
            this.$router.push({name:'CreateLogin'})
        }
      }

     
    };
    </script>
    

  
<style>
.main {
    display: flex;
    align-items: center;
    max-width: 1500px;
    flex-direction: column;
    padding: 10px;
}

.headingdiv{
    margin-right: 190px;
    padding: 10px;
}

.headingdiv p{
    color:#757575;
    line-height: 1.3rem;
    font-size: 16px;
    font-weight: 600;
}

.headingdiv h3{
    font-family: 'Circular-Medium,Arial,Helvetica,sans-serif';
    color: #121212;
    font-size: 28px;
    letter-spacing: 0!important;
}

.subtext{
    margin-right: 120px;
    padding: 20px;
    font-family: 'Circular-Book,Arial,Helvetica,sans-serif';
    font-family: 400;
    color:#757575;
}

.doctypediv {
    background-color: #ffffff;
    padding: 20px;
    width: 500px;
    border-radius: 5px;
    font-family: 'Circular-Book,Arial,Helvetica,sans-serif'
}

.doctypediv p{
    font-family: 'Circular-Book,Arial,Helvetica,sans-serif';
    line-height: 1.8;
    color:#0a0a0a
}

.strongtext{
    color: #0b5fff;
}

.selectdiv{
    width: 500px;
}

.selectidentity p{
   padding: 10px;
}

.select{
    width: 100%;
    padding: 20px;
    background-color: #ffffff;
}

.adressproof{
    margin-top: 20px;
}

.adressproof p{
    margin-bottom: 10px;
}

.fileuploadone{
   border: 2px dashed gray;
   padding: 20px;
   width: 156%;
   display: flex;
   flex-direction: column;
   align-items: center;
   border-radius: 4px;
   margin-top: 20px;
}

.fileupload{
   border: 2px dashed gray;
   padding: 20px;
   width: 105%;
   display: flex;
   flex-direction: column;
   align-items: center;
   border-radius: 4px;
   margin-top: 20px;
   margin-left: 20px;
}

.fileupload input::-webkit-file-upload-button {
  display: none;
}

.uploadidentity{
    margin-right: 180px;
}

.uploadidentity p{
    margin-top: 10px;
}

.uploadidentity2{
    margin-right: 50px;
    padding: 15px;
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

.footerinfo{
    max-width: 400px;
    margin: 20px;
    margin-right: 90px;
   
}

.footerinfo h3{
    margin-bottom: 10px;
}

.footertext{
    margin-right: 310px;

}
</style>