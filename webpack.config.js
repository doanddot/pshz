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
        about: './src/templates/about/about.js',
        contacts: './src/templates/contacts/contacts.js',
        home: './src/templates/home/home.js',
        main: './src/main.js',
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { hmr: 'development' }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                query: { pretty: true }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets',
                }
            },
        ]
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ chunks: ['about'], filename: 'about.html', minify: false, template: './src/templates/about/about.pug' }),
        new HtmlWebpackPlugin({ chunks: ['contacts'], filename: 'contacts.html', minify: false, template: './src/templates/contacts/contacts.pug' }),
        new HtmlWebpackPlugin({ chunks: ['home'], filename: 'home.html', minify: false, template: './src/templates/home/home.pug' }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
