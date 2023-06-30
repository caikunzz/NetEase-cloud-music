<template>
  <header class="flex justify-between relative">
    <svg
      @click="closeDrawer"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z"
      />
    </svg>
    <svg
      @click="serachHand"
      class="absolute top-[50%] left-[17%] -translate-y-2/4"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"
      />
    </svg>
    <input
      type="text"
      :placeholder="searchName"
      v-model="searchKeywords"
      class="rounded-xl border-2 border-purple-300 pl-[10%] bg-gradient-to-r dark:bg-slate-950 dark:border-white to-purple-200 w-[70%] text-base"
      :class="{'from-pink-200':!switchcheck}"

    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z"
      />
    </svg>
    <ul
      v-if="searchKeywords"
      class="w-[100%] bg-white absolute bottom-0 translate-y-[100%] overflow-hidden rounded-xl z-10"
    >
      <li
        class="text-center bg-gradient-to-r from-pink-500 to-purple-500"
        v-for="item in resultArr"
        :key="item.id"
      >
        {{ item.name }}
      </li>
    </ul>
  </header>
</template>
<script>
import axios from 'axios';
export default {
  props: [
    'userSearchKeywords',
    'serachHandler',
    'defaultResult',
    'searchName',
    'visible',
    'switchcheck'
  ],
  data() {
    return {
      searchKeywords: this.userSearchKeywords,
      resultArr: this.defaultResult,
    };
  },
  watch: {
    // searchKeywords(value){
    //     this.$emit('updata:userSearchKeywords',value)
    //     console.log(value)
    //     console.log(this.searchKeywords)
    //     console.log(this.defaultResult)

    // },
    searchKeywords: _.debounce(function (newkeywords) {
      axios
        .get(
          'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/search/suggest',
          {
            params: {
              keywords: newkeywords,
            },
          }
        )
        .then((res) => {
          this.resultArr = res.data.result.songs;
          console.log(this.resultArr);
        })
        .catch((err) => console.log(err));
    }, 500),
  },
  methods: {
    serachHand() {
      this.serachHandler();
    },
    closeDrawer() {
      this.$emit('update:visible', true);
      this.$emit('update:title', 'qingzhengzhu');
    },
  },
};
</script>