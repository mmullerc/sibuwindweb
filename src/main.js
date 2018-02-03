import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import Icon from 'vue-awesome/components/Icon'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA3UQFiIfR1cVZEB2xq5YOD4XSvqYv1mVo',
  }
})

Vue.use(BootstrapVue);
Vue.component('icon', Icon)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
