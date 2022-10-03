<template>
  <div>
    <div class="header">
      <Header/>
    </div>
  <div>
    <router-view></router-view>
  </div>
 <div>
  <Footer/>
 </div>
</div>
</template>

<script>


import Vue from "vue";
import VueCountryCode from "vue-country-code-select";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";


Vue.use(VueCountryCode);
export default {
  name: 'App',
  components: {
    Header,Footer
  }
}
</script>


<style>
.container {
  margin: 0 !important;
  padding: 0;
}

.header{
  background-color: #ffffff;
}
</style>
