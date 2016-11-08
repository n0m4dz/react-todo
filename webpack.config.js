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
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.scss', '.less']
    }
}
