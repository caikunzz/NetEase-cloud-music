<template>
    <div>
        
        <Debounce duration="1000" type="click">

            <div @click="debounceTestHandler"  class="w-[40px] h-[40px] bg-orange-500 border text-center leading-[20px]">
            防抖测试
        </div>
        </Debounce>

        <Button>我是button</Button>
        <Button slot="abc">我是button</Button>
        <Button slot="def">我是button</Button>
        <van-popup v-model="pupupVisible" position="bottom" :style="{ height: '30%' }" >
            <van-area title="标题" :area-list="areaList" :columns-num="2" @confirm="comfirm" @cancel="cancel" confirm-button-text="确认"/>
            </van-popup>
    </div>
</template>

<script>
import { areaList } from '@vant/area-data';
import Button from "@/components/Button/Button.vue"
import Debounce from '@/components/Debounce/index.jsx'
export default {
    components:{
        Button,
        Debounce,
    },
    data(){
        return{
            pupupVisible:true,
            areaList:Object.freeze(areaList),
        }
    },
    methods:{
        debounceTestHandler(){
            console.log('debounce...')
        },
        comfirm(e){
            this.pupupVisible = false;
            console.log(e)
        },
        cancel(){
            this.pupupVisible = false;
        }
    }
}
</script>