<template>
  <div class="box-border bg-gray-100 p-4 w-[100%] flex flex-col h-screen relative dark:bg-black">
    <header class="flex h-[5%] justify-between items-center relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 208 448" @click="toback">
        <path fill="currentColor"
          d="M181 384q7 0 15-4q17-17 2-30L60 192L196 36q15-13-2-30q-14-14-30 3L4 192l162 186q4 6 15 6z" />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        class="absolute left-[12%] text-gray-500" @click="searchres">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z" />
      </svg>
      <input type="text" class="rounded-2xl py-[2px] pl-[10%] border-2 w-[80%] text-base text-gray-500 dark:bg-black"
        :placeholder="defaultres" v-model="serarchworlds" />
      <span class="font-bold" @click="searchres">搜索</span>
    </header>
    <main class="flex-auto overflow-auto">
      <ul class="flex justify-between items-center my-4">
        <li class="flex items-end dark:bg-black">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-red-500" width="24" height="24" viewBox="0 0 48 48">
            <mask id="ipSPeople0">
              <path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                d="M24 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14ZM6 40.8V42h36v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C35.92 28 33.68 28 29.2 28H18.8c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C6 34.08 6 36.32 6 40.8Z" />
            </mask>
            <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPeople0)" />
          </svg>
          <span class="font-semibold text-sm">歌手</span>
        </li>
        <li class="text-gray-300">|</li>
        <li class="flex items-end">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-red-500" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M16 9h-3v5.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 8 14.5a2.5 2.5 0 0 1 2.5-2.5c.57 0 1.08.19 1.5.5V7h4m3-4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" />
          </svg>
          <span class="font-semibold text-sm">曲风</span>
        </li>
        <li class="text-gray-300">|</li>
        <li class="flex items-end">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-red-500" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="m12.75 12.508l8.5-3.4v5.653a3.25 3.25 0 1 0 1.5 2.74V7.945c0-1.143 0-2.101-.08-2.865a7.747 7.747 0 0 0-.04-.315c-.078-.522-.214-1.008-.479-1.415a2.18 2.18 0 0 0-.62-.63l-.007-.005c-.708-.47-1.503-.437-2.322-.228c-.792.202-1.774.613-2.978 1.117l-2.094.876c-.565.236-1.043.437-1.418.644c-.4.22-.743.48-1.001.868c-.258.388-.366.805-.415 1.259c-.046.426-.046.945-.046 1.557v7.952a3.25 3.25 0 1 0 1.5 2.74v-6.993ZM7.75 2a.75.75 0 0 0-1.5 0v5.76a3.25 3.25 0 1 0 1.5 2.74V5.005c.699.504 1.53.745 2.25.745a.75.75 0 0 0 0-1.5a2.443 2.443 0 0 1-1.488-.552c-.434-.357-.762-.9-.762-1.698Z" />
          </svg>
          <span class="font-semibold text-sm">专区</span>
        </li>
        <li class="text-gray-300">|</li>
        <li class="flex items-end">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-red-500" width="24" height="24" viewBox="0 0 32 32">
            <path fill="currentColor"
              d="M23 14v3a7 7 0 0 1-14 0v-3H7v3a9 9 0 0 0 8 8.94V28h-4v2h10v-2h-4v-2.06A9 9 0 0 0 25 17v-3Z" />
            <path fill="currentColor" d="M16 22a5 5 0 0 0 5-5V7a5 5 0 0 0-10 0v10a5 5 0 0 0 5 5Z" />
          </svg>
          <span class="font-semibold text-sm">识曲</span>
        </li>
      </ul>

      <!-- 搜索历史 -->
      <div v-show="historyserarch?.length > 0">
        <div class="flex items-center justify-between">
          <span class="font-semibold text-sm">搜索历史</span>
          <svg @click="clearAll" xmlns="http://www.w3.org/2000/svg" class="text-gray-500" width="16" height="16"
            viewBox="0 0 448 512">
            <path fill="currentColor"
              d="m170.5 51.6l-19 28.4h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6h-93.7c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6l36.7 55H424c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v304c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h69.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128v304c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V128H80zm80 64v208c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0v208c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0v208c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
          </svg>
        </div>
        <ul class="flex items-center flex-wrap my-2">
          <li class="text-xs rounded-xl dark:bg-zinc-600 px-3 py-[2px] bg-white mx-2 mb-2" v-for="item in historyserarch"
            :key="item.id">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- 猜你喜欢 -->

      <div>
        <div class="flex items-center justify-between">
          <span class="font-semibold text-sm">猜你喜欢</span>
          <svg @click="Refresh" xmlns="http://www.w3.org/2000/svg" class="text-gray-500" width="16" height="16"
            viewBox="0 0 32 32">
            <path fill="currentColor"
              d="M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z" />
          </svg>
        </div>
        <ul class="flex items-center flex-wrap my-2">
          <li class="text-xs rounded-xl px-3 py-[2px] dark:bg-zinc-600 bg-white mx-2 mb-2" v-for="item in youlikesearch"
            :key="item.id">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- 排行榜 -->

      <van-swipe class="my-swipe" :loop="false" :width="width" :show-indicators="false" v-if="paihangArr.length > 0">
        <van-swipe-item v-for="(i, key) in 11" :key="i.id" style="width: 70vw"
          class="flex dark:bg-zinc-800 flex-col justify-between w-[70vw] mr-[3vw] shadow overflow-hidden rounded-2xl box-border p-3 bg-white">
          <h1 class="flex items-center py-[3vw] border-b mb-2">
            <span class="font-bold mr-2">{{
              paihangArr[key].data.playlist.name
            }}</span>
            <span class="dark:bg-zinc-600 rounded-xl px-[1vw] text-xs bg-gray-200 flex items-center"><svg
                xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.736 4 21.276 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z" />
              </svg>播放</span>
          </h1>
          <div class="flex items-center" v-for="(item, index) in paihangArr[key].data.playlist.tracks" :key="item.id">
            <span class="mr-2 font-bold text-center w-8 text-orange-700" v-if="index < 3">{{ index + 1 }}</span>
            <span class="mr-2 font-bold text-center w-8 text-gray-500" v-else-if="index < 20">{{ index + 1 }}</span>
            <p class="whitespace-nowrap text-sm max-w-[80%] overflow-hidden overflow-ellipsis" v-if="index < 20">
              {{ item.name }}
            </p>
          </div>
        </van-swipe-item>
      </van-swipe>
    </main>

    <ul v-show="serarchworlds" class="mask absolute left-0 top-[6%] w-[100%] h-[94%] bg-white box-border pl-4">
      <li v-for="item in serarchResult" :key="item.id" class="flex item-center mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-gray-500 mr-3">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z" />
        </svg>
        <p>
          <!-- {{ item.keyword }} -->
          <span class="text-gray-500">{{
            item.keyword.slice(
              item.keyword.indexOf(serarchworlds),
              serarchworlds.length
            )
          }}</span>
          <span>{{ item.keyword.slice(serarchworlds.length) }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import BScroll from '@better-scroll/core';
let ph;
export default {
  props: ['visibles','width'],
  data() {
    return {
      defaultres: '',
      serarchworlds: '',
      serarchResult: [],
      historyserarch: ['坤坤', '姬霓太美'], //搜索历史
      youlikesearch: ['蔡徐坤', '吴亦凡'], //猜你喜欢
      youlikeAll: [
        '蔡徐坤',
        '吴亦凡',
        '那英',
        '李宗盛',
        '赵雷',
        '周杰伦',
        '李克勤',
        '伍佰',
      ], //猜你喜欢全部
      paihangArr: [], //排行榜
      filterarr: [
        '热搜榜',
        '说唱榜',
        '主播榜',
        '播客榜',
        '话题榜',
        '视频榜',
        '有声书榜',
        '民谣榜',
        '古风榜',
        '摇滚榜',
        'ACG榜',
      ],
    };
  },
  watch: {
    serarchworlds: _.debounce(function (newkeywords) {
      this.serarchResult = [];
      axios
        .get(
          'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/search/suggest',
          {
            params: {
              keywords: newkeywords,
              type: 'mobile',
            },
          }
        )
        .then((res) => {
          this.serarchResult = res.data.result.allMatch;
          // console.log(res.data.result.allMatch);
        })
        .catch((err) => console.log(err));
    }, 1000),
  },
  methods: {
    searchres() {
      axios
        .get(
          'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/search/suggest',
          {
            params: {
              keywords: this.serarchworlds,
              type: 'mobile',
            },
          }
        )
        .then((res) => {
          this.serarchResult = res.data.result.allMatch;
          console.log(res.data.result.allMatch);
        })
        .catch((err) => console.log(err));
    },
    Refresh() {
      this.youlikesearch = [];
      let ran = Math.ceil(Math.random() * (this.youlikeAll.length - 1));
      for (let i = 0; i < ran; i++) {
        let ran1 = Math.ceil(Math.random() * (this.youlikeAll.length - 1));
        if (!this.youlikesearch.includes(this.youlikeAll[ran1])) {
          this.youlikesearch.push(this.youlikeAll[ran1]);
        }
      }
    },
    clearAll() {
      this.historyserarch = [];
    },
    toback() {
      // this.$router.push('HomeView');
      console.log(this.visibles);
      this.$emit('update:visibles', false);
    },
  },
  async created() {
    window.vm = this;

    let defaultres = await axios.get(
      'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/search/default'
    );
    // console.log(defaultres.data.data.showKeyword);
    this.defaultres = defaultres.data.data.showKeyword;

    //排行榜
    let lists = await axios.get(
      'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/search/hot/detail'
    );
    // console.log(lists.data.data[0]);
    this.paihangArr = lists.data.data;

    // 榜单数据
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/toplist/detail'
      )
      .then((res) => {
        Promise.all(
          res.data.list.map((item) => {
            return axios.get(
              'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/playlist/detail',
              {
                params: {
                  id: item.id,
                },
              }
            );
          })
        ).then((res) => {
          // console.log(res);
          this.paihangArr = res;
        });
      });

  },

};
</script>

