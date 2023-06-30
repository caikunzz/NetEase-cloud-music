<template>
  <div class="w-[50px] h-[30px] rounded-[15px] bg-red"
    :class="`${value?'bg-red-400':'bg-black'}`"
    @click="toggle"
  >
    <div
      class="w-[30px] h-[30px] rounded-[50%] bg-white transition duration-150 ease-out"
      :class="`${value ? 'translate-x-[20px]' : 'translate-x-0'}`"
    ></div>
  </div>
</template>

<script>
export default {
    // model主要是去卑职v-model指令所需要使用的  属性名 和 事件名的
    // model:{
    //     prop:'value',
    //     event:'input'
    // },
  props: {
    value: {
      type: Boolean,
      require: true,
    },
  },
  methods:{
    toggle(){
        // this.$emit('update:value',!this.value)
        this.$emit('input',!this.value)
    }
  }
};
</script>