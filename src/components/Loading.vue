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
        this.$router.push({ name: 'Complete' })      
          return (this.value = 0)
      }
      this.value += 10
    }, 500)
  },

    }
</script>


<style>
  .main{
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .circular{
    background-color: #f2f2f2 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center!important;
  }

  .circularcontent{
     display: flex;
     flex-direction: column;
     align-items: center;
  }

  .circularcontenttext{
    max-width: 95px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px;
  }

  .circularcontenttext p{
    color:#03122c !important;
    font-size: 16px !important;
  }

  .progressvalue{
    color:#0b5fff
  }

  .footertext{
    display: flex;
    flex-direction: column;
    align-items: center !important;
    justify-content: center !important;
    margin-left: 290px;
    margin-top: 20px;
    color: #6f6f6f !important;
  }
  .footertext p{
    color: #6f6f6f !important;
  }
</style>