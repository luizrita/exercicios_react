const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './ex/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['es2015', 'react', 'env'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.scss$/,
            loaders: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
        }]
    }
}