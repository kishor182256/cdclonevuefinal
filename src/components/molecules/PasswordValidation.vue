<script>
export default {
    name: "PasswordValidation",
   
      props: {
        password:String
   },

   created() {
    console.log('vchvchvchgd',this.password)
  }
   
 
   
   

   
}
</script>




<template>
    <div>
   <div class="passwordvalidationdiv">
          <p>Your password must contain:</p>
          <div class="passwordvalidation">
            <div class="circle">
              <i class="fa fa-genderless faiccon"  v-if=!password.match(/.{8,}/)> </i>
              <i class="fa fa-check faiccons" v-if=password.match(/.{8,}/)> </i>
              <p class="passwordvalidationlable">at least 8 characters</p>
            </div>
            <div class="circle">
              <i class="fa fa-genderless faiccon" v-if=!password.match(/[0-9]/)></i>
              <i class="fa fa-check faiccons" v-if=password.match(/[0-9]/)></i>
              <p class="passwordvalidationlable">at least 1 number</p>
            </div>
            <div class="circle">
              <i class="fa fa-genderless faiccon" v-if=!password.match(/[a-z]/)></i>
              <i class="fa fa-check faiccons" v-if=password.match(/[a-z]/)></i>
              <p class="passwordvalidationlable">a lower case character</p>
            </div>
            <div class="circle">
              <i class="fa fa-genderless faiccon" v-if=!password.match(/[A-Z]/)></i>
              <i class="fa fa-check faiccons" v-if=password.match(/[A-Z]/)></i>
              <p class="passwordvalidationlable">a upper case character</p>
            </div>
          </div>
        </div>
        </div>
</template>



<style>
    
.passwordvalidationdiv {
  margin-left: 18px;
}

.passwordvalidationdiv p {
  font-family: 'Circular-Medium,Arial,Helvetica,sans-serif';
  margin-bottom: 10px;
}

.faiccons {
  color: #00aa5e !important;
  border: 1px solid #00aa5e;
  border-radius: 50%;
  padding: 0.5px;
  font-weight: 100;
  background-color: #ffffff;
}


</style>