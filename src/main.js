import Vue from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import router from "./routes.js"
import store from "./store.js"
// import firebase from '@firebase/app';
// import * as firebase from "firebase";
import firebase from "firebase"
// import settings from "./settings.js"

// firebase.initializeApp(settings.firebaseConfig);

firebase.initializeApp({
  apiKey: "AIzaSyDmrWTg3ty-Hhj4dRZy1SEhfrELzzDmgmc",
  authDomain: "kafareup-66a9d.firebaseapp.com",
  databaseURL: "https://kafareup-66a9d.firebaseio.com",
  projectId: "kafareup-66a9d",
  storageBucket: "kafareup-66a9d.appspot.com",
  messagingSenderId: "920714222199",
  appId: "1:920714222199:web:07c1875d589070c3f5c472",
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app")
