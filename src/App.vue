<template>
  <v-app>
    <Navbar v-if="loggedIn" />

    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
//import { setTimeout } from 'timers';

export default {
  name: 'App',
  components: { Navbar },
  data () {
    return {
      loggedIn: false
    }
  },
  created ()
  {
    this.loggedIn = !!localStorage.getItem('user');// ? true : false;
    // setInterval(() => {this.loggedIn = !this.loggedIn}, 2500)
  },
  methods:{
    logout()
    {
      localStorage.removeItem('user');
      this.loggedIn = false;
      
      //console.log('test');
      //console.log(this);
      this.$router.push({name: 'login'});
    },
    login()
    {
      localStorage.setItem('user', 'ok');
      this.loggedIn = true;
      
      //console.log('test');
      //console.log(this);
      this.$router.push({name: 'dashboard'});
    }
  }

}
</script>
