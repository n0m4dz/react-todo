let webpack = require('webpack');
let server = require('webpack-dev-server');
let config = require('./webpack.config.js');

let compiler = webpack(config);
let serverConfig = {
    contentBase: './dist'
}

new server(compiler, serverConfig).listen(3000, function (err) {
    if (err) console.log(err);
    console.log('Running at Localhost:3000');
})
