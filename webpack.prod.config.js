const baseWebpackConfig = require('./webpack.base.config')
const { merge } = require('webpack-merge')
const webpack = require('webpack')

const prodWebpackConfig = merge(baseWebpackConfig, 
    {
        mode: "production",
        plugins: [
            new webpack.DefinePlugin({
                'process.env': require('./config/prod.env')
            }),
        ]
    }
)

module.exports = prodWebpackConfig
