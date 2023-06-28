<template>
    <div>
        <h1 class="flex justify-between items-center my-3">
          <div class="flex justify-between items-center">
            <span class="font-black">推荐歌单</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                <path fill="currentColor"
                  d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z" />
              </g>
            </svg>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z" />
          </svg>
        </h1>
    <ul class="recommend flex overflow-auto">
        <li class="flex flex-col relative items-center mr-4" v-for="item in recommendArr" :key="item.id">
          <svg class=" absolute right-[5%] top-[22vw]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"><path fill="white" d="M32.16 16.08L8.94 4.47A2.07 2.07 0 0 0 6 6.32v23.21a2.06 2.06 0 0 0 3 1.85l23.16-11.61a2.07 2.07 0 0 0 0-3.7Z" class="clr-i-solid clr-i-solid-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
            <img :src="item.picUrl" alt="" class="w-[30vw] max-w-none rounded" />
            <span class=" absolute right-[5%] top-[5%] text-white flex items-center text-xs"><svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 36 36"><path fill="white" d="M32.16 16.08L8.94 4.47A2.07 2.07 0 0 0 6 6.32v23.21a2.06 2.06 0 0 0 3 1.85l23.16-11.61a2.07 2.07 0 0 0 0-3.7Z" class="clr-i-solid clr-i-solid-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>{{ item.trackCount }}万</span>
            <span class="tracking-widest text-sm line-clamp-2">{{
              item.name
            }}</span>
        </li>
    </ul>
    </div>
</template>
<script>
    export default{
        mounted(){
            // console.log(this.reource)
        },
        // props:['reource']
        props:{
            recommendArr:Array,
            reource:{
                // 属性值的类型，目前类型用对应数据的构造函数表达，如果约束为多种类型用数组表达 type:[Number,String,Object],
                type:[Object],
                // 是否必须传递
                require:true,
                
            },
            count:{
                // type:Number,
                
                default:1,//默认值


                // 自定义验证器
                validator(value){
                    return [1,2,3].includes(value)
                }
            }
        }

        // 在组件分装属性时我们可选的属性类型：attr属性、prop属性
        // 两者都可以把数据从父组件传递到子组件
        // 两者区别：attr属性开箱即用  不需要额外配置 但是使用起来略显繁琐   而且不具备属性检测等功能
        // prop属性需要现在对应组件中使用props配置项先行配置才可以使用，使用简单，具备属性值类型检测等功能
    }
</script>