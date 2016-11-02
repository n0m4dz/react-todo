module.exports = {
    entry: __dirname + '/src/app',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.scss', '.less']
    }
}
