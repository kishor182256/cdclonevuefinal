

import EnterDetails from './components/EnterDetails.vue'
import CreateLogin from "./components/pages/CreateLogin.vue";
import IdentityFileUpload from "./components/pages/IdentityFileUpload.vue";
import SelectAccount from "./components/pages/SelectAccount.vue";
import SetSecurity from "./components/pages/SetSecurity.vue";
import SetPreference from "./components/pages/SetPreference.vue";
import Loading from "./components/pages/Loading.vue";
import SignupComplete from './components/pages/SignupComplete.vue'

import Router from 'vue-router';




   const routes =[
    { name:'SelectAccount',component: SelectAccount, path: '/', },
     { name:'CreateLogin',component: CreateLogin, path: '/login', },
     {name:'EnterDetails', path: '/enterdetails', component: EnterDetails },
     {name:'IdentityFileUpload', path: '/fileidupload', component: IdentityFileUpload },
     {name:'SetSecurity', path: '/setsecurity', component: SetSecurity },
     {name:'SetPreference', path: '/setpreference', component: SetPreference },
     {name:'Loading', path: '/loading', component: Loading },
     {name:'Complete', path: '/signupComplete', component: SignupComplete },

   ]
   const router = new Router({
    mode: 'history',
    routes
  })

  

  export default router;
