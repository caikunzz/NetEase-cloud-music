<template>
  <div class="box-border bg-[#8c914c] h-screen flex flex-col">
    <header class="text-white box-border p-4">
      <div class="flex justify-between items-center text-[16px]">
        <Icon @click="toback" icon="ps:left" color="white" />
        <span class="headercontent font-bold text-white">歌单</span>
        <div class="flex items-center">
          <Icon icon="iconamoon:search" color="white" class="mr-2" />
          <Icon icon="ant-design:more-outlined" color="white" />
        </div>
      </div>
    </header>

    <section @scroll="fn" class=" flex-auto overflow-auto rounded-t-2xl relative">
      <div id="content-head" class="text-white box-border p-4">
        <div class="flex">
          <img :src="headresult.data.playlist.coverImgUrl" class="w-[30vw] rounded-xl mr-[3vw]" alt="" />
          <div class="flex flex-col">
            <div class=" relative"><p class="top-[5vw]">{{ headresult.data.playlist.name }} </p><Icon icon="bytesize:chevron-bottom" color="white" class=" absolute right-[-5vw] top-[1vw] p-1  rounded-[50%] bg-white bg-opacity-30" /></div>
            <p class="flex items-center my-[2vw]">
              <img :src="headresult.data.playlist.coverImgUrl" class="w-[5vw] rounded-[50%]" alt="" /><span
                class="mx-[2vw] text-xs">{{
                  headresult.data.playlist.creator.nickname
                }}</span><span class="text-xs rounded-xl bg-white bg-opacity-30 px-[2vw] py-[2px] mr-[2vw]">+关注</span>
            </p>
            <p class="flex">
              <span v-for="item in headresult.data.playlist.tags" :key="item.id"
                class="flex items-center text-xs rounded bg-white bg-opacity-30 px-[1vw] mr-[2vw] py-[1px]">{{ item }}
                <Icon icon="icon-park-outline:right" color="white" />
              </span>
            </p>
          </div>
        </div>
        <p class="overflow-hidden overflow-ellipsis whitespace-nowrap text-xs text-slate-100 my-[2vw] opacity-40">
          {{ headresult.data.playlist.description }}
        </p>
        <div class="flex justify-between">
          <div class="flex py-[2vw] justify-center w-[30%] items-center rounded-[25px] bg-white bg-opacity-20">
            <p class="flex items-center">
              <Icon class="mr-[1vw]" width="22" icon="majesticons:share" color="white" />{{
                headresult.data.playlist.shareCount }}
            </p>
          </div>
          <div class="flex py-[2vw] justify-center w-[30%] items-center rounded-[25px] bg-white bg-opacity-20">
            <p class="flex items-center">
              <Icon class="mr-[1vw]" width="22" icon="iconamoon:comment-dots-fill" color="white" />{{
                headresult.data.playlist.commentCount }}
            </p>
          </div>
          <div class="flex py-[2vw] justify-center w-[30vw] items-center rounded-[25px] bg-[#fa434a] bg-opacity-70">
            <p class="flex items-center">
              <Icon class="mr-[1vw]" width="22" icon="mdi:calendar-add" color="white" />{{
                headresult.data.playlist.subscribedCount }}
            </p>
          </div>
        </div>
      </div>

      <!-- <div class="songhead flex justify-between items-center sticky top-0">
          <div class="flex items-center">
            <Icon icon="carbon:play-filled" color="red" width="24"/>
            <span class=" font-medium mx-[2vw]">播放全部</span>
            <span class=" text-xs">({{ songlist.length }})</span>
          </div>
          <div class="flex items-center">
            <Icon width="22" icon="streamline:interface-download-circle-arrow-circle-down-download-internet-network-server-upload" />
            <Icon width="22" class="ml-[2vw]" icon="octicon:multi-select-16" />
          </div>
        </div> -->

      <ul class="box-border p-4 bg-white relative box">
        <div class="songhead flex justify-between items-center bg-white py-[2vw] sticky top-0">
          <div class="flex items-center">
            <Icon icon="carbon:play-filled" color="red" width="24"/>
            <span class=" font-medium mx-[2vw]">播放全部</span>
            <span class=" text-xs">({{ songlist.length }})</span>
          </div>
          <div class="flex items-center">
            <Icon width="22" icon="streamline:interface-download-circle-arrow-circle-down-download-internet-network-server-upload" />
            <Icon width="22" class="ml-[2vw]" icon="octicon:multi-select-16" />
          </div>
        </div>
        <li v-for="(item, index) in songlist" :key="item.id" class="flex justify-between items-center my-[2vw]">
          <div class="w-[10vw] text-center text-gray-500">{{ index + 1 }}</div>
          <div class="flex-auto">
            <p class="font-medium overflow-hidden overflow-ellipsis whitespace-nowrap w-[50vw]">{{ item.name }}</p>
            <p class=" text-xs text-gray-500">{{ item.ar[0].name }}</p>
          </div>
          <div class="flex items-center">
            <Icon width="22" v-if="item.mv!=0" icon="fluent:filmstrip-play-32-regular" />
            <Icon width="22" icon="ant-design:more-outlined" class="text-gray-500 w-[10vw]" />
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import { getSonglisthead, getSonglist } from '@/request';
export default {
  data() {
    return {
      headresult: {},
      songlist: [],
      lastscrolltop: 0,
      opacity:1
    };
  },
  async created() {
    let id = 7358981102;
    const headres = await getSonglisthead(id);
    console.log(headres);
    this.headresult = headres;


    const res = await getSonglist(id);
    this.songlist = res.data.songs;
    console.log(res.data.songs);
  },
  methods: {
    toback(){
      window.history.back()
    },
    fn(e) {
      const box = document.querySelector('.box');
      const headercontent = document.querySelector('.headercontent');
      const contenthead = document.querySelector('#content-head');
      let nowscrolltop = e.target.scrollTop;
      // const distance = document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(contenthead)
      if (e.target.scrollTop > box.offsetTop) {
        headercontent.innerHTML = this.headresult.data.playlist.name;
        headercontent.classList.remove('headershow');
      } else {
        headercontent.innerHTML = '歌单';
        headercontent.classList.add('headershow');

        if (nowscrolltop > this.lastscrolltop) {
        this.opacity-=0.03
        if(this.opacity<0){
          this.opacity=0
        }
        contenthead.style= `opacity:${this.opacity}`;
      }else{
        this.opacity+=0.03
        if(this.opacity>1){
          this.opacity=1
        }
        contenthead.style= `opacity:${this.opacity}`;
      }
      }

      if(e.target.scrollTop==0){
        this.opacity=1
        contenthead.style= `opacity:${this.opacity}`;
      }
      this.lastscrolltop = nowscrolltop;
    }
  }
};
</script>

<style>
.headershow-enter,
.headershow-leave-to {
  transform: translateY(100%);
}

.headershow-enter-active,
.headershow-leave-active {
  transition: all .3s ease-in-out;
}

.headershow-enter-to,
.headershow-leave {
  transform: translateY(0);
  
}
</style>