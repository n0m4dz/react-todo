var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')

module.exports = {
    entry: __dirname + '/src/app',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
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
        new ExtractTextPlugin("bundle.css")
    ],
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./src/sass/")]
    },
    postcss: [autoprefixer({browsers: ['last 3 versions']})],
    resolve: {
        extensions: ['', '.js', '.scss', '.less']
    }
}
