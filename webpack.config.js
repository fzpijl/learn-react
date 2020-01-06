const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /.jsx?/,
                use: 'babel-loader',
                // exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlPlugin({template: './src/index.html'}),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9999,
        open: true,
        hot: true
    }
}