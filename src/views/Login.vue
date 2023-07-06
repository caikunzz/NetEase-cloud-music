<template>
    <div class=" box-border w-[100vw] h-[100vh] overflow-hidden relative bg-[#fcfcfd] pb-[221px] flex flex-col">
        <div class="flex items-center justify-between px-4 pt-4">
            <Icon @click="toback" icon="teenyicons:left-outline" />
            <span class="text-[#696969] text-sm tracking-[1px]">游客登录</span>
        </div>
        <div class="flex-auto flex flex-col items-center justify-center">
            <div class="flex flex-col items-center">
                <img class="w-[50%]" src="/static/logo.fill.svg" alt="">
                <div class=" relative my-[5vw] flex items-center justify-center">
                    <img :src="qrcode" v-if="show" alt="">
                    <img src="/static/code803.png" class="w-[50%]" v-else-if="!show" alt="">
                    <div v-if="maskshow"
                        class=" mask flex absolute left-0 top-0 bg-white bg-opacity-80 items-center justify-center w-[100%] h-[100%]">
                        <span @click="pollingCheck"
                            class=" bg-red-700 shadow-2xl rounded-[25px] px-[10px] py-[5px] text-[14px] text-white">点击刷新</span>
                    </div>
                </div>
                <p class="text-[12px]" v-if="show">使用<span class="text-[#2c8ae7]">网易云APP</span>扫码登录</p>
                <p class="flex flex-col items-center" v-else-if="!show">
                    <span class=" font-bold mb-[10px]">扫描成功</span>
                    <span class=" text-xs">请在手机上确认登录</span>
                </p>
            </div>

        </div>
        <div class="w-[100%] absolute bottom-0">
            <img class="w-[100%] h-[221px]" src="/static/bg-login.png" alt="">
        </div>
    </div>
</template>


<script>
import { getQRKey, getQrInfo, checkQrStatus } from '@/request'
import HomeViewVue from './HomeView/HomeView.vue';
import store from 'storejs'
export default {
    name: 'Login',
    data() {
        return {
            qrcode: '',
            show: true,
            maskshow:false,
        }
    },
    methods: {
        toback() {
            window.history.back()
        },
        pollingCheck(key, interval = 1000) {
            this.show = true;
            this.maskshow = false;
            const timer = setInterval(async () => {
                const res = await checkQrStatus(key)
                console.log(res.data.message, res.data.code)
                if (res.data.code == 803) {
                    clearInterval(timer)
                    console.log(res.data.cookie, res.data.codse)
                    store.set('__m__cookie', res.data.cookie)
                    this.$router.push('HomeView')
                }else if (res.data.code == 802) {
                    this.show=false;
                } else if (res.data.code == 800) {
                    alert('此二维码已过期，请刷新或重试！')
                    clearInterval(timer)
                    this.show=true;
                    this.maskshow = true;
                    

                    
                    
                }
            }, interval);
            this.$on('hook:beforeDestroy', () => {
                clearInterval(timer)
            })
        }
    },
    async created() {
        const res = await getQRKey().catch(err => console.log(err));
        // console.log(res.data.data.unikey);
        const qrInfo = await getQrInfo(res.data.data.unikey).catch(err => console.log(err))
        console.log(qrInfo.data.data.qrimg)
        this.qrcode = qrInfo.data.data.qrimg
        this.pollingCheck(res.data.data.unikey)
    },
    beforeDestroy() {
        // 页面销毁前做一些事情
        console.log('beforeDestroy')
    }
}
</script>