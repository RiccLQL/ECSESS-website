import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import config from "@/axios/axios";

require('dotenv').config();

// configurate axios
config();

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
