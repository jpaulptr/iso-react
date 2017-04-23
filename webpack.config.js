const webpack = require('webpack');
const path = require('path');

const sourceDir = 'source';

const options = {
    constentBase: `./${sourceDir}`,
    cache: true,
    debug: true,
    noInfo: true,
    entry: [
        'webpack-dev-server/client?http://localhost:127.0.0.1:8080',
        'webpack/hot/only-dev-server',
        './source/web/main.js',
    ],
    stats: {
        colors: true,
        reasons: true,
    },
    module: {
        preloaders: [{
            test: /\.jsx$/,
            loaders: ['eslint'],
            include: path.join(_dirname, sourceDir)
        }, {
            test: /\.js$/,
            loaders: ['eslint'],
            include: path.join(_dirname, sourceDir)
        }, {
            test: /\.jsx$/,
            loaders: ['react-hot', 'jsx?harmony'],
            include: path.join(_dirname, sourceDir)
        }, {
            test: /\.js$/,
            loaders: ['react-hot', 'jsx?harmony'],
            include: path.join(_dirname, sourceDir)
        }, {
            test: /\.json$/,
            loaders: 'json',
            include: path.join(_dirname, sourceDir)
        }, {
            test: /\.scss$/,
            loaders: ['css', 'scss'],
            include: path.join(_dirname, sourceDir)
        }],
    },
    eslint: {
        configFile: '.eslintrc.json',
        emitError: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ]
};