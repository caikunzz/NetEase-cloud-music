<template>
    <div>
        <h1>Foo{{ count }}</h1>
        <h1>{{ msg }}</h1>
        <!-- <button @click="fn">toggle dialog</button> -->
        <!-- <Dialog title="警告" message="我是提示内容"/> -->
        <!-- <h1></h1> -->
    </div>
</template>

<script>
import Dialog from '@/components/Dialog/index'
import {mapState,mapMutations} from '@/vuex'
    export default{
       computed:{
        ...mapState(['count','msg'])
        // count(){
        //     return this.$store.state.count
        // }
       },
       methods:{
        // ...mapMutations(['increase'])
       }
    }
</script>