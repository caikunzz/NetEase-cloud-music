<template>
  <div>
    <!-- 声明式导航 -->
    <!-- <router-link to="IndexView">go to indexView</router-link> -->
    <!-- <router-link :to="{path:'/IndexView/123'}">go to indexView</router-link> -->

    <router-view/>
    <!-- 播放器 -->
    <Player class=" fixed bottom-0 w-[100%]"/>

    <!-- 菜单 -->
  </div>
</template>

<script>
import Player from "@/components/Player/player.vue"
export default{
  components:{Player}
  // created(){
    // console.log(this.$route.params)
    // 编程式导航
    // setTimeout(() => {
    //     this.$router.push('IndexView')
    // }, 10000);
  // }
}
</script>

<style>
@tailwind base;
@tailwind utilities;
@tailwind variants;
</style>