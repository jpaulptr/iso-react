const webpack = require('webpack');
const path = require('path');

const sourceDir = 'source';

const options = {
    entry: [
        'webpack-dev-server/client?http://localhost:127.0.0.1:8080',
        'webpack/hot/only-dev-server',
        './source/web/main.js',
    ],
    output: {
        filename: 'bundle.js'
    },
    stats: {
        colors: true,
        reasons: true,
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loaders: ['eslint-loader'],
            include: path.join(__dirname, sourceDir),
            enforce: 'pre',
        }, {
            test: /\.(js|jsx)$/,
            loaders: ['react-hot-loader', 'babel-loader'],
            include: [
                path.join(__dirname, sourceDir),
            ],
        }, {
            test: /\.json$/,
            loaders: 'json-loader',
            include: path.join(__dirname, sourceDir)
        }, {
            test: /\.scss$/,
            loaders: ['css', 'scss'],
            include: path.join(__dirname, sourceDir)
        }],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        proxy: { // proxy URLs to backend development server
            '/api': 'http://localhost:3000'
        },
        contentBase: path.join(__dirname, sourceDir),
        compress: true,
        historyApiFallback: true,
        hot: true,
        https: false,
        noInfo: true,
    },
};

module.exports = options;
