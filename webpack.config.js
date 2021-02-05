const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = "development";
let target = process.env.NODE_ENV === "production" ? "browserslist" : "web";

if(process.env.NODE_ENV === "production"){
    mode = "production";
}

module.exports = {
    entry: {
        nyc_core: [
            './src/index.js'
        ]
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        chunkLoading: false,
        wasmLoading: false,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "useBuiltIns": "usage",
                                    "corejs": 3
                                }
                            ]
                        ],
                        plugins: [
                            "@babel/plugin-transform-shorthand-properties",
                            "@babel/plugin-proposal-object-rest-spread"
                        ]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer"
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }), 
        new OptimizeCssAssetsPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: './admin.html'
        })
    ],
    devServer: {
        // contentBase: '../../',
        hot: true
    },
    mode: mode,
    target: target,
    watch: false,
    stats: { children: false }
}