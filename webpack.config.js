const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    target: 'web',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx']
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [{
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: './src/yourfile.css'
        })
    ]
}