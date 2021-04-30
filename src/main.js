import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import eventBus from './plugins/event-buss';
import routes from './routes';
import stringChanged from './filters/capitalize';
import blur from './directives/blur';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(eventBus);
Vue.use(stringChanged);
Vue.use(blur);
const router = new VueRouter({ 
  routes,
  mode: 'history',
});
new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
