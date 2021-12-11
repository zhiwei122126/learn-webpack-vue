const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './src/main.js',
    performance: {
        hints: false
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': path.resolve(__dirname, 'src'),
        }
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
            {
                // *.js
                test: /\.js$/,
                exclude: /node_modules/, // 不编译node_modules下的文件
                loader: 'babel-loader',
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
