const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || "development";

// Temporary workaround for 'browserslist' bug
const target = process.env.NODE_ENV === "production" ? "browserslist" : "web";

module.exports = {
    mode: mode,
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
                        loader: 'style-loader',
                        options: {
                            injectType: 'singletonStyleTag'
                        },
                    },
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 [
                    //                     "autoprefixer"
                    //                 ],
                    //             ],
                    //         },
                    //     },
                    // },
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
            title: 'Cool',
            filename: './index.html'
        })
    ],
    devServer: {
        port: 8080,
        // contentBase: path.resolve(__dirname, "dist"),
        hot: true
    },
    stats: {
        children: false
    },
    target: target,
    devtool: "eval-cheap-source-map"
}