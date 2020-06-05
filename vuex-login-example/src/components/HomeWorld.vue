<template>
    <div id="home">
         {{ info }}
         <b-button variant="primary"  @click="doLogout" size="lg">Logout</b-button>
  </div>
    
</template>

<script>
import {  mapActions } from 'vuex'
export default {
   name: 'home',   
   data () {
    return {
      info: 'You are have been login and this is Home Page'
    }
  },
  methods: {
            ...mapActions('login', {
                logout: 'logout'
            }),
                reset() {
                this.$refs.form.reset();
            },
            doLogout() {
                this.logout();
            }
        },
}
</script>