<template>
    <div v-if="viewMoveArr?.length > 1" class=" inline-block w-[30vw] relative">
        <Icon class=" absolute top-[5%] right-[5%] z-[335]" size="48" color="white" icon="ph:number-eight" :rotate="1"
            :horizontalFlip="true" :verticalFlip="true" />
        <div class=" rounded  w-[30vw] h-[30vw] overflow-hidden relative">
            <transition name="abc" class="">
                <div v-if="vivs" class="shadow w-[30vw] absolute z-[55] ">
                    <img class="w-[30vw] h-[30vw]" :src="viewMoveArr[lastindex].uiElement.image.imageUrl" alt="">
                </div>
            </transition>
            <transition name="abc" class="">
                <div v-if="!vivs" class=" shadow w-[30vw] absolute z-[55]">
                    <img class="w-[30vw] h-[30vw] rounded" :src="viewMoveArr[nowindex].uiElement.image.imageUrl" alt="">
                </div>
            </transition>

        </div>
        <p class="tracking-widest text-sm line-clamp-2">{{ viewMoveArr[lastindex].uiElement.mainTitle.title }}</p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            vivs: true,
            viewMoveArr: [],
            lastindex:0,
            nowindex:1,
        }
    },
    methods: {

    },
    async created() {
        // const res = await axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized?limit=3');
        // // console.log(res.data.result);
        // this.viewMoveArr = res.data.result;

        const resarr = await axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
        this.viewMoveArr = resarr.data.data.blocks[1].creatives[0].resources;
        // console.log(this.viewMoveArr)

        // console.log(this.viewMoveArr.length)
        setInterval(() => {
            this.vivs = !this.vivs
            this.lastindex++
            if(this.lastindex>=this.viewMoveArr.length-1){
                this.lastindex=0
            }
            // this.nowindex--
            // if(this.nowindex<1){
            //     this.nowindex=2
            // }
          
        }, 3000);
    },
    // mounted(){
        
    // }
}
</script>