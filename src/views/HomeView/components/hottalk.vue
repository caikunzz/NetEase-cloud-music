<template>
  <div>
    <h1 class="flex justify-between items-center my-3">
      <div class="flex justify-between items-center">
        <span class="font-black">热门话题</span>

      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      @click="closeDrawer"
      >
        <path fill="currentColor"
          d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z" />
      </svg>
    </h1>

    <!-- <van-swipe class="my-swipe rounded-2xl overflow-hidden" :indicator="false" :loop="false" :show-indicators="false"
      indicator-color="">
      <van-swipe-item class="yun flex rounded-2xl overflow-hidden mr-3  box-border flex-col py-3" v-for="(item,index) in resArr"
        :key="item.id">
        <div class="shadow-md p-4 bg-green-900 bg-opacity-7 text-white rounded-2xl" v-if="index==0">
          <p class=" font-bold">{{ item.title }}</p>
            <div class="flex w-[100%] justify-between items-end">
            <p class=" text-sm">{{ item.text }}</p>
            <img class="w-[15vw] rounded-xl" :src="item.url" alt="">
          </div>
        </div>

        <div class="shadow-md p-4 text-white bg-opacity-7 rounded-2xl bg-purple-600" v-else-if="index==1">
          <p class=" font-bold">{{ item.title }}</p>
            <div class="flex w-[100%] justify-between items-end">
            <p class=" text-sm">{{ item.text }}</p>
            <img class="w-[15vw] rounded-xl" :src="item.url" alt="">
          </div>
        </div>
        <div class="shadow-md p-4 text-white bg-opacity-7 bg-rose-300 rounded-2xl" v-else-if="index==2">
          <p class=" font-bold">{{ item.title }}</p>
            <div class="flex w-[100%] justify-between items-end">
            <p class=" text-sm">{{ item.text }}</p>
            <img class="w-[15vw] rounded-xl" :src="item.url" alt="">
          </div>
        </div>
        <div class="shadow-md p-4 text-white bg-opacity-3 bg-stone-400 rounded-2xl" v-else-if="index==3">
          <p class=" font-bold">{{ item.title }}</p>
            <div class="flex w-[100%] justify-between items-end">
            <p class=" text-sm">{{ item.text }}</p>
            <img class="w-[15vw] rounded-xl" :src="item.url" alt="">
          </div>
        </div>
        <div class="shadow-md p-4 text-white bg-opacity-7 bg-yellow-800 rounded-2xl" v-else>
          <p class=" font-bold">{{ item.title }}</p>
            <div class="flex w-[100%] justify-between items-end">
            <p class=" text-sm">{{ item.text }}</p>
            <img class="w-[15vw] rounded-xl" :src="item.url" alt="">
          </div>
        </div>

      </van-swipe-item>
    </van-swipe> -->


    <div class="swipe my-swipe flex rounded-2xl overflow-auto" >
      <div class="yun flex rounded-2xl mr-3  box-border  py-3" v-for="(item,index) in resArr"
        :key="item.id">
        <div class="shadow-md w-[90vw] p-4 bg-green-900 bg-opacity-7 text-white rounded-2xl" v-if="index==0">
          <p class=" font-bold">{{ item.title }}</p>
            <div class="flex w-[100%] justify-between items-end">
            <p class=" text-sm">{{ item.text }}</p>
            <img class="w-[15vw] rounded-xl" :src="item.url" alt="">
          </div>
        </div>

        <div class="shadow-md w-[90vw] p-4 text-white bg-opacity-7 rounded-2xl bg-purple-600" v-else-if="index==1">
          <p class=" font-bold">{{ item.title }}</p>
            <div class="flex w-[100%] justify-between items-end">
            <p class=" text-sm">{{ item.text }}</p>
            <img class="w-[15vw] rounded-xl" :src="item.url" alt="">
          </div>
        </div>
        <div class="shadow-md w-[90vw] p-4 text-white bg-opacity-7 bg-rose-300 rounded-2xl" v-else-if="index==2">
          <p class=" font-bold">{{ item.title }}</p>
            <div class="flex w-[100%] justify-between items-end">
            <p class=" text-sm">{{ item.text }}</p>
            <img class="w-[15vw] rounded-xl" :src="item.url" alt="">
          </div>
        </div>
        <div class="shadow-md w-[90vw] p-4 text-white bg-opacity-3 bg-stone-400 rounded-2xl" v-else-if="index==3">
          <p class=" font-bold">{{ item.title }}</p>
            <div class="flex w-[100%] justify-between items-end">
            <p class=" text-sm">{{ item.text }}</p>
            <img class="w-[15vw] rounded-xl" :src="item.url" alt="">
          </div>
        </div>
        <div class="shadow-md w-[90vw] p-4 text-white bg-opacity-7 bg-yellow-800 rounded-2xl" v-else>
          <p class=" font-bold">{{ item.title }}</p>
            <div class="flex w-[100%] justify-between items-end">
            <p class=" text-sm">{{ item.text }}</p>
            <img class="w-[15vw] rounded-xl" :src="item.url" alt="">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      resArr: [
        {
          url: "https://p1.music.126.net/jS92kW49E37VDr8f6A1ZKg==/109951167550777780.jpg",
          title: '最令你感动的那首情歌',
          text: '平行时空中双重灵魂的碰撞'
        },
        {
          url: "https://p1.music.126.net/hoGRbppqaUIYkKpQGPwilw==/109951168031132211.jpg",
          title: '宝藏歌曲推荐',
          text: '于虚妄世界中找寻幻梦~'
        },
        {
          url: "https://p2.music.126.net/hLv4YJOiLTE16LlRpdxZgQ==/109951164152314267.jpg",
          title: '每人一首最近单曲循环的歌',
          text: '一起走进温情的人间故事里~'
        },
        {
          url: "https://p2.music.126.net/ZtQOTgvhqrcWYapiPj9NWQ==/19018252626210242.jpg",
          title: '哪首歌藏着你的故事',
          text: '一起倾听华晨宇的希忘哲学～'
        },
        {
          url: "https://p2.music.126.net/rd0iSV6zxXOytgehfIaZ8g==/109951163693273653.jpg",
          title: '我和网易云的故事',
          text: '击碎镜像做自己的Queen！'
        }
      ]
    }
  },
  props: ['visible'],
  methods: {
    closeDrawer() {
      this.$emit('update:visible', true);
      this.$emit('update:title', '热门话题');
    },
  },
}
</script>
<style>
.yun {
  width: 75vw !important;
}
.swipe::-webkit-scrollbar {
  height: 0px;
}
</style>