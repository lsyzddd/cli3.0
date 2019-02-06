import Vue from "vue";
import fontsize from "./plugins/fontsize";
import 'mint-ui/lib/style.css';
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(fontsize);

new Vue({
	render: h => h(App)
}).$mount("#app");