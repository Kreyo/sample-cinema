const webpack = require('webpack');
module.exports = {
    entry: [
        './views/public/main.js'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/views/public',
        publicPath: '/',
        filename: 'bundle.js'
    }
}; 
