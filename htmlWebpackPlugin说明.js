plugins: [
    new htmlWebpackPlugin({
        title: "this is title", //生成的HTML模板的title，如果模板中有设置title的名字，则会忽略这里的设置
        filename: "index.html", // 生成的模板文件的名字 默认index.html
        template: "index.html", //模板来源文件（默认html文件）
        inject: false, //注入位置'head','body',true,false；
        // head:script标签位于html文件的head中
        // body:script标签位于html文件的body底部
        // // true：默认值，script标签位于html文件的body底部
        // false:不插入生成的js文件，这个几乎不会用到的
        favicon: "", //指定页面图标，写图标路径
        //minify可以参考这个网址https://github.com/kangax/html-minifier#options-quick-reference
        minify: {
            caseSensitive:false,//是否大小写敏感               
            collapseWhitespace:true,//是否去除空格               
            removeAttributeQuotes:true,// 去掉属性引用               
            removeComments:true,//去注释
            collapseBooleanAttributes: true, //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
            //还有很多很多
        },
        hash: true, //是否生成hash添加在引入文件地址的末尾，类似于我们常用的时间戳，这个可以避免缓存带来的麻烦，默认为true。
        cache: true, //是否需要缓存，如果填写true，则文件只有在改变时才会重新生成，表示内容变化的时候生成一个新的文件。
        showErrors: true, //是否将错误信息写在页面里，默认true，出现错误信息则会包裹在一个pre标签内添加到页面上
        chunks: ['a', 'b'], //引入的a,b模块，这里指定的是entry中设置多个js时，在这里指定引入的js，如果不设置则默认全部引入,数组形式传入
        chunksSortMode: "auto", //引入模块的排序方式
        excludeChunks: ['a', 'b'], //排除的模块,引入的除a,b模块以外的模块，与chunks相反
        xhtml: false //生成的模板文档中标签是否自动关闭，针对xhtml的语法，会要求标签都关闭，默认false
    })
]