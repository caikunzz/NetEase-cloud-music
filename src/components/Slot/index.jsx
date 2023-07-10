export default{
    render(){
        return this.$parent.$slots[this.name]
    },
    props:{
        name:{
            type:String,
            default:'default',
        }
    },
    // created(){
    //     console.log('slot=>',this.$parent.$slots)
    // }
}