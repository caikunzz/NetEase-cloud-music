<template>
  <div :class="{ dark: switchcheck }">
    <div
      class="overflow-hidden relative box-border p-5 bg-gradient-to-b via-gray-100 to-gray-100 dark:bg-zinc-800 text-[#000] dark:text-[#fff]"
      :class="{ 'from-purple-200': !switchcheck }">
      <!-- <viewmove></viewmove> -->

      <section>
        <search :userSearchKeywords.sync="userSearchKeywords" :serachHandler="serachHandler"
          :defaultResult="defaultResult" :searchName="searchName" :title.sync="title" :visible.sync="mineVisible"
          :visibless.sync="sousuoVisible" :switchcheck="switchcheck" />
      </section>
      <!-- 头部结束 -->

      <!-- 轮播开始 -->
      <van-swipe class="my-swipe mt-4 overflow-hidden rounded-xl" :autoplay="3000" indicator-color="white"
        :show-indicators="false">
        <van-swipe-item class="relative" v-for="item in bannerArr" :key="item.id">
          <img class="w-[100%]" :src="item.pic" alt="" />
          <span class="absolute bottom-1 right-2 bg-white dark:bg-slate-950 rounded text-xs px-2">{{
            item.typeTitle
          }}</span>
        </van-swipe-item>
      </van-swipe>
      <!-- 轮播结束 -->

      <!-- 发现开始 -->
      <section class="menu flex overflow-auto pb-3 mt-3">
        <menulist v-for="item in menuArr" :key="item.id" class="w-[15vw] flex flex-col items-center mr-3" :menu="item">
        </menulist>
      </section>

      <!-- 发现结束 -->

      <!-- 推荐歌单开始 -->
      <!-- <section>
            <RecommondPlaylistitem :recommendArr="recommendArr" />
        </section> -->

      <pnael :label="'推荐歌单'" :visible.sync="drawerVisible" :title.sync="title">
        <RecommondPlaylistitem :recommendArr="recommendArr" />
      </pnael>
      <!-- 推荐歌单结束 -->

      <!-- 新歌速递（新歌新碟）开始 -->
      <section>
        <newsong :newsongArr="newsongArr" :visible.sync="drawerVisible" :title.sync="title" />
      </section>
      <!-- 新歌速递（新歌新碟）结束 -->

      <!-- 排行榜 -->
      <section>
        <paihang :RankingArr="RankingArr" :visible.sync="drawerVisible" :title.sync="title" />
      </section>
      <!-- 排行榜结束 -->

      <!-- 热门话题开始 -->
      <section>
        <hottalk :visible.sync="drawerVisible" :title.sync="title" />
      </section>
      <!-- 热门话题开始 -->

      <!-- 音乐日历开始 -->
      <section>
        <musiccalendar :musiccalendarArr="musiccalendarArr" :today="today" :visible.sync="drawerVisible"
          :title.sync="title" />
      </section>
      <!-- 音乐日历结束 -->

      <Drawer :visible.sync="drawerVisible" direction="btt" :title="title" width="100vw">

        <div class="flex item-center my-[3vw]">
          <Icon class="mr-3" icon="uiw:like-o" />
          <span>优先推荐</span>
        </div>
        <div class="flex item-center my-[3vw]">
          <Icon class="mr-3" icon="ion:heart-dislike-outline" :horizontalFlip="true" />
          <span>减少推荐</span>
        </div>
        <div class="flex item-center my-[3vw]">
          <Icon class="mr-3" icon="codicon:refresh" :rotate="3" :horizontalFlip="true" :verticalFlip="true" />
          <span>刷新</span>
        </div>
      </Drawer>

      <Drawer :visible.sync="mineVisible" :direction="'ltr'" :title="title" :switchcheck="switchcheck">
        <header slot="header" class="flex items-center overflow-hidden justify-between box-border pr-[3vw]">
          <div class="flex items-center" @click="personalDetails">
            <img class="rounded-[50%] w-[10%]"
              :src="userinfo?.avatarUrl" alt="" />
            <span class="mx-[2vw] font-extrabold">{{ userinfo?.nickname }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 208 456">
              <path fill="currentColor"
                d="M9 388q8 4 15 4q11 0 17-6l162-186L41 14Q26-1 11 12Q-4 29 9 42l137 156L9 354q-13 19 0 34z" />
            </svg>
          </div>
          <Icon icon="lucide:scan-line" class="w-[20px]"/>
        </header>
        <div class="overflow-auto h-[100vh] pb-[20vh]">
          <div>
            <div
              class="rounded-[5vw] bg-gradient-to-tr from-neutral-950 to-yellow-950 bg-opacity-75 box-border px-[4vw] pt-[4vw] text-[#e1e3e7]">
              <div class=" ">
                <div class="flex justify-between items-center">
                  <p class="font-bold mb-1 tracking-wide">续费黑胶VIP</p>
                  <p class="px-2 py-1 border text-xs text-orange-50 border-orange-50 rounded-xl">
                    会员中心
                  </p>
                </div>
                <p class="flex items-center text-sm">
                  点击回复21项专属特权
                  <Icon icon="ant-design:right-outlined" color="white" />
                </p>
              </div>
              <div class="flex justify-between items-center">
                <p class="text-sm whitespace-nowrap">
                  受邀专享，黑胶VIP仅0.29元/天！
                </p>
                <p class="flex flex-wrap rounded overflow-hidden bg-orange-500 py-2 origin-center scale-50">
                  <span class="w-[50%] text-white font-bold text-md text-center">受</span>
                  <span class="w-[50%] text-white font-bold text-md text-center">邀</span>
                  <span class="w-[50%] text-white font-bold text-md text-center">专</span>
                  <span class="w-[50%] text-white font-bold text-md text-center">享</span>
                </p>
              </div>
            </div>
          </div>

          <!-- 消息中心 -->
          <ul class="rounded-[5vw] bg-white box-border dark:bg-black px-[4vw] overflow-hidden my-[4vw] shadow">
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="carbon:email" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">消息中心</span>
              </p>
              <p class="flex items-center">
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="cib:shell" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">云贝中心</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs">签到</span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="mdi:lightbulb-on-outline" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">创作者中心</span>
              </p>
              <p class="flex items-center">
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
          </ul>

          <!-- 音乐服务 -->
          <ul class="rounded-[5vw] bg-white box-border dark:bg-black px-[4vw] overflow-hidden my-[4vw] shadow">
            <li class="text-xs text-gray-400 pt-[3vw]">音乐服务</li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="emojione-monotone:dotted-six-pointed-star" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">趣测</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs">查看今日运势</span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="fluent:ticket-diagonal-16-regular" :rotate="2" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">云村有票</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs">签到</span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="solar:box-broken" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">多多西口袋</span>
              </p>
              <p class="flex items-center">
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="icon-park-outline:shopping-bag" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">商城</span>
              </p>
              <p class="flex items-center">
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="ph:heartbeat" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">Beat专区</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs">顶尖制作邀你创作</span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="tabler:bell-ringing-2" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">口袋彩铃</span>
              </p>
              <p class="flex items-center">
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="icon-park-outline:game-handle" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">游戏专区</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs">音乐浇灌治愈花园</span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
          </ul>

          <!-- 其他 -->
          <ul class="rounded-[5vw] bg-white box-border dark:bg-black px-[4vw] overflow-hidden my-[4vw] shadow">
            <li class="text-xs text-gray-400 pt-[3vw]">其他</li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="icon-park-outline:setting-one" :rotate="3" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">设置</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs"></span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="line-md:light-dark-loop" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">深色模式</span>
              </p>
              <p class="flex items-center">
                <!-- <van-switch v-model="checked" size="5vw" /> -->
                <v-switch v-model="switchcheck"></v-switch>
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="gala:clock" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">定时关闭</span>
              </p>
              <p class="flex items-center">
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="streamline:shopping-catergories-shirt-clothing-t-shirt-men-top" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">个性装扮</span>
              </p>
              <p class="flex items-center">
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="teenyicons:headset-outline" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">边听边存</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs">未开启</span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="icon-park-outline:online-meeting" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">在线听歌免流量</span>
              </p>
              <p class="flex items-center">
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="iconoir:apple-shortcuts" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">添加Siri捷径</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs"></span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="uiw:stop-o" :rotate="2" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">音乐黑名单</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs"></span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="gala:secure" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">青少年模式</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs"></span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="mdi:alarm-clock" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">音乐闹钟</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs"></span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
          </ul>

          <ul class="rounded-[5vw] bg-white box-border px-[4vw] dark:bg-black overflow-hidden my-[4vw] shadow">
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="teenyicons:headset-outline" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">我的客服</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs"></span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="mdi:paper-text-outline" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">我的订单</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs"></span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="ri:coupon-line" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">优惠券</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs"></span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="ri:share-circle-line" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">分享网易云音乐</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs"></span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon
                  icon="streamline:interface-file-clipboard-check-checkmark-edit-task-edition-checklist-check-success-clipboard-form" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">个人信息收集与使用清单</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs"></span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="solar:share-circle-outline" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">个人信息第三方共享清单</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs"></span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="material-symbols:privacy-tip-outline-rounded" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">个人信息与隐私保护</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs"></span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
            <li class="flex justify-between items-center py-[3vw] dark:border-none border-b">
              <p class="flex items-center">
                <Icon icon="mi:circle-information" />
                <span class="ml-2 tracking-wider whitespace-nowrap text-xs">关于</span>
              </p>
              <p class="flex items-center">
                <span class="text-gray-400 text-xs"></span>
                <Icon icon="mingcute:right-line" color="#ccc" />
              </p>
            </li>
          </ul>

          <ul class="rounded-[3vw] bg-white dark:bg-black box-border p-[4vw] overflow-hidden my-[4vw] shadow">
            <li class="text-center text-red-500">退出登录</li>
          </ul>
        </div>
      </Drawer>

      <Drawer :visible.sync="sousuoVisible" :direction="'rtl'" :headershow="false" :width="'100vw'" :title="title"
        :switchcheck="switchcheck">
        <sousuoview :visibles.sync="sousuoVisible" :width="width"></sousuoview>
      </Drawer>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import { getBanner, getFind, fetchSearchResult, newSong, getMusicCalendar,getUserAccount,getUserSubcount } from '@/request/index';
import 'vant/lib/index.css';
import BScroll from '@better-scroll/core';

import RecommondPlaylistitem from './components/RecommondPlaylistitem.vue';
import menulist from './components/menulist.vue';
import search from './components/search.vue';
import paihang from './components/paihang.vue';
import newsong from './components/newSongs.vue';
import hottalk from './components/hottalk.vue';
import musiccalendar from './components/musiccalendar.vue';
import Pnael from './components/Panel.vue';
import Drawer from '@/components/Drawer.vue';
import sousuoview from '../SousuoView.vue'
import _store  from "storejs";

import {mapState} from '@/vuex'


export default {
  components: {
    RecommondPlaylistitem,
    menulist,
    search,
    paihang,
    newsong,
    hottalk,
    musiccalendar,
    Pnael,
    Drawer,
    sousuoview
  },
  data() {
    return {
      width: 300,
      sousuoVisible: false,
      switchcheck: false,
      checked: false,
      mineVisible: false,
      title: '推荐歌单',
      drawerVisible: false,
      vivs: true,
      searchName: '', //搜索框热搜
      defaultsearch: {},
      defaultResult: [],
      userSearchKeywords: '',
      bannerArr: [], //轮播图数据
      menuArr: [], //菜单数据
      recommendArr: [], //推荐歌单数据 热门话题借用
      newsongArr: [], //新歌速递数据
      RankingArr: [], //排行榜数据
      hottapicArr: [], //热门话题数据
      musiccalendarArr: [], //音乐日历数据
      today: '',
    };
  },
  methods: {
    // 跳转到详情页面
    personalDetails(){
      this.$router.push('PersonalView')
    },
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
      fetchSearchResult({
        keywords: this.userSearchKeywords || this.searchName,
      })
        .then((res) => console.log(res.data.result.songs))
        .catch((err) => console.log(err));
    },
  },
  watch: {
    // 搜索建议
    userSearchKeywords: _.debounce(function (newkeywords) {
      axios
        .get(
          'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/search/suggest',
          {
            params: {
              keywords: newkeywords,
            },
          }
        )
        .then((res) => {
          this.defaultResult = res.data.result.songs;
        })
        .catch((err) => console.log(err));
    }, 500),
  },
  mounted(){
    this.width = document.body.offsetWidth;
    // console.log(this.width)
  },
  computed:{
    ...mapState(['userinfo']),
  },

  beforeCreate(){
    if(_store.get('profile')){
      const userinfo = JSON.parse(_store.get('profile'))
      this.$store.state.userinfo = userinfo
      console.log(this.$store.state.userinfo)
      console.log(this)
    }
  },

  async created() {
    const accountres = await getUserAccount().catch(err=>console.log(err))
    // console.log(accountres.data)
    
    if(accountres.data.code==200){
      // 存储用户信息到本地存储中
      _store.set('profile',JSON.stringify(accountres.data.profile))
    }

    // if(_store.get('profile')){
    //   const userinfo = JSON.parse(_store.get('profile'))
    //   this.$store.state.userinfo = userinfo
    //   console.log(this.$store.state.userinfo)
    //   console.log(this)
    // }
    



    const nowDay = new Date();
    this.today = `${nowDay.getMonth() + 1 > 9
      ? nowDay.getMonth() + 1
      : '0' + (nowDay.getMonth() + 1)
      }/${nowDay.getDate()}`;
    // console.log(this.today)
    this.searchHot();
    // 轮播图请求
    let bannerres = await getBanner().catch((err) => { console.log(err); });
    this.bannerArr = bannerres.data.banners;

    // 发现请求
    const findres = await getFind().catch((err) => { console.log(err); });
    this.menuArr = findres.data.data;


    // 新歌新碟
    axios.get('https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page')
      .then((res => {
        this.newsongArr = res.data.data.blocks[5].creatives
        this.RankingArr = res.data.data.blocks[3].creatives; //排行榜数据
      }))
      .catch(err => console.log(err))
    //新歌速递请求


    let newsongres = await newSong().catch((err) => console.log(err));
    this.recommendArr = newsongres.data.data.blocks[1].creatives;
    // this.RankingArr = newsongres.data.data.blocks[3].creatives; //排行榜数据
    // console.log(newsongres.data.data.blocks[3].creatives)
    this.hottapicArr = newsongres.data.data.blocks[2].creatives;


    //音乐日历请求
    let today = new Date();
    let startTime = today.getTime();
    today.setDate(today.getDate() + 2);
    let endTime = today.getTime();

    const musicres = await getMusicCalendar({ startTime, endTime }).catch((err) => console.log(err));
    this.musiccalendarArr.push(musicres.data.data.calendarEvents[0]);
    this.musiccalendarArr.push(musicres.data.data.calendarEvents[1]);

    
//     getUserAccount()
// .then((res)=>{
//   console.log(res.data.profile);
//   _store.set('userID',res.data.account.id);
//   _store.set('userInfo',res.data.profile);
//   getUserSubcount()
//   .then((res)=>{console.log(res)})
//   .catch(err=>console.log(err))
// })
// .catch(err=>console.log(err))




  },
};
</script>

<style>
/* 滚动条整体样式 */
.menu::-webkit-scrollbar,
.recommend::-webkit-scrollbar {
  height: 0px;
}

.red-image {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
}

.abc-enter {
  transform: translateY(100%) scale(0.7);
  transform-origin: center;
}

.abc-enter-active {
  transition: all ease-in-out 1.2s;
}

.abc-enter-to {
  transform: translateY(0) scale(1);
  transform-origin: center;
}

.abc-leave {
  transform: translateY(0) scale(1);
  transform-origin: center;
}

.abc-leave-active {
  transition: all ease-in-out 1.2s;
}

.abc-leave-to {
  transform: translateY(-100%) scale(0.7);
  transform-origin: center;
}
</style>
