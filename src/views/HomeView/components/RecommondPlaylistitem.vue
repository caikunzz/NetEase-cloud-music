<template>
  <div class="flex" ref="box" >

    <div class="flex flex-col relative items-center mr-[3vw]" v-for="(item, index) in recommendArr" :key="index">
      <viewmove v-if="index == 0"></viewmove>
      <svg v-if="index != 0" class=" absolute right-[5%] top-[22vw]" xmlns="http://www.w3.org/2000/svg" width="24"
        height="24" viewBox="0 0 36 36">
        <path fill="white"
          d="M32.16 16.08L8.94 4.47A2.07 2.07 0 0 0 6 6.32v23.21a2.06 2.06 0 0 0 3 1.85l23.16-11.61a2.07 2.07 0 0 0 0-3.7Z"
          class="clr-i-solid clr-i-solid-path-1" />
        <path fill="none" d="M0 0h36v36H0z" />
      </svg>
      <img @click="fn" v-if="index != 0" :src="item.uiElement.image.imageUrl" alt="" class="w-[30vw] max-w-none rounded"  />
      <span v-if="index != 0" class=" absolute right-[5%] top-[5%] text-white flex items-center text-xs" ><svg class="mr-2"
          xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 36 36">
          <path fill="white"
            d="M32.16 16.08L8.94 4.47A2.07 2.07 0 0 0 6 6.32v23.21a2.06 2.06 0 0 0 3 1.85l23.16-11.61a2.07 2.07 0 0 0 0-3.7Z"
            class="clr-i-solid clr-i-solid-path-1" />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>{{ parseInt(item.resources[0].resourceExtInfo.playCount / 10000) }}万</span>
      <span v-if="index != 0" class="tracking-widest text-sm line-clamp-2">{{
        item.uiElement.mainTitle.title
      }}</span>
    </div>
  </div>
</template>
<script>

import viewmove from './viewMove.vue'
export default {

  components: {
    viewmove
  },
  methods: {
    fn(){
      console.log(111);
    }
  },
  updated() {
    //ref+$refs 获取页面上的节点
    // console.log(this.$refs.box.getElementsByTagName('div').length)
    this.$refs.box.style.width = this.$refs.box.getElementsByTagName('div').length * 33 + 'vw';

  },
  // props:['reource']
  props: {
    recommendArr: Array,
    reource: {
      // 属性值的类型，目前类型用对应数据的构造函数表达，如果约束为多种类型用数组表达 type:[Number,String,Object],
      type: [Object],
      // 是否必须传递
      require: true,

    },
    count: {
      // type:Number,

      default: 1,//默认值


      // 自定义验证器
      validator(value) {
        return [1, 2, 3].includes(value)
      }
    }
  }

  // 在组件分装属性时我们可选的属性类型：attr属性、prop属性
  // 两者都可以把数据从父组件传递到子组件
  // 两者区别：attr属性开箱即用  不需要额外配置 但是使用起来略显繁琐   而且不具备属性检测等功能
  // prop属性需要现在对应组件中使用props配置项先行配置才可以使用，使用简单，具备属性值类型检测等功能
}
</script>