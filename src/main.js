import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./scss/main.scss";
import firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBxLft0OOKPjJuht_Uo7J40EIT8kFYUJ7Q",
  authDomain: "iii-app-todolist.firebaseapp.com",
  databaseURL: "https://iii-app-todolist.firebaseio.com",
  projectId: "iii-app-todolist",
  storageBucket: "iii-app-todolist.appspot.com",
  messagingSenderId: "588860085203",
  appId: "1:588860085203:web:af59f56eb58dda72a55526"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
