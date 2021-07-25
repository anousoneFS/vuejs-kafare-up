<template>
  <v-app>
    <v-app-bar app color="deep-purple darken-4" dark>
      <v-icon class="mr-5">mdi-coffee-outline</v-icon>
      <v-toolbar-title>KafareUp</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>profile</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title @click="signout" class="red--text">Log Out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import firebase from "@firebase/app";
// import "@firebae/auth";
import firebase from "firebase";

export default {
  name: "App",
  data() {
    return {};
  },
  mounted(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user == null) this.$router.replace("/signin");
      else this.$router.replace("/");
    });
  },
  methods:{
    signout(){
      firebase.auth().signOut();
    }
  }
};
</script>

<style lang="scss" scoped>
.v-application {
  font-family: "Kanit";
}
</style>
