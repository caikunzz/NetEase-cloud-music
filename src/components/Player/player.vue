<template>
    <div class=" py-[10px] shadow w-screen bg-[#f8f8f9] flex items-center justify-between box-border px-[4vw]">
        <div class="flex items-center">
            <img :src="this.songinfo?.al.picUrl" class=" rounded-[50%] w-[40px] h-[40px] mr-[2vw]" alt="">
            <p class="flex w-[200%] text-[12px] items-center whitespace-nowrap overflow-hidden  overflow-ellipsis"><span>{{
                this.songinfo?.al.name }}</span><span class="  text-[#777980]">-</span><span class="  text-[#777980]">{{
        this.songinfo?.ar[0].name }}</span></p>
        </div>
        <div class="flex items-center">


            <!-- <Icon class="text-[6vw] text-[#474857] " icon="zondicons:play-outline" /> -->
            <van-circle class=" relative mr-[6vw]" v-model="currentRate" :rate="80" :size="30" :stroke-width="60">
                <Icon style="width:20px;left:50%;transform: translateX(-50%);" icon="ion:play" />
            </van-circle>

            <Icon class="text-[35px] text-[#474857]" icon="iconamoon:playlist-bold" />
        </div>
    </div>
</template>

<script>
import Player from './player'

export default {
    data() {
        return {
            player: new Player(),
            songinfo: null,
            currentRate: 5,
        }
    },
    created() {
        window.$player = this.player;
        // console.log(JSON.parse(localStorage.getItem('songinfo')))
        this.songinfo = JSON.parse(localStorage.getItem('songinfo'))
    },
}
</script>