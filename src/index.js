
import template_index from './index.template'
import './index.css'
import Vue from 'vue';
const vm = new Vue({
  el: '#app',
  // 指令是出现在模板中
  // 模板语法：指令
  // 模板在一定程度上与html片段非常相似，html+指令 === temppate
  // 如果不传递template，他就会检查有没有传递el，如果没传递，直接终止运行
  // 如果传递，则将el.outHTML获取并作为template值传入
  // el.outHTML是template默认值
  // template取值流程:手动传递的模板>el.outHTML>undefined
  template:template_index,
  data() {
    return {
      msg: 'hello, vuejs!',
    };
  },
});