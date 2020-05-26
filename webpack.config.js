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
        article: './src/templates/article/article.js',
        catalog: './src/templates/catalog/catalog.js',
        certs: './src/templates/certs/certs.js',
        contacts: './src/templates/contacts/contacts.js',
        docs: './src/templates/docs/docs.js',
        field: './src/templates/field/field.js',
        home: './src/templates/home/home.js',
        'how-to-buy': './src/templates/how-to-buy/how-to-buy.js',
        news: './src/templates/news/news.js',
        process: './src/templates/process/process.js',
        product: './src/templates/product/product.js',
        reviews: './src/templates/reviews/reviews.js',
        vacancies: './src/templates/vacancies/vacancies.js',
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
                test: /\.(jpe?g|png|gif|svg|pdf|docx)$/i,
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
        new HtmlWebpackPlugin({ chunks: ['article'], filename: 'article.html', minify: false, template: './src/templates/article/article.pug' }),
        new HtmlWebpackPlugin({ chunks: ['catalog'], filename: 'catalog.html', minify: false, template: './src/templates/catalog/catalog.pug' }),
        new HtmlWebpackPlugin({ chunks: ['certs'], filename: 'certs.html', minify: false, template: './src/templates/certs/certs.pug' }),
        new HtmlWebpackPlugin({ chunks: ['contacts'], filename: 'contacts.html', minify: false, template: './src/templates/contacts/contacts.pug' }),
        new HtmlWebpackPlugin({ chunks: ['docs'], filename: 'docs.html', minify: false, template: './src/templates/docs/docs.pug' }),
        new HtmlWebpackPlugin({ chunks: ['field'], filename: 'field.html', minify: false, template: './src/templates/field/field.pug' }),
        new HtmlWebpackPlugin({ chunks: ['home'], filename: 'home.html', minify: false, template: './src/templates/home/home.pug' }),
        new HtmlWebpackPlugin({ chunks: ['how-to-buy'], filename: 'how-to-buy.html', minify: false, template: './src/templates/how-to-buy/how-to-buy.pug' }),
        new HtmlWebpackPlugin({ chunks: ['news'], filename: 'news.html', minify: false, template: './src/templates/news/news.pug' }),
        new HtmlWebpackPlugin({ chunks: ['process'], filename: 'process.html', minify: false, template: './src/templates/process/process.pug' }),
        new HtmlWebpackPlugin({ chunks: ['product'], filename: 'product.html', minify: false, template: './src/templates/product/product.pug' }),
        new HtmlWebpackPlugin({ chunks: ['reviews'], filename: 'reviews.html', minify: false, template: './src/templates/reviews/reviews.pug' }),
        new HtmlWebpackPlugin({ chunks: ['vacancies'], filename: 'vacancies.html', minify: false, template: './src/templates/vacancies/vacancies.pug' }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
