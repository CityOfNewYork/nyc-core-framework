const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        nyc_core: [
            './src/index.js'
        ]
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    stats: { children: false },
    mode: 'development',
    watch: false,
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
        new OptimizeCssAssetsPlugin()
    ]
}