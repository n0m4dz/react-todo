var express = require('express')
var webpack = require('webpack')

var webpackDevConfig = require('./webpack.config')
var WebpackDevMiddleware = require('webpack-dev-middleware')

var app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);

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
    var data = {
        users: [
            {
                name: 'bat'
            },
            {
                name: 'dorj'
            }
        ],
        pageTitle: 'IT IS HOME PAGE'
    };
    res.render('index', {data: data})
})

app.get('/chat', function (req, res) {
    res.render('chat')
})

io.on('connection', function (socket) {
    console.log('HTTP client is connected');

    socket.on('send', function (data) {
        console.log(data);
        io.emit('received', data)
    })

    socket.on('disconnect', function () {
        console.log('Client disconnected');
    });
});


http.listen(3000, function () {
    console.log('React App is running on port 3000!')
})
