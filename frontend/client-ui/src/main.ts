import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import config from "@/axios/axios";
import Cloudinary from "cloudinary-vue";

require('dotenv').config();

// configure axios
config();

//configure cloudinary
Vue.use(Cloudinary, {
  configuration: {
    cloudName: "ecsess-website",
    apiKey: process.env.VUE_APP_CLOUDINARY_API_KEY,
    apiSecret: process.env.VUE_APP_CLOUDINARY_API_SECRET,
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
