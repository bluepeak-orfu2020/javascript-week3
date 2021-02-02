const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'none',
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'my-app.js'
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader , 'css-loader' ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}