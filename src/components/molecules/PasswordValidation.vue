<script>
import '../styles/subcomponents/passwordvalidation.css'

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
        
</template>



