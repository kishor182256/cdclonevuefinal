

import EnterDetails from './components/EnterDetails.vue'
import CreateLogin from './components/CreateLogin.vue';
import IdentityFileUpload from './components/IdentityFileUpload.vue'
import SelectAccount from './components/SelectAccount.vue'
import SetSecurity from './components/SetSecurity.vue'
import SetPreference from './components/SetPreference.vue'
import Loading from './components/Loading.vue'

import Router from 'vue-router';




   const routes =[
    { name:'SelectAccount',component: SelectAccount, path: '/', },
     { name:'CreateLogin',component: CreateLogin, path: '/login', },
     {name:'EnterDetails', path: '/enterdetails', component: EnterDetails },
     {name:'IdentityFileUpload', path: '/fileidupload', component: IdentityFileUpload },
     {name:'SetSecurity', path: '/setsecurity', component: SetSecurity },
     {name:'SetPreference', path: '/setpreference', component: SetPreference },
     {name:'Loading', path: '/loading', component: Loading },


    
   ]
   const router = new Router({
    mode: 'history',
    routes
  })

  

  export default router;
