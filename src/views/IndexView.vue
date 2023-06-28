<template>
  <div class="p-4 overflow-hidden">

    <!-- <homeView></homeView> -->
    <h1 class="text-center font-black relative mb-9">
      <svg class="absolute left-0 top-[50%] translate-y-[-50%]" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" @click="gopre">
        <path fill="currentColor" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225L10 22Z" />
      </svg>
      歌单广场
    </h1>
    <ul class="menu flex overflow-auto">
      <li v-for="item in menu" :key="item.id" v-on:click="toggleMenu(item.name)"
        class="mx-4 cursor-pointer whitespace-nowrap font-black select-none"
        :class="{ active: item.name === activeMenuItem }">
        {{ item.name }}
      </li>
    </ul>
    <ul class="flex flex-wrap justify-between">
      <li v-for="item in playlists" :key="item.id" class="w-[30%] mt-4">
        <div class="w-[100%] rounded overflow-hidden">
          <img :src="item.coverImgUrl" class="w-[100%]" alt="" />
        </div>
        <p class="text-sm mt-2">{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { fetchPlaylistHot, fetchPlaylists } from '@/request/index';
// 每一个.vue文件都是一个组件（带有一定的结构/功能/样式的自定义标签）类似于html标签
// import homeView from './homeView.vue';
export default {
  // components:{
  //   homeView
  // },
  data() {
    return {
      menu: [],
      playlists: [],
      activeMenuItem: '华语',
      foo: {
        a: 1,
        b: 2,
        c: 3,
      },
    };
  },
  methods: {
    toggleMenu(name) {
      this.activeMenuItem = name;
    },
    // fetchPlaylists(cat) {
    //   fetchPlaylists(cat)
    //     .then((res) => {
    //       this.playlists = res.data.playlists;
    //     });
    // },
    gopre() {
      window.history.back();
    },
  },
  //监控某个响应数据变化之后，执行指定的逻辑（动作）
  //methods  beforeCreate created watch中的this指向vm
  // watch:{
  //   activeMenuItem:function(newCat){
  //     this.fetchPlaylists(newCat)
  //   }
  // },
  watch: {
    activeMenuItem: {
      //指定数据变化的回调函数
      async handler(newCat) {
        const res = await fetchPlaylists(newCat);
        console.log(res)
        this.playlists = res.data.playlists;
      },

      // 执行配置：立即执行
      immediate: true,
      //监听配置：深度监听  用于复杂数据类型，用于对象，数组监听
      // deep:true,
    },
    foo: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true,
    },
  },
  // created() {
  //   fetchPlaylistHot()
  //     .then((res) => {
  //       console.log(res)
  //       this.menu = res.data.tags;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },

  async created() {
    const res = await fetchPlaylistHot().catch((err) => console.log(err));
    this.menu = res.data.tags;
  },
};
</script>

<style>
.active {
  color: red;
}

* {
  margin: 0;
  padding: 0;
}

.menu::-webkit-scrollbar {
  height: 0px;
}
</style>