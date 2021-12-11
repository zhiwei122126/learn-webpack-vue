const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './src/main.js',
    mode: "production",
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        compress: true,
        port: 8090,
        hot: true,
        open: true,
        static: path.resolve(__dirname, 'public')
    },
    module:{
        rules: [
            {
                // .vue
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html', // 生成的文件名
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        }),
        new VueLoaderPlugin()
    ]
}
