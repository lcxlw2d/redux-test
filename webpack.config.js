const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname,'./src/js/main.js'),

    output: {
        path:path.join(__dirname,'/dist'),
        filename:"bundle.js"
    },

    devServer: {
        port:3000,
        open:true
    },

    module:{
        rules:[
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },

    resolve: {
        // 现在你import文件的时候可以直接使用import Func from './file'，不用再使用import Func from './file.js'
        extensions: ['.js', '.jsx', '.json', '.coffee']
    },

    plugins: [
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/inedx.html')
        })
    ]

}