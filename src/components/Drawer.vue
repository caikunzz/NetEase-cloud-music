<template>
  <div @click="clickHandler" class="dark:bg-balck">
    <transition :name="direction">
      <div v-show="visible" class="w-screen  fixed z-[999] p-[2vw] box-border dark:bg-zinc-800"
        :style="[drawerContentStyle, { width }, { bgd: show }]" :class="direction == 'ltr' ? 'bg-[#f4f2f2]' : 'bg-white'">
        <div v-if="headershow" class="border-b py-2">
          <slot name="header">
            <div class="flex justify-between items-center">
              <p>{{ title }}</p>
              <Icon @click.native="closeDrawer" icon="clarity:times-line" />
            </div>
          </slot>
        </div>
        <!-- <div> -->
        <slot></slot>
        <!-- </div> -->
      </div>
    </transition>
    <div v-if="visible" ref="drawerMask" class="bg-black opacity-20 absolute top-0 right-0 bottom-0 left-0 z-[99]"></div>
  </div>
</template>
<script>
export default {
  // 单向数据流（父级通过props传递给子组件的数据 子组件没有权利修改）
  data() {
    return {
      show: false,
      bgd: {
        background: 'black'
      }
    }
  },
  props: {
    // switchcheck,
    headershow:{
      type: Boolean,
      default: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: '默认标题',
    },
    direction: {
      type: String,
      default: 'btt',
      validator(direction) {
        return ['ttb', 'btt', 'ltr', 'rtl'].includes(direction);
      },
    },
    width: {
      type: [Number, String],
      default: '80vw',
    },
  },
  // 计算属性
  computed: {
    drawerContentStyle() {
      if (this.direction === 'btt') {
        return {
          width: '100vw',
          left: 0,
          bottom: 0,
          borderRadius: '4vw 4vw 0 0'
        };
      } else if (this.direction === 'ttb') {
        return {
          width: '100vw',
          left: 0,
          top: 0,
        };
      } else if (this.direction === 'ltr') {
        return {
          // 'min-height': '100vh',
          height: '100vh',
          left: 0,
          top: 0,
          // borderRadius:'0 4vw 4vw 0',
          // background:'rgb(244 242 242)'
        };
      } else if (this.direction === 'rtl') {
        return {
          width:'100vw',
          height: '100vh',
          right: 0,
          top: 0,
          padding:0,
        };
      }
    },
  },
  methods: {
    closeDrawer() {
      this.$emit('update:visible', false);
    },
    clickHandler(e) {
      if (e.target === this.$refs.drawerMask || e.target === this.$refs.close) {
        // this.visible = false;
        // 使用vm.$emit给父组件传递数据
        this.closeDrawer();
      }
    },
  },
  mounted() {
    // console.log(this)
    this.show = this.$attrs.switchcheck;
  }
};
</script>
<style scoped>
.btt-enter,
.btt-leave-to {
  transform: translateY(100%);
}

.btt-enter-active,
.btt-leave-active {
  transition: all ease-in-out 0.5s;
}

.btt-enter-to,
.btt-leave {
  transform: translateY(0);
}



.ltr-enter,
.ltr-leave-to {
  transform: translatex(-100%);
}

.ltr-enter-active,
.ltr-leave-active {
  transition: all ease-in-out 0.5s;
}

.ltr-enter-to,
.ltr-leave {
  transform: translatex(-10%);
}


.rtl-enter,
.rtl-leave-to {
  transform: translatex(100%);
}

.rtl-enter-active,
.rtl-leave-active {
  transition: all ease-in-out 0.5s;
}

.rtl-enter-to,
.rtl-leave {
  transform: translatex(0);
}
</style>
  