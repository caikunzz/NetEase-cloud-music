import def from 'ajv/dist/vocabularies/applicator/additionalItems';
import Vue from 'vue';
import VueRouter from 'vue-router';
import IndexView from '@/views/IndexView.vue';
import HomeView from '@/views/HomeView/HomeView.vue';
import SousuoView from '@/views/SousuoView.vue'
import Login from '@/views/Login.vue'
import Songlist from '@/views/Songlist.vue'
import Foo from '@/views/Foo.vue'
Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
      //路径重定向
      {
        path:'/',
        redirect:'/PersonalView'
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
      },
      {
        path:'/Login',
        component:Login
      },
      {
        path:'/Songlist',
        component:Songlist
      },
      {
        path:'/Rest',
        component:()=>import(/* webpackChunkName:'rest' */'@/views/Rest.vue')
      },
      {
        path:'/JSX',
        component:()=>import(/* webpackChunkName:'JSX' */'@/views/JSX')
      },
      {
        path:'/0708',
        component:()=>import('@/views/Feat-0708.vue')
      },
      {
        path:'/0708jsx',
        component:()=>import('@/views/Feat-0708.jsx')
      },
      {
        path:'/PersonalView',
        component:()=>import('@/views/PersonalView')
      }
    ]
  })

  export default router;