// 数据仓库对象（vue插件）
let Vue=null;
let store = null;
export const mapState = (stateKeys = [])=>{
    // return stateKeys.reduce((prev,key)=>{
    //     prev[key] = function(){
    //         return store.state[key]
    //     }
    // },{})

    let o = {};
    for(let key of stateKeys){
        o[key] = function(){
            return store.state[key];
        }
    }
    return 0
}
export default{
    Store:class{
        constructor({state={}}){
            this.state = Vue.observable(state);
        }
    },
 install(_Vue){
    Vue=_Vue;
    Vue.mixin({
        created(){
            if(!this.$parent){
                Vue.prototype.$store = this.$options.store;
                store = this.$options.store;
            }
        }
    })
 }
}