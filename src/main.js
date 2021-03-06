import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.http.options.root =
  "https://vue-resource-udemy-1f7ee.firebaseio.com/data.json";
new Vue({
  render: h => h(App)
}).$mount("#app");
