import Vue from 'vue'
import App from './App.vue'
import router  from './router';
import { Button, Radio, Aside, Container, Header, Main } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Radio)
Vue.use(Aside)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
