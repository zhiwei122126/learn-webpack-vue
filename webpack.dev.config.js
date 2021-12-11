const path = require('path')
const baseWebpackConfig = require('./webpack.base.config')
const { merge } = require('webpack-merge')
const webpack = require('webpack')


const devWebpackConfig = merge(baseWebpackConfig, 
    {
        mode: "development",
        devServer: {
            compress: true,
            port: 8081,
            hot: true,
            open: true,
            static: path.resolve(__dirname, 'public')
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': require('./config/dev.env')
            }),
        ]
    }
)

module.exports = devWebpackConfig
