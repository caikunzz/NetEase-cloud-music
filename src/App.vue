<template>
  <div>
    <!-- <IndexView v-if="visibleView=='IndexView'"/>
    <homeView v-else/> -->

    <component :is="currentComponent" />
  </div>
</template>

<script>
import router from '@/router';
export default{
  // 混合
  mixins:[router]
}
</script>

<style>
@tailwind base;
@tailwind utilities;
@tailwind variants;
</style>