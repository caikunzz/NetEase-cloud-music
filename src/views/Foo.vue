<template>
    <div>
        <h1>Foo{{ count }}</h1>
        <!-- <button @click="fn">toggle dialog</button> -->
        <!-- <Dialog title="警告" message="我是提示内容"/> -->
        <h1></h1>
    </div>
</template>

<script>
import Dialog from '@/components/Dialog/index'
import store from '../store/index'
import {mapState} from '@/vuex'
    export default{
        computed:{
            // count(){
            //     return store.state.count
            // }
            ...mapState(['count'])
        },
        // methods:{
        //     increase(){
        //         store.mutations.increase()
        //     },
        //     fn(){
        //         Dialog({title:'警告',message:'我是提示内容！'})
        //         .then(function(){
        //             console.log('点击了确定')
        //         })
        //         .catch(function(){
        //             console.log('点击了取消')
        //         })
        //     },
        // },
        created(){
            //Dialog({title:'警告',message:'我是提示内容!'})
        }
    }
</script>