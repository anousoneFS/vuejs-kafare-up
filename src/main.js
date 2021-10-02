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
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app")
