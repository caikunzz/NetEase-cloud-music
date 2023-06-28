<template>
    <div class="overflow-hidden box-border p-5 bg-gradient-to-b from-purple-200 via-gray-100 to-gray-100">
        <section>
            <search :userSearchKeywords="userSearchKeywords" :serachHandler="serachHandler" :defaultResult="defaultResult"
                :searchName="searchName" />
        </section>
        <!-- 头部结束 -->

        <!-- 轮播开始 -->
        <van-swipe class="my-swipe mt-4 overflow-hidden rounded-xl" :autoplay="3000" indicator-color="white" :show-indicators="false">
            <van-swipe-item class=" relative" v-for="item in bannerArr" :key="item.id">
                <img class="w-[100%]" :src="item.pic" alt="" />
                <span class=" absolute bottom-1 right-2 bg-white rounded text-xs px-2">{{ item.typeTitle }}</span>
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
        <section class="recommend flex overflow-auto">
            <RecommondPlaylistitem :recommendArr="recommendArr" />
        </section>
        <!-- 推荐歌单结束 -->

        <!-- 新歌速递（新歌新碟）开始 -->
        <section>
            <newsong :newsongArr="newsongArr" />
        </section>
        <!-- 新歌速递（新歌新碟）结束 -->

        <!-- 排行榜 -->
        <section>
            <paihang :RankingArr="RankingArr" />
        </section>
        <!-- 排行榜结束 -->

        <!-- 热门话题开始 -->
        <section>
            <hottalk />
        </section>
        <!-- 热门话题开始 -->

        <!-- 音乐日历开始 -->
        <section>
            <musiccalendar :musiccalendarArr="musiccalendarArr" :today="today"/>
        </section>
        <!-- 音乐日历结束 -->
    </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import { fetchSearchResult, newSong, getMusicCalendar } from '@/request/index';
import 'vant/lib/index.css';

import RecommondPlaylistitem from './components/RecommondPlaylistitem.vue';
import menulist from './components/menulist.vue';
import search from './components/search.vue';
import paihang from './components/paihang.vue';
import newsong from './components/newSongs.vue';
import hottalk from './components/hottalk.vue';
import musiccalendar from './components/musiccalendar.vue'

export default {
    components: {
        RecommondPlaylistitem,
        menulist,
        search,
        paihang,
        newsong,
        hottalk,
        musiccalendar,
    },
    data() {
        return {
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
            // if (newkeywords) {
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
                    // console.log(res.data.result.songs)
                    this.defaultResult = res.data.result.songs;
                    // console.log(this.defaultResult)
                })
                .catch((err) => console.log(err));
            // }
        }, 500),
    },

    created() {
        const nowDay = new Date();
        this.today = `${nowDay.getMonth() + 1 > 9
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
                this.bannerArr = res.data.banners
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
        let starTime = today.getTime();
        today.setDate(today.getDate() + 1);
        let endTime = today.getTime();
        // console.log(starTime, endTime);
        getMusicCalendar({ starTime, endTime })
            .then((res) => {
                // console.log(res.data.data.calendarEvents);
                this.musiccalendarArr = res.data.data.calendarEvents;
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
</style>
