const path = require('path');

module.exports = {
    entry: {
        nyc_core: './src/js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/js')
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