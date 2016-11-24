var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')

module.exports = {
    entry: {
        app: __dirname + '/src/app',
        vendor: __dirname + '/vendor/vendor'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!postcss!sass")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ],
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./src/sass/")]
    },
    postcss: [autoprefixer({browsers: ['last 3 versions']})],
    resolve: {
        extensions: ['', '.js', '.scss']
    }
}
