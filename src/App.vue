<template>
  <div>
    <!-- 声明式导航 -->
    <!-- <router-link to="IndexView">go to indexView</router-link> -->
    <!-- <router-link :to="{path:'/IndexView/123'}">go to indexView</router-link> -->

    <router-view/>
  </div>
</template>

<script>
export default{
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