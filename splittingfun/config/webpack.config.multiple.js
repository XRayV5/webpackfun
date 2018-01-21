const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        pageA: [path.resolve(__dirname, '../src/multiple/pageA.js')],
        pageB: path.resolve(__dirname, '../src/multiple/pageB.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash:8].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: 2
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        })
    ]
}