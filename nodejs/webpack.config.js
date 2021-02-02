const path = require('path');

module.exports = {
    mode: 'none',
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'my-app.js'
    },
    optimization: {
        minimize: false
    }
}