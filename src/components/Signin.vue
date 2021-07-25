<template>
  <v-container>
      <div class="text-center" v-if="loading">
          <v-progress-circular size="50" color="red" indeterminate></v-progress-circular>
          <p>ກໍາລັງດໍາເນີນການ......</p>
      </div>
      <v-card v-else>
          <v-list>
              <v-list-item @click="signinByGoogle">
                  <v-list-item-avatar>
                      <v-icon color="red">mdi-google</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-title>
                      ເຂົ້າສູ່ລະບົບດ້ວຍ Google
                  </v-list-item-title>
              </v-list-item>
          </v-list>
      </v-card> 
  </v-container>
</template>

<script>
// import firebase from "@firebase/app";
// import "@firebase/auth";
import firebase from "firebase";

export default {
    data() {
        return {
            loading: true
        }
    },
    mounted(){
        firebase.auth().getRedirectResult().then((result) => {
            if(result.user == null){
                this.loading = false;
            }else{
                this.$router.replace("/");
            }
        })
    },
    methods:{
        signinByGoogle(){
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider); 
        }
    }
}
</script>

<style>

</style>