import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from './App.vue'
import _ from 'lodash';
// import MineView from '@/views/MineView.vue'
import Vant from 'vant';
// import Drawer from '@/components/Drawer'
// import { Switch } from 'vant';
// import Switch  from '@/components/Switch';
import {Drawer,Switch} from '@/components'
// import IndexView from '@/views/IndexView.vue';
// import HomeView from '@/views/HomeView/HomeView.vue';
// import SousuoView from '@/views/SousuoView.vue'
// import Login from '@/views/Login.vue'
// import Songlist from '@/views/Songlist.vue'
import router from '@/router/router.js'
import store from '@/store/index';
// import {Button,Popup,Area} from 'vant';

// Vue.use(Button).use(Popup).use(Area)
Vue.use(Vant);
Vue.component('Icon', Icon);
Vue.component('Drawer',Drawer)
Vue.component('v-switch',Switch)

const app = new Vue({
  store,
  router,
  components: { App },
  template: '<App/>',
});

app.$mount();//编译把模板编译为浏览器能够识别的html片段，并复制给app的$el属性
document.querySelector('body #app').appendChild(app.$el)
// window.app = app;
