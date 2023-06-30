<template>
  <div>
    <h1 class="flex justify-between items-center my-3">
      <div class="flex justify-between items-center">
        <span class="font-black">排行榜</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
            />
            <path
              fill="currentColor"
              d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z"
            />
          </g>
        </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        @click="closeDrawer"
      >
        <path
          fill="currentColor"
          d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"
        />
      </svg>
    </h1>
    <van-swipe class="my-swipe" :loop="false" indicator-color="white">
      <van-swipe-item v-for="item in RankingArr" :key="item.id" class="">
        <div
          :key="item.id"
          class="p-4 mx-4 overflow-hidden bg-white rounded-xl"
        >
          <div class="flex justify-between">
            <h1 class="font-bold text-base tracking-widest flex items-center">
              {{ item.uiElement.mainTitle.title }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
                  />
                  <path
                    fill="currentColor"
                    d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z"
                  />
                </g>
              </svg>
            </h1>
            <p
              class="overflow-hidden whitespace-nowrap font-medium text-sm text-stone-500 tracking-wider"
            >
              {{ item.uiElement.mainTitle.titleDesc }}
            </p>
          </div>
          <div class="">
            <div v-for="(items, index) in 3" :key="index.id" class="my-4">
              <div class="flex">
                <img
                  :src="
                    item.resources[index].resourceExtInfo?.songData.album
                      .blurPicUrl
                  "
                  class="w-[15vw] h-[15vw] rounded"
                  alt=""
                />
                <div class="text-center flex items-center mx-3 justify-center">
                  <span v-if="index == 0" class="text-yellow-300 font-black">
                    {{ index + 1 }}
                  </span>
                  <span v-if="index == 1" class="text-zinc-400 font-black">
                    {{ index + 1 }}
                  </span>
                  <span v-if="index == 2" class="text-yellow-700 font-black">
                    {{ index + 1 }}
                  </span>
                </div>
                <div class="flex flex-col justify-between">
                  <p
                    class="text-lg font-normal w-[40vw] text-ellipsis overflow-hidden whitespace-nowrap"
                  >
                    {{ item.resources[index].resourceExtInfo?.songData.name }}
                  </p>
                  <p class="text-sm from-stone-500">
                    {{ item.resources[index].resourceExtInfo?.artists[0].name }}
                  </p>
                </div>
                <div
                  class="flex items-center ml-auto text-xs font-bold justify-center"
                >
                  <span class="text-orange-700">{{
                    item.resources[index]?.uiElement.labelText.text
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: ['RankingArr','visible'],
  methods: {
    closeDrawer() {
      this.$emit('update:visible', true);
      this.$emit('update:title', '排行榜');
    },
  },
};
</script>