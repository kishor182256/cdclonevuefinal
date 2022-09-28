<template>
  
<div>
 
   <router-view></router-view>
</div>
 

</template>

<script>


import Vue from "vue";
import VueCountryCode from "vue-country-code-select";


Vue.use(VueCountryCode);
export default {
  name: 'App',
  components: {
    
}
}
</script>


<style>
 
  .container{
    margin: 0 !important;
    padding: 0;
  }
</style>
