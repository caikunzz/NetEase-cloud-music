<template>
  <div class="w-screen h-screen">
    <div class="bg-orange-500 text-[80px]">MineView</div>
    <button @click="f1" @mouseleave="f2">click1</button>
    <input
      class="border"
      type="text"
      placeholder="测试"
      :value="value"
      @input="(e) => (value = e.target.value)"
    />
    <!-- <button v-on="{click:f1,mouseleave:f2}">click1</button>
        <a :href="IndexVuew" id="anchor">go to IndexView</a>
        <a v-bind="{href,id}">go to IndexView</a> -->
  </div>
</template>

<script>
export default {
  name: 'Mine',
  data() {
    return {
      href: '#IndexView',
      id: 'anchor',
      value: '',
    };
  },
  methods: {
    f1() {
      console.log(1);
    },
    f2() {
      console.log(2);
    },
  },
  created() {
    window.mine = this;
  },
};
</script>

<style scoped>
</style>