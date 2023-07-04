import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from './App.vue'
import _ from 'lodash';
// import MineView from '@/views/MineView.vue'
import Vant from 'vant';
import Drawer from '@/components/Drawer'
// import { Switch } from 'vant';
import Switch  from '@/components/Switch';

import IndexView from '@/views/IndexView.vue';
import HomeView from '@/views/HomeView/HomeView.vue';
import SousuoView from '@/views/SousuoView.vue'
// import Dialog from './components/Dialog';
// Vue.use(Dialog);

import Vuex from '@/vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    count:123,
    msg:'hello,vuex!'
  }
})

//1.引入路由插件
import VueRouter from 'vue-router'

// 2.注册路由所提供的全局组件
Vue.use(VueRouter)

// 3.
const router = new VueRouter({
  routes:[
    //路径重定向
    {
      path:'/',
      redirect:'/HomeView'
    },
    {
      path:'/IndexView',
      component:IndexView,
    },
    {
      path:'/HomeView',
      component:HomeView,
    },
    {
      path:'/SousuoView',
      component:SousuoView
    }
    ,
    {
      path:'/Foo',
      component:()=>import('@/views/Foo.vue')
    }
  ]
})




Vue.use(Vant);
// Vue.use(Switch);
// Vue.component('MineView', MineView)
Vue.component('Icon', Icon);
Vue.component('Drawer',Drawer)
Vue.component('v-switch',Switch)

//app就是根实例  root  具备el，但是其他实例不具备
// 组件的嵌套 A组件出现在B组件的template中 A是B的子组件
// 如果一个组件没有父组件，则说明它是根组件

/*
组件数
foot
  App
    IndexView
    HomeView

*/

// app.$parent 获取父组件
// app.$children 获取子组件
// app.$root 获取根组件
// 全局组件：注册一次（在实例化root之前）  全局使用
const app = new Vue({
  store,
  // el: '#app',
  // 4.将router注入到根实例中  router-view(渲染)  router-link(跳转)
  // 提供了两个vue实例（全局）的属性 $router === router、   $route
  router,
  components: { App },
  template: '<App/>',
  // render:(h)=>h(indexView)
  // 实例已经创建，但是实例上的模板还没有渲染
  created() {
    // console.log(this.$children)
    // console.log(this.$parent)
    // console.log(this.$store)
  },
  //当前组件的template已经渲染到页面上了
  mounted() {
    // console.log(this.$children[0].$children)
  }
});
// 组件分类：
// 从功能上分：页面组件  业务组件
// 从来源上分：内置组件  第三方组件  自定义组件
// 从作用范围来分：局部组件（引入文件、注册组件、使用标签）  全局组件 使用Vue.component()来注册

// 组件：可复用性、可维护性

app.$mount();//编译把模板编译为浏览器能够识别的html片段，并复制给app的$el属性
document.querySelector('body').appendChild(app.$el)
window.app = app;




// const app = new Vue.extend({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>',
// })


// Vue.extend给vue的构造函数配置项设置默认值
// const ChildVue = new Vue.extend({
//   template:'<h1>{{msg}}</h1>',
//   data(){
//     return {
//       msg:'123'
//     }
//   }
// })

// new ChildVue({
//   el:'#app',
//   data(){
//     return{
//       msg:'abc'
//     } 
//   }
// })