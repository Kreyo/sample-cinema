const webpack = require('webpack');
module.exports = {
    entry: [
        './src/main.js'
    ],
    vendor: ['react', 'react-dom', 'bootstrap'],
    devtool: "source-map",
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
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.min.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(
            {
                minimize: true,
                compress: {
                    warnings: false

                }
            })
    ]
}; 
