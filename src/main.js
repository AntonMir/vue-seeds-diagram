import Vue from "vue";
import App from '../src/components/app/app.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
