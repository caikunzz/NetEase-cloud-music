
  <script>
  import { mapState, mapMutations } from '@/vuex';
  export default {
    render(){
        return (
            <div>
                <h1 onClick={this.increase}>{this.count}</h1>
            </div>
        )
    },
    computed: {
      ...mapState(['count', 'msg']),
    },
    methods: {
      ...mapMutations(['increase']),
      },
    }
    /**
 使用jsx编写render函数的配置步骤：
 1.安装所需的babel相关模块
    "@babel/core": "^7.22.8"
    "@babel/preset-env": "^7.22.7"
    "@vue/babel-plugin-transform-vue-jsx": "^1.4.0"
    "babel-loader": "^9.1.2"
    "@vue/babel-helper-vue-jsx-merge-props": "^1.4.0"
    "@vue/babel-preset-jsx": "^1.4.0"
    "@vue/cli-plugin-babel": "^5.0.8"
  2.在根目录下新建.babelrc（babel.config.js）并写入如下配置：
    {
      "presets": [
        "@vue/cli-plugin-babel/preset",
        [
          "@vue/babel-preset-jsx",
          {
            "injectH": false
          }
        ]
      ]
    }
  3.修改webpack.config.js中的module配置项加入如下配置：
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
  4.编写正确的jsx代码 并编译
 */

  </script>