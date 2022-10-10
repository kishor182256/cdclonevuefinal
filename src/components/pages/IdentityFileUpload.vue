<template>
    <div class="main">
        <div class="headingdiv">
            <div>
                <h3 class="headingdiv_heading">One last thing...</h3>
            </div>
            <div>
                <p class="headingpara">Just so we know it’s really you, please provide:</p>
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

        <PopUp/>


        <div>
            <div class="selectidentity">
                <p>Proof of identity</p>
            </div>
            <div class="selectdiv">
                <!-- <select class="select" v-model="adress.identity">
                    <option >Select Document Type</option>
                    <option
                     v-for="identity in identity" value="adress.identity"
                     :key="identity">{{identity}}</option>
                    
                </select> -->

                <select class="select"  v-model="adress.identity">
                    <option value="">Select Document Type</option>
                    <option v-for=" identity in  identity"
                     :key="identity" value='"adress.identity"'>{{identity}}</option>   
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
                    <option v-for=" document in  document" :key="document"
                     value='document'>{{document}}</option>   
                </select>
            </div>
            </div>
        
                
           
        </div>
       
        <div class="container">
            <div v-if="adress.proof=== 'document'">
                <div class="uploadidentity2">
                    <div>
                        <div class="uploadidentity2para">
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

        <div class='buttondiv'>
            <Button v-on:click.native="goToHome()">Submit Documents</Button>
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
   
   import Button from "../atoms/Button.vue";
   import '../styles/FileUpload.css'

    export default {
        components:{
    Button
},
    data() {
        return {
            chooseOption: null,
            chooseOption1: null,
            adress: {
                proof: "",
                identity: ""
            },
            document: ["Billing Utility", "Bank Statement"],
            identity: ["PassPort", "Driving Licence"]
        };
    },
    methods: {
        goToHome() {
            console.log("redirectTo");
            this.$router.push({ name: "Complete" });
        }
    },
};
    </script>
    

  


