const path = require('path');

module.exports = {
    entry: {
        nyc_core: './js/src/index.js',
        home: './js/src/home.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './js/dist')
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}