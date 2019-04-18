//因为出口要绝对路径，所以需要引入node的path模块
const path=require("path");
module.exports = {
    //因为版本问题，现在需要将入口文件放到src下
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"bundle.js"
    }
}

// const HtmlWebpackPlugin = require("html-webpack-plugin")
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