var express = require('express')
var webpack = require('webpack')
var webpackDevConfig = require('./webpack.config')
var WebpackDevMiddleware = require('webpack-dev-middleware')
var app = express()

var compiler = webpack(webpackDevConfig);
//Webpack Middleware
app.use(WebpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: "/",
    watchOptions: {
        poll: true
    }
}));

app.use(express.static('./dist'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index')
})

app.listen(3000, function () {
    console.log('React App is running on port 3000!')
})
