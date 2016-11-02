var webpack = require('webpack');
var server = require('webpack-dev-server');
var config = require('./webpack.config.js');

var compiler = webpack(config);
var serverConfig = {
    contentBase: './dist'
}

new server(compiler, serverConfig).listen(3000, function(err) {
    if (err) console.log(err);
    console.log('Running at Localhost:3000');
})
