<template>
  <div class="main">
     <v-app class="circular">
        <v-progress-circular class="circular"
        :rotate="90"
        :size="200"
        :width="5"
        :value="value"
        color="#0b5fff"
      >
        <div class="circularcontent">
          <div class="circularcontenttext"><p>Confirming it's you</p></div>
        <div ><p class="progressvalue">{{ value }}%</p></div>
        
      </div>
      </v-progress-circular>
      <div>
          <p>We are just verifying your details,
            this may take minutes
          </p>
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
        return (this.value = 0)
      }
      this.value += 10
    }, 1000)
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
    display: flex;
    align-items: center;
  }

  .circularcontent{
     display: flex;
     flex-direction: column;
     align-items: center;
  }

  .circularcontenttext{
    max-width: 35px;
    display: flex;
    align-items: center;
    margin: 30px;
  }

  .progressvalue{
    color:#0b5fff
  }
</style>