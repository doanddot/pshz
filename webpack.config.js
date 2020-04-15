const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        watchContentBase: true,
    },

    entry: {
        contacts: './src/contacts.js',
        index: './src/index.js',
    },

    mode: 'production',

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: 'development'
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]   
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'contacts.html',
            template: './contacts.html',
            chunks: ['contacts']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            chunks: ['index']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};