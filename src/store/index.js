import Vue from 'vue';
import Vuex from '@/vuex';
import _store  from "storejs";
import {getUserAccount,getUserSubcount} from '@/request'
Vue.use(Vuex);


// getUserAccount()
// .then((res)=>{
//   console.log(res.data.profile);
//   _store.set('userID',res.data.account.id);
//   _store.set('userInfo',res.data.profile);
//   getUserSubcount()
//   .then((res)=>{console.log(res)})
//   .catch(err=>console.log(err))
// })
// .catch(err=>console.log(err))
// const nickname = _store.get('userInfo.nickname')
// console.log(nickname)



const store = new Vuex.Store({
  state: {
    count: 123,
    msg: 'hello, vuex！',
    show:false,
  },
  mutations: {
    increase(state) {
      state.count++;
    },
    toggleshow(state){
      state.show=!state.show
    }
  },
});
export default store;
