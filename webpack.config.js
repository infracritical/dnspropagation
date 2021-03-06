const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        main: './javascript/app.jsx',
        vendor: ['react', 'react-dom', 'react-intl']
    },
    output: {
        path: path.resolve('assets/javascript'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        })
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: { presets: ["es2015", "react"] }
        }]
    },
    devtool: 'cheap-source-map',
    watch: false
};
