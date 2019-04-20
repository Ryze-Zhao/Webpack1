//因为出口要绝对路径，所以需要引入node的path模块
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//主配置文件，需要暴露在全局（模块的到处command.js node提供的模块方式）
module.exports = {
    mode: "development",
    //因为版本问题，现在需要将入口文件放到src下
    entry: {
        "one":"./src/js/index.js",
        "two":"./src/js/head.js",
        "three":["./src/js/index.js","./src/js/bottom.js",]

    },
    output: {
        path: path.resolve(__dirname, "build"),
        //[name]是会自动遍历entry的名字做为文件
        filename: "[name].bundle.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
          })
    ]
}

//  stats: { children: false },
//      mode:'development',
// resolve:{
//     alias:{
//         "vue":"vue/dist/vue.esm.js"
//     }
// },plugins:[
//     new HtmlWebpackPlugin({
//         template:'./src/index.html',
//     })
// ]