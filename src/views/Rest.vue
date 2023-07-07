<!-- <template>
    <div>
        <h1 ref="h1" @click="fn">{{ count }}</h1>
    </div>
</template> -->

<script>
// data中的数据变化 => 数据对应的视图更新
import Vue from 'vue'
    export default {
        data(){
            return {
                count:123,
            }
        },
        methods:{
            fn(){
                this.count++;
                this.$nextTick(()=>{
                    console.log(this.$refs.h1.innerHTML)
                })
                
            }
        }
    }
</script>