const path = require('path');

module.exports = {
    entry: {
        home: './src/js/home.js',
        iframe_height: './src/js/iframe_height.js',
        icon_display: './src/js/icon_display.js',
        table_of_contents: './src/js/table_of_contents.js'
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