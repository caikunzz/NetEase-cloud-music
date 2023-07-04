import Vue from 'vue';
import Dialog from './Dialog.vue'
import { method } from 'lodash';


// 创建一个Dialog的子类
export default function (option) {
     return new Promise(function(resolve,reject){
        const VueDialog = Vue.extend(Dialog)
        const instanceOfDialog = new VueDialog({
            data(){
                return{
                    title:option.title,
                    message:option.message,
                    // visible:true,
                }
            },
            methods:{
                reject,resolve
            }
        });
    
        instanceOfDialog.$mount();
        document.body.appendChild(instanceOfDialog.$el)
     })
}
// Dialog.install=function(V){
//     V.component(this.name,this)
// }
// export default Dialog;