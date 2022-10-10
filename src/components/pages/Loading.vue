<template>
  <div class="main">
     <v-app class="circular">
        <div class="circular"><v-progress-circular 
        :rotate="10"
        :size="200"
        :width="5"
        :value="value"
        color="#0b5fff"
        indeterminate
      >
        <div class="circularcontent">
          <div class="circularcontenttext">
            <p>Confirming</p>
            <p>it's you</p>
          </div>
        <div ><p class="progressvalue">{{ value }}%</p></div>
        
      </div>
      </v-progress-circular></div>
      <div class="footertext">
         <p>We are just verifying your details,</p>
            <p> this may take minutes</p> 
        </div>
     </v-app>
    </div>
</template>


<script>

import Vue from 'vue'
import Vuetify from 'vuetify'
import '../styles/Loader.css'

Vue.use(Vuetify)
    export default{
      name:'Loading',
  
  // vuetify: new Vuetify(),
  data () {
    return {
      interval: {},
      value: 0,
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        this.$router.push({ name: 'IdentityFileUpload' })      
          return (this.value = 0)
      }
      this.value += 10
    }, 500)
  },

    }
</script>


