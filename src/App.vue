<template>
  <div>
    <IndexView v-if="visibleView=='IndexView'"/>
    <homeView v-else/>
  </div>
</template>

<script>
import IndexView from '@/views/IndexView.vue';
import homeView from '@/views/homeView.vue';
export default {
  // name:'App',
  components: {
    IndexView,
    homeView,
  },
  data() {
    return {
      visibleView: 'homeView',
    };
  },
  beforeCreate() {
    window.onhashchange = () => {
      this.visibleView = location.hash.replace('#', '');
    };
  },
  created() {
    window.vm = this;
  },
};
</script>

<style>
@tailwind base;
@tailwind utilities;
@tailwind variants;
</style>