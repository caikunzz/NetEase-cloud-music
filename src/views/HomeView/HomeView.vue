<template>
  <div
    class="overflow-hidden relative box-border p-5 bg-gradient-to-b from-purple-200 via-gray-100 to-gray-100"
  >
    <!-- <viewmove></viewmove> -->

    <section>
      <search
        :userSearchKeywords.sync="userSearchKeywords"
        :serachHandler="serachHandler"
        :defaultResult="defaultResult"
        :searchName="searchName"
        :title.sync="title"
        :visible.sync="mineVisible"
      />
    </section>
    <!-- 头部结束 -->

    <!-- 轮播开始 -->
    <van-swipe
      class="my-swipe mt-4 overflow-hidden rounded-xl"
      :autoplay="3000"
      indicator-color="white"
      :show-indicators="false"
    >
      <van-swipe-item class="relative" v-for="item in bannerArr" :key="item.id">
        <img class="w-[100%]" :src="item.pic" alt="" />
        <span class="absolute bottom-1 right-2 bg-white rounded text-xs px-2">{{
          item.typeTitle
        }}</span>
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播结束 -->

    <!-- 发现开始 -->
    <section class="menu flex overflow-auto pb-3 mt-3">
      <menulist
        v-for="item in menuArr"
        :key="item.id"
        class="w-[15vw] flex flex-col items-center mr-3"
        :menu="item"
      >
      </menulist>
    </section>

    <!-- 发现结束 -->

    <!-- 推荐歌单开始 -->
    <!-- <section>
            <RecommondPlaylistitem :recommendArr="recommendArr" />
        </section> -->

    <pnael
      :label="'推荐歌单'"
      :visible.sync="drawerVisible"
      :title.sync="title"
    >
      <RecommondPlaylistitem :recommendArr="recommendArr" />
    </pnael>
    <!-- 推荐歌单结束 -->

    <!-- 新歌速递（新歌新碟）开始 -->
    <section>
      <newsong
        :newsongArr="newsongArr"
        :visible.sync="drawerVisible"
        :title.sync="title"
      />
    </section>
    <!-- 新歌速递（新歌新碟）结束 -->

    <!-- 排行榜 -->
    <section>
      <paihang
        :RankingArr="RankingArr"
        :visible.sync="drawerVisible"
        :title.sync="title"
      />
    </section>
    <!-- 排行榜结束 -->

    <!-- 热门话题开始 -->
    <section>
      <hottalk :visible.sync="drawerVisible" :title.sync="title" />
    </section>
    <!-- 热门话题开始 -->

    <!-- 音乐日历开始 -->
    <section>
      <musiccalendar
        :musiccalendarArr="musiccalendarArr"
        :today="today"
        :visible.sync="drawerVisible"
        :title.sync="title"
      />
    </section>
    <!-- 音乐日历结束 -->
    <!-- <button @click="vivs = !vivs">toggle</button>
    <div class="w-[200px] h-[200px] border  overflow-hidden relative">
      <transition name="abc" class="">
        <div v-if="vivs" class="w-[200px] absolute h-[200px] bg-orange-400"></div>
      </transition>
      <transition name="abc" class="">
        <div v-if="!vivs" class="w-[200px] absolute h-[200px] bg-blue-400"></div>
      </transition>
    </div> -->

    <!-- <Drawer :visible.sync="drawerVisible" class=" fixed left-0 bottom-0 w-[100vw]">
      <template #header>
        <div class="flex justify-between items-center">
          <p>推荐歌单</p>
          <Icon icon="ic:round-close" />
        </div>
      </template>
    </Drawer> -->
    <!-- <button @click="drawerVisible = !drawerVisible">drawerVisibleToggle</button> -->
    <Drawer
      :visible.sync="drawerVisible"
      direction="btt"
      :title="title"
      width="100vw"
    >
      <!-- <template #header>
        <div class="flex justify-between items-center">
          <p>推荐歌单</p>
          <Icon icon="clarity:times-line" />
        </div>
      </template> -->
      <div class="flex item-center my-[3vw]">
        <Icon class="mr-3" icon="uiw:like-o" />
        <span>优先推荐</span>
      </div>
      <div class="flex item-center my-[3vw]">
        <Icon
          class="mr-3"
          icon="ion:heart-dislike-outline"
          :horizontalFlip="true"
        />
        <span>减少推荐</span>
      </div>
      <div class="flex item-center my-[3vw]">
        <Icon
          class="mr-3"
          icon="codicon:refresh"
          :rotate="3"
          :horizontalFlip="true"
          :verticalFlip="true"
        />
        <span>刷新</span>
      </div>
    </Drawer>

    <Drawer :visible.sync="mineVisible" :direction="'ltr'" :title="title">
      <header
        slot="header"
        class="flex items-center overflow-hidden justify-around box-border pr-[3vw]"
      >
        <div class="flex items-center">
          <img
            class="rounded-[50%] w-[10%]"
            src="https://p1.music.126.net/jS92kW49E37VDr8f6A1ZKg==/109951167550777780.jpg"
            alt=""
          />
          <span class="mx-[2vw] font-extrabold">守护最好的kunkun</span>
          <Icon icon="icon-park:right" />
        </div>
        <Icon icon="lucide:scan-line" width="15vw" height="15vw" />
      </header>
      <div class="overflow-auto min-h-screen h-screen pb-[20vh]">
        <div>
          <div
            class="rounded-[5vw] bg-orange-950 box-border p-[4vw] text-[#e1e3e7]"
          >
            <div class=" ">
              <div class="flex justify-between items-center">
                <p class="font-bold mb-1">续费黑胶VIP</p>
                <p class="px-2 border border-white rounded-xl">会员中心</p>
              </div>
              <p class="flex items-center text-sm">
                点击回复21项专属特权<Icon
                  icon="ant-design:right-outlined"
                  color="white"
                />
              </p>
            </div>
            <div class="flex justify-between items-center">
              <p class="text-sm">受邀专享，黑胶VIP仅0.29元/天！</p>
              <p
                class="flex flex-wrap rounded overflow-hidden bg-orange-500 py-2"
              >
                <span class="w-[50%] text-white text-xs text-center">受</span>
                <span class="w-[50%] text-white text-xs text-center">邀</span>
                <span class="w-[50%] text-white text-xs text-center">专</span>
                <span class="w-[50%] text-white text-xs text-center">享</span>
              </p>
            </div>
          </div>
        </div>

        <!-- 消息中心 -->
        <ul
          class="rounded-[5vw] bg-white box-border px-[4vw] overflow-hidden my-[4vw] shadow"
        >
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="carbon:email" />
              <span class="ml-2 tracking-wider">消息中心</span>
            </p>
            <p class="flex items-center">
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="cib:shell" />
              <span class="ml-2 tracking-wider">云贝中心</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs">签到</span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="mdi:lightbulb-on-outline" />
              <span class="ml-2 tracking-wider">创作者中心</span>
            </p>
            <p class="flex items-center">
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
        </ul>

        <!-- 音乐服务 -->
        <ul
          class="rounded-[5vw] bg-white box-border px-[4vw] overflow-hidden my-[4vw] shadow"
        >
          <li class="text-xs text-gray-400 pt-[3vw]">音乐服务</li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="emojione-monotone:dotted-six-pointed-star" />
              <span class="ml-2 tracking-wider">趣测</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs">查看今日运势</span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="fluent:ticket-diagonal-16-regular" :rotate="2" />
              <span class="ml-2 tracking-wider">云村有票</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs">签到</span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="solar:box-broken" />
              <span class="ml-2 tracking-wider">多多西口袋</span>
            </p>
            <p class="flex items-center">
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="icon-park-outline:shopping-bag" />
              <span class="ml-2 tracking-wider">商城</span>
            </p>
            <p class="flex items-center">
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="ph:heartbeat" />
              <span class="ml-2 tracking-wider">Beat专区</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs">顶尖制作邀你创作</span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="tabler:bell-ringing-2" />
              <span class="ml-2 tracking-wider">口袋彩铃</span>
            </p>
            <p class="flex items-center">
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="icon-park-outline:game-handle" />
              <span class="ml-2 tracking-wider">游戏专区</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs">音乐浇灌治愈花园</span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
        </ul>

        <!-- 其他 -->
        <ul
          class="rounded-[5vw] bg-white box-border px-[4vw] overflow-hidden my-[4vw] shadow"
        >
          <li class="text-xs text-gray-400 pt-[3vw]">其他</li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="icon-park-outline:setting-one" :rotate="3" />
              <span class="ml-2 tracking-wider">设置</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs"></span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="line-md:light-dark-loop" />
              <span class="ml-2 tracking-wider">深色模式</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs">签到</span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="gala:clock" />
              <span class="ml-2 tracking-wider">定时关闭</span>
            </p>
            <p class="flex items-center">
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon
                icon="streamline:shopping-catergories-shirt-clothing-t-shirt-men-top"
              />
              <span class="ml-2 tracking-wider">个性装扮</span>
            </p>
            <p class="flex items-center">
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="teenyicons:headset-outline" />
              <span class="ml-2 tracking-wider">边听边存</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs">未开启</span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="icon-park-outline:online-meeting" />
              <span class="ml-2 tracking-wider">在线听歌免流量</span>
            </p>
            <p class="flex items-center">
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="iconoir:apple-shortcuts" />
              <span class="ml-2 tracking-wider">添加Siri捷径</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs"></span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="uiw:stop-o" :rotate="2" />
              <span class="ml-2 tracking-wider">音乐黑名单</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs"></span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="gala:secure" />
              <span class="ml-2 tracking-wider">青少年模式</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs"></span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="mdi:alarm-clock" />
              <span class="ml-2 tracking-wider">音乐闹钟</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs"></span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
        </ul>

        <ul
          class="rounded-[5vw] bg-white box-border px-[4vw] overflow-hidden my-[4vw] shadow"
        >
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="teenyicons:headset-outline" />
              <span class="ml-2 tracking-wider">我的客服</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs"></span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="mdi:paper-text-outline" />
              <span class="ml-2 tracking-wider">我的订单</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs"></span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="ri:coupon-line" />
              <span class="ml-2 tracking-wider">优惠券</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs"></span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="ri:share-circle-line" />
              <span class="ml-2 tracking-wider">分享网易云音乐</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs"></span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon
                icon="streamline:interface-file-clipboard-check-checkmark-edit-task-edition-checklist-check-success-clipboard-form"
              />
              <span class="ml-2 tracking-wider">个人信息收集与使用清单</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs"></span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="solar:share-circle-outline" />
              <span class="ml-2 tracking-wider">个人信息第三方共享清单</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs"></span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="material-symbols:privacy-tip-outline-rounded" />
              <span class="ml-2 tracking-wider">个人信息与隐私保护</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs"></span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
          <li class="flex justify-between items-center py-[3vw] border-b">
            <p class="flex items-center">
              <Icon icon="mi:circle-information" />
              <span class="ml-2 tracking-wider">关于</span>
            </p>
            <p class="flex items-center">
              <span class="text-gray-400 text-xs"></span>
              <Icon icon="mingcute:right-line" color="#ccc" />
            </p>
          </li>
        </ul>

        <ul
          class="rounded-[3vw] bg-white box-border p-[4vw] overflow-hidden my-[4vw] shadow"
        >
          <li class="text-center text-red-500">退出登录</li>
        </ul>
      </div>
    </Drawer>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import { fetchSearchResult, newSong, getMusicCalendar } from '@/request/index';
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
  },
  data() {
    return {
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

  created() {
    const nowDay = new Date();
    this.today = `${
      nowDay.getMonth() + 1 > 9
        ? nowDay.getMonth() + 1
        : '0' + (nowDay.getMonth() + 1)
    }/${nowDay.getDate()}`;
    // console.log(this.today)
    this.searchHot();
    // 轮播图请求
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/banner?type=2'
      )
      .then((res) => {
        this.bannerArr = res.data.banners;
        // let arr = res.data.banners;
        // console.log(res)
        // arr.forEach((item) => {
        //     this.bannerArr.push(item.pic);
        // });
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
        // console.log(res.data.data)
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
        this.recommendArr = res.data.result;
      })
      .catch((err) => {
        console.log(err);
      });

    //新歌速递请求
    newSong()
      .then((res) => {
        this.newsongArr = res.data.data.blocks[5].creatives;
        this.RankingArr = res.data.data.blocks[3].creatives; //排行榜数据
        this.hottapicArr = res.data.data.blocks[2].creatives;
      })
      .catch((err) => console.log(err));

    //音乐日历请求
    let today = new Date();
    let startTime = today.getTime();
    today.setDate(today.getDate() + 1);
    let endTime = today.getTime();
    // console.log(starTime, endTime);
    getMusicCalendar({ startTime, endTime })
      .then((res) => {
        // console.log(res.data.data.calendarEvents);
        this.musiccalendarArr.push(res.data.data.calendarEvents[0]);
        this.musiccalendarArr.push(res.data.data.calendarEvents[1]);
      })
      .catch((err) => console.log(err));
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
