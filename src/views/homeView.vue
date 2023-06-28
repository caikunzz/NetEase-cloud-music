<template>
  <div class="overflow-hidden box-border p-5 bg-gradient-to-b from-purple-200 via-gray-100 to-gray-100">
    <header class="flex justify-between relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" />
      </svg>
      <svg @click="serachHandler" class=" absolute top-[50%] left-[17%] -translate-y-2/4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"/></svg>
      <input type="text" :placeholder="searchName" v-model="userSearchKeywords"
        class="rounded-xl border-2 border-purple-300 pl-[10%] bg-gradient-to-r from-pink-200 to-purple-200 w-[70%] text-base" />
      <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256">
        <path fill="currentColor"
          d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z" />
      </svg>
      <ul v-if="userSearchKeywords" class="w-[100%] bg-white absolute bottom-0 translate-y-[100%] overflow-hidden rounded-xl z-10">
        <li class="text-center bg-gradient-to-r from-pink-500 to-purple-500 " v-for="item in defaultResult" :key="item.id">{{ item.name }}</li>
      </ul>
    </header>
    <!-- 头部结束 -->

    <!-- 轮播开始 -->
    <van-swipe class="my-swipe mt-4 overflow-hidden rounded-xl" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerArr" :key="item.id"><img :src="item" alt="" /></van-swipe-item>
    </van-swipe>
    <!-- 轮播结束 -->

    <!-- 发现开始 -->
    <ul class="menu flex overflow-auto pb-3 mt-3">
      <li v-for="item in menuArr" :key="item.id" class="w-[20%] flex flex-col items-center mr-3">
        <img :src="item.iconUrl" alt="" class="w-[30px] max-w-none bg-red-700 mb-2 rounded" />
        <span class="whitespace-nowrap text-sm text-gray-400">{{
          item.name
        }}</span>
      </li>
    </ul>
    <!-- 发现结束 -->

    <!-- 推荐歌单开始 -->
    <section>
      <h1 class="flex justify-between items-center my-3">
        <div class="flex justify-between items-center">
          <span class="font-black">推荐歌单</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
              <path
                d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
              <path fill="currentColor"
                d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z" />
            </g>
          </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z" />
        </svg>
      </h1>
      <ul class="recommend flex overflow-auto">
        <li v-for="item in recommendArr" :key="item.id" class="flex flex-col items-center mr-4">
          <img :src="item.picUrl" alt="" class="w-[30vw] max-w-none rounded" />
          <span class="tracking-widest text-sm line-clamp-2">{{
            item.name
          }}</span>
        </li>
      </ul>
    </section>
    <!-- 推荐歌单结束 -->

    <!-- 新歌速递（新歌新碟）开始 -->
    <section>
      <h1 class="flex justify-between items-center my-3">
        <div class="flex justify-between items-center">
          <span class=" font-black">新歌新碟\数字专辑</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
              <path
                d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
              <path fill="currentColor"
                d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z" />
            </g>
          </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z" />
        </svg>
      </h1>

      <van-swipe class="my-swipe" :indicator="false" :loop="false" indicator-color="white">
        <van-swipe-item class="flex flex-col items-start py-3 border-y" v-for="item in newsongArr" :key="item.id">
          <div class="flex my-3" v-for="item in item.resources" :key="item.id">
            <img class="w-[15vw] h-[15vw] mr-3 rounded" :src="item.uiElement.image.imageUrl" alt="" />
            <div class="flex flex-col justify-between">
              <p class="text-sm">{{ item.uiElement.mainTitle.title }}</p>
              <p class="text-sm">{{ item.uiElement.subTitle.title }}</p>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </section>
    <!-- 新歌速递（新歌新碟）结束 -->


    <!-- 排行榜 -->
    <section>
      <h1 class="flex justify-between items-center my-3">
        <div class="flex justify-between items-center">
          <span class="font-black">排行榜</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
              <path
                d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
              <path fill="currentColor"
                d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z" />
            </g>
          </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z" />
        </svg>
      </h1>
      <van-swipe class="my-swipe" :loop="false" indicator-color="white">
        <van-swipe-item v-for="item in RankingArr" :key="item.id" class="">
          <div :key="item.id" class="p-4 overflow-hidden bg-white rounded-xl">
            <div class="flex justify-between">
              <h1 class=" font-bold text-base tracking-widest flex items-center">
                {{ item.uiElement.mainTitle.title }}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                    <path fill="currentColor"
                      d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z" />
                  </g>
                </svg>
              </h1>
              <p class="overflow-hidden whitespace-nowrap font-medium text-sm text-stone-500 tracking-wider">
                {{ item.uiElement.mainTitle.titleDesc }}
              </p>
            </div>
            <div class="">
              <div v-for="(items, index) in 3" :key="index.id" class="my-4">
                <div class="flex">
                  <img :src="item.resources[index].resourceExtInfo?.songData.album
                    .blurPicUrl
                    " class="w-[15vw] h-[15vw] rounded" alt="" />
                  <div class="text-center flex items-center mx-3 justify-center">
                    <span v-if="index == 0" class=" text-yellow-300 font-black">
                      {{ index + 1 }}
                    </span>
                    <span v-if="index == 1" class=" text-zinc-400 font-black">
                      {{ index + 1 }}
                    </span>
                    <span v-if="index == 2" class=" text-yellow-700 font-black">
                      {{ index + 1 }}
                    </span>
                  </div>
                  <div class="flex flex-col justify-between">
                    <p class=" text-lg font-normal w-[40vw] text-ellipsis overflow-hidden whitespace-nowrap">
                      {{ item.resources[index].resourceExtInfo?.songData.name }}
                    </p>
                    <p class=" text-sm from-stone-500">
                      {{ item.resources[index].resourceExtInfo?.artists[0].name }}
                    </p>
                  </div>
                  <div class="flex items-center ml-auto text-xs font-bold justify-center">
                    <span class=" text-orange-700">{{
                      item.resources[index]?.uiElement.labelText.text
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </section>
    <!-- 排行榜结束 -->

    <!-- 热门话题开始 -->
    <section>
      <h1 class="flex justify-between items-center my-3">
        <div class="flex justify-between items-center">
          <span class="font-black">热门话题</span>

        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z" />
        </svg>
      </h1>

      <ul class="menu flex overflow-auto">
        <li class="w-[70%]" v-for="item in hottapicArr" :key="item.id">
          <img src="" alt="">
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash'
import { fetchSearchResult, newSong } from '@/request/index';
import 'vant/lib/index.css';

export default {
  data() {
    return {
      searchName: '', //搜索框热搜
      defaultsearch: {},
      defaultResult:[],
      userSearchKeywords: '',
      bannerArr: [], //轮播图数据
      menuArr: [], //菜单数据
      recommendArr: [], //推荐歌单数据
      newsongArr: [], //新歌速递数据
      RankingArr: [],//排行榜
      hottapicArr: [],//热门话题
    };
  },
  methods: {
    /**
     * @description 获取热搜关键词
     */
    searchHot() {
      axios
        .get(
          'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/search/default'
        )
        .then((res) => {
          this.searchName = res.data.data.showKeyword;

        })
        .catch((err) => console.log(err));
    },
    serachHandler() {
      fetchSearchResult({ keywords: this.userSearchKeywords || this.searchName })
        .then(res => console.log(res.data.result.songs))
        .catch(err => console.log(err))
    },
  },
  watch: {
    // 搜索建议
    userSearchKeywords:_.debounce(function(newkeywords){
      // if (newkeywords) {
            axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/search/suggest', {
              params: {
                keywords: newkeywords
              }
            }).then(res => {
              console.log(res.data.result.songs)
              this.defaultResult = res.data.result.songs
              console.log(this.defaultResult)
            })
              .catch(err => console.log(err))
          // }

    },500)

  },

  created() {
    this.searchHot();
    // 轮播图请求
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/banner?type=2'
      )
      .then((res) => {
        let arr = res.data.banners;
        arr.forEach((item) => {
          this.bannerArr.push(item.pic);
        });
      })
      .catch((err) => {
        console.log(err);
      });

    // 发现请求
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball'
      )
      .then((res) => {
        //  console.log(res.data.data)
        this.menuArr = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });

    //每日推荐歌单请求
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized'
      )
      .then((res) => {
        // console.log(res.data.result);
        this.recommendArr = res.data.result;
      })
      .catch((err) => {
        console.log(err);
      });

    //新歌速递请求
    newSong()
      .then((res) => {
        this.newsongArr = res.data.data.blocks[5].creatives;
        this.RankingArr = res.data.data.blocks[3].creatives;//排行榜数据
      })
      .catch((err) => console.log(err));


    // 音乐日历请求
      // axios.get('')

  },
};
</script>

<style>
/* 滚动条整体样式 */
.menu::-webkit-scrollbar,
.recommend::-webkit-scrollbar {
  height: 0px;
}
</style>
