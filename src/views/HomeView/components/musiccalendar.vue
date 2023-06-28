<template>
    <div>
        <h1 class="flex justify-between items-center mt-4">
                <div class="flex justify-between items-center">
                    <span class="font-black mr-3">音乐日历</span>
                    <span class="flex items-center text-xs rounded-lg bg-gray-200 px-2">
                        <span>今日两条</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                                <path fill="currentColor"
                                    d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z" />
                            </g>
                        </svg>
                    </span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z" />
                </svg>
            </h1>

            <ul class=" bg-white rounded-xl my-4 shadow md:shadow-lg ">
                <li v-for="(item, index) in musiccalendarArr" :key="index" class="flex border-y justify-between p-4">
                    <div class="flex flex-col justify-between">
                        <p class=" text-xs">
                            <span class="mr-1 text-zinc-500" v-if="index==0">今天</span>
                            <span class="mr-1 text-zinc-500" v-else>明天</span>
                            {{ today }}
                            <span v-if="index==0" class=" text-red-500 font-semibold ml-4">{{ item.tag }}</span>
                        </p>
                        <p>{{ item.title }}</p>
                    </div>
                    <img class="w-[15vw] rounded-lg" :src="item.imgUrl" alt="" />
                </li>
            </ul>
    </div>
</template>
<script>
    export default{
        props:['musiccalendarArr','today']
    }
</script>